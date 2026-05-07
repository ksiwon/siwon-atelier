import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Star } from 'lucide-react';
import { publications, type Publication } from '../data/publications';

const PublicationsSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['5xl']};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1080px;
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

const PaperList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const PaperItem = styled(motion.article)`
  padding-top: ${({ theme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const PaperMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const VenueRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const VenueBadge = styled.span<{ $type: string }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ $type, theme }) =>
    $type === 'conference' ? `${theme.colors.primary}15` :
    $type === 'journal' ? 'rgba(56,201,180,0.12)' :
    'rgba(124,110,245,0.12)'};
  color: ${({ $type, theme }) =>
    $type === 'conference' ? theme.colors.primary :
    $type === 'journal' ? '#38c9b4' : '#9b8ff5'};
  border: 1px solid ${({ $type, theme }) =>
    $type === 'conference' ? `${theme.colors.primary}25` :
    $type === 'journal' ? 'rgba(56,201,180,0.22)' :
    'rgba(124,110,245,0.22)'};
  letter-spacing: 0.04em;
`;

const AwardBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: rgba(232, 200, 64, 0.10);
  color: #e8c840;
  border: 1px solid rgba(232, 200, 64, 0.22);
`;

const PaperTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.35;
  letter-spacing: -0.01em;

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }
`;

const Authors = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  strong { color: ${({ theme }) => theme.colors.text}; font-weight: 600; }
`;

/* Advisor line — smaller, dimmer */
const Advisors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const AdvisorLine = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.6;

  &::before {
    content: 'Advised by ';
    color: ${({ theme }) => theme.colors.textDim};
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
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.7;
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
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;
  min-width: 80px;

  @media (max-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
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
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const NoLinkNote = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.textDim};
  padding: 5px 10px;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  white-space: nowrap;
`;

const SELF = 'JungWon Park';

const renderAuthors = (authors: string[]) =>
  authors.map((a, i) => (
    <span key={a}>
      {a === SELF ? <strong>{a}</strong> : a}
      {i < authors.length - 1 ? ', ' : ''}
    </span>
  ));

const PaperCard = ({ pub, index }: { pub: Publication; index: number }) => {
  const hasLinks = pub.links && Object.values(pub.links).some(Boolean);

  return (
    <PaperItem
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <PaperMain>
        <VenueRow>
          <VenueBadge $type={pub.type}>{pub.venue}</VenueBadge>
          {pub.award && (
            <AwardBadge>
              <Star size={9} fill="currentColor" />
              {pub.award}
            </AwardBadge>
          )}
        </VenueRow>

        <PaperTitle>
          {pub.links?.paper ? (
            <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </PaperTitle>

        {pub.venueFullName && <VenueFullName>{pub.venueFullName}</VenueFullName>}

        <Authors>{renderAuthors(pub.authors)}</Authors>

        {pub.advisors && (
          <Advisors>
            {pub.advisors.map((adv) => (
              <AdvisorLine key={adv}>{adv}</AdvisorLine>
            ))}
          </Advisors>
        )}

        {pub.tldr && <Tldr>{pub.tldr}</Tldr>}

        {pub.tags && (
          <TagsRow>
            {pub.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagsRow>
        )}
      </PaperMain>

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
    </PaperItem>
  );
};

export const Publications = () => {
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
            <PaperCard key={pub.id} pub={pub} index={i} />
          ))}
        </PaperList>
      </Container>
    </PublicationsSection>
  );
};