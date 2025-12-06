import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorDot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.5;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <CursorDot
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
        }}
      />
      <CursorRing
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-16px',
          translateY: '-16px',
          scale: isHovering ? 1.5 : 1,
        }}
      />
    </>
  );
};
