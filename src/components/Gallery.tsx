import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Slide } from '../data/games';
import { typo } from '../styles/typography';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 0;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.borderHover};
    outline-offset: 4px;
  }
`;

const Stage = styled.div<{ $background?: string }>`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: ${({ $background, theme }) => $background ?? theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  touch-action: pan-y;
`;

const ZoomButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
`;

const MainImage = styled.img<{ $contain: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ $contain }) => ($contain ? 'contain' : 'cover')};
`;

const NavButton = styled.button<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === 'left' ? 'left: 8px;' : 'right: 8px;')}
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  background: rgba(14, 16, 21, 0.72);
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  ${Stage}:hover &,
  &:focus-visible {
    opacity: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }

  @media (hover: none) {
    opacity: 1;
  }
`;

const Counter = styled.span`
  ${typo('caption')}
  position: absolute;
  right: 8px;
  bottom: 8px;
  padding: 1px 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  background: rgba(14, 16, 21, 0.72);
  pointer-events: none;
`;

const Thumbs = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Thumb = styled.button<{ $active: boolean }>`
  aspect-ratio: 16 / 10;
  overflow: hidden;
  min-width: 0;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  opacity: ${({ $active }) => ($active ? 1 : 0.55)};
  transition: opacity ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 1;
  }
`;

const ThumbImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* ─── Enlarged view ─── */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  background: rgba(8, 9, 12, 0.94);
`;

const LargeImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const overlayButton = `
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  ${overlayButton}
  top: 12px;
  right: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const LargeNav = styled.button<{ $side: 'left' | 'right' }>`
  ${overlayButton}
  top: 50%;
  ${({ $side }) => ($side === 'left' ? 'left: 12px;' : 'right: 12px;')}
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const LargeCounter = styled.span`
  ${typo('caption')}
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textDim};
`;

const SWIPE_PX = 40;

/** One large screenshot with prev/next buttons, a strip of small previews, and an enlarged view. */
export const Gallery = ({ slides, title }: { slides: Slide[]; title: string }) => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const touchX = useRef<number | null>(null);
  const zoomRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = slides.length;

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  // Only the shown slide is fetched up front; warm the neighbours so stepping feels instant.
  useEffect(() => {
    [index + 1, index - 1].forEach((n) => {
      const slide = slides[(n + count) % count];
      new Image().src = slide.src;
    });
  }, [index, slides, count]);

  // Enlarged view: Esc closes, arrows step, page behind does not scroll.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    const zoomButton = zoomRef.current;
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      zoomButton?.focus();
    };
  }, [open, count]);

  const current = slides[index];

  return (
    <Root
      role="group"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1);
        if (e.key === 'ArrowRight') go(1);
      }}
    >
      <Stage
        $background={current.contain?.background}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1);
        }}
      >
        <ZoomButton ref={zoomRef} onClick={() => setOpen(true)} aria-label="Enlarge screenshot">
          <MainImage
            src={current.src}
            alt={`${title} screenshot ${index + 1}`}
            $contain={!!current.contain}
            decoding="async"
          />
        </ZoomButton>
        <NavButton $side="left" onClick={() => go(-1)} aria-label="Previous screenshot">
          <ChevronLeft size={18} />
        </NavButton>
        <NavButton $side="right" onClick={() => go(1)} aria-label="Next screenshot">
          <ChevronRight size={18} />
        </NavButton>
        <Counter>{index + 1} / {count}</Counter>
      </Stage>

      <Thumbs>
        {slides.map((slide, i) => (
          <Thumb
            key={slide.src}
            $active={i === index}
            onClick={() => setIndex(i)}
            aria-label={`Screenshot ${i + 1}`}
            aria-current={i === index}
          >
            <ThumbImage src={slide.thumb} alt="" loading="lazy" decoding="async" />
          </Thumb>
        ))}
      </Thumbs>

      {open &&
        createPortal(
          <Backdrop
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot ${index + 1} of ${count}`}
            onClick={() => setOpen(false)}
          >
            <LargeImage
              src={current.src}
              alt={`${title} screenshot ${index + 1}`}
              onClick={(e) => e.stopPropagation()}
            />
            <CloseButton ref={closeRef} onClick={() => setOpen(false)} aria-label="Close">
              <X size={22} />
            </CloseButton>
            <LargeNav
              $side="left"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={28} />
            </LargeNav>
            <LargeNav
              $side="right"
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label="Next screenshot"
            >
              <ChevronRight size={28} />
            </LargeNav>
            <LargeCounter>{index + 1} / {count}</LargeCounter>
          </Backdrop>,
          document.body,
        )}
    </Root>
  );
};
