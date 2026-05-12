import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, Star, ChevronDown } from 'lucide-react';
import { publications, type Publication } from '../data/publications';

const PublicationsSection = styled.section`
  padding-top: ${({ theme }) => theme.layout.sectionPadY};
  padding-bottom: ${({ theme }) => theme.layout.sectionPadY};
  padding-left: ${({ theme }) => theme.layout.sectionPadX};
  padding-right: ${({ theme }) => theme.layout.sectionPadX};

  @media (max-width: 768px) {
    padding-top: ${({ theme }) => theme.layout.sectionPadYSm};
    padding-bottom: ${({ theme }) => theme.layout.sectionPadYSm};
  }

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.layout.sectionPadXSm};
    padding-right: ${({ theme }) => theme.layout.sectionPadXSm};
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
`;

const SectionNote = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDim};
`;

/* ── Accordion list ── */
const PaperList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const PubStrip = styled(motion.article)<{ $isOpen: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background ${({ theme }) => theme.transitions.fast};
  background: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.surface : 'transparent')};
`;

const StripHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  cursor: default;

  @media (max-width: 600px) {
    gap: ${({ theme }) => theme.spacing.md};
    padding-top: ${({ theme }) => theme.spacing.lg};
    padding-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const IndexLabel = styled.span<{ $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.primary : theme.colors.textDim)};
  letter-spacing: 0.15em;
  width: 28px;
  flex-shrink: 0;
  transition: color ${({ theme }) => theme.transitions.normal};

  @media (max-width: 600px) {
    display: none;
  }
`;

const PaperHeaderMain = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const VenueRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const VenueBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  letter-spacing: 0.04em;
  white-space: nowrap;
`;

const AwardBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  white-space: nowrap;
`;

const PaperTitle = styled.h3<{ $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1rem, 1.5vw + 0.4rem, 1.35rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.text : theme.colors.textMuted)};
  transition: color ${({ theme }) => theme.transitions.normal};
`;

const YearChip = styled.span<{ $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ $isOpen, theme }) =>
    $isOpen ? theme.colors.primary : theme.colors.border};
  color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.colors.primary : theme.colors.textDim};
  background: transparent;
  transition: all ${({ theme }) => theme.transitions.normal};
  flex-shrink: 0;
  white-space: nowrap;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ChevronWrap = styled(motion.div)<{ $isOpen: boolean }>`
  color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.colors.primary : theme.colors.textDim};
  transition: color ${({ theme }) => theme.transitions.normal};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

/* ── Expand body ── */
const ExpandBody = styled(motion.div)`overflow: hidden;`;

const ExpandInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  padding-left: calc(28px + ${({ theme }) => theme.spacing.xl});

  @media (max-width: 600px) {
    padding-left: 0;
  }
`;

const Authors = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

const AdvisorLine = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.6;
  &::before {
    content: 'Advised by ';
  }
`;

const VenueFullName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textDim};
  font-style: italic;
`;

const Tldr = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  padding-left: ${({ theme }) => theme.spacing.md};
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Tag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textDim};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const PaperLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.xs};
`;

const PaperLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const NoLinkNote = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.textDim};
  padding: 5px 10px;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const SELF = 'JungWon Park';

const renderAuthors = (authors: string[]) =>
  authors.map((a, i) => (
    <span key={a}>
      {a === SELF ? <strong>{a}</strong> : a}
      {i < authors.length - 1 ? ', ' : ''}
    </span>
  ));

interface PaperCardProps {
  pub: Publication;
  index: number;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const PaperCard = ({ pub, index, isOpen, onOpen, onClose }: PaperCardProps) => {
  const hasLinks = pub.links && Object.values(pub.links).some(Boolean);

  return (
    <PubStrip
      $isOpen={isOpen}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <StripHeader>
        <IndexLabel $isOpen={isOpen}>
          {String(index + 1).padStart(2, '0')}
        </IndexLabel>

        <PaperHeaderMain>
          <VenueRow>
            <VenueBadge>{pub.venue}</VenueBadge>
            {pub.award && (
              <AwardBadge>
                <Star size={9} fill="currentColor" />
                {pub.award}
              </AwardBadge>
            )}
          </VenueRow>
          <PaperTitle $isOpen={isOpen}>{pub.title}</PaperTitle>
        </PaperHeaderMain>

        <YearChip $isOpen={isOpen}>{pub.year}</YearChip>

        <ChevronWrap
          $isOpen={isOpen}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown size={16} />
        </ChevronWrap>
      </StripHeader>

      <AnimatePresence initial={false}>
        {isOpen && (
          <ExpandBody
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ExpandInner>
              <Authors>{renderAuthors(pub.authors)}</Authors>

              {pub.advisors && pub.advisors.map((adv) => (
                <AdvisorLine key={adv}>{adv}</AdvisorLine>
              ))}

              {pub.venueFullName && (
                <VenueFullName>{pub.venueFullName}</VenueFullName>
              )}

              {pub.tldr && <Tldr>{pub.tldr}</Tldr>}

              {pub.tags && (
                <TagsRow>
                  {pub.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </TagsRow>
              )}

              <PaperLinks>
                {hasLinks ? (
                  <>
                    {pub.links?.paper && (
                      <PaperLink href={pub.links.paper} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={11} /> paper
                      </PaperLink>
                    )}
                    {pub.links?.project && (
                      <PaperLink href={pub.links.project} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={11} /> project
                      </PaperLink>
                    )}
                    {pub.links?.code && (
                      <PaperLink href={pub.links.code} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={11} /> code
                      </PaperLink>
                    )}
                  </>
                ) : (
                  <NoLinkNote>link TBD</NoLinkNote>
                )}
              </PaperLinks>
            </ExpandInner>
          </ExpandBody>
        )}
      </AnimatePresence>
    </PubStrip>
  );
};

export const Publications = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const sorted = [
    ...publications.filter((p) => p.featured),
    ...publications.filter((p) => !p.featured),
  ];

  return (
    <PublicationsSection id="publications">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>
            <BookOpen size={13} />
            Research Output
          </SectionLabel>
          <SectionTitle>Publications</SectionTitle>
          <SectionNote>Bold name indicates primary author (me).</SectionNote>
        </SectionHeader>

        <PaperList>
          {sorted.map((pub, i) => (
            <PaperCard
              key={pub.id}
              pub={pub}
              index={i}
              isOpen={openId === pub.id}
              onOpen={() => setOpenId(pub.id)}
              onClose={() => setOpenId(null)}
            />
          ))}
        </PaperList>
      </Container>
    </PublicationsSection>
  );
};