import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { publications, type Publication } from '../data/publications';
import { typo } from '../styles/typography';
import { Section, Container, SectionTitle, List } from './Section';

const Strip = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const StripHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  min-width: 0;
`;

const Title = styled.h3<{ $isOpen: boolean }>`
  ${typo('heading')}
  color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.text : theme.colors.textMuted)};
  transition: color ${({ theme }) => theme.transitions.fast};
`;

const Caption = styled.p`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
`;

const Year = styled.span`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
  flex-shrink: 0;
`;

const ExpandBody = styled(motion.div)`
  overflow: hidden;
`;

const ExpandInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 720px;
`;

const Authors = styled.p`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textMuted};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

const Tldr = styled.p`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
`;

const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PaperLink = styled.a`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: ${({ theme }) => theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SELF = 'JungWon Park';

const renderAuthors = (authors: string[]) =>
  authors.map((a, i) => (
    <span key={a}>
      {a === SELF ? <strong>{a}</strong> : a}
      {i < authors.length - 1 ? ', ' : ''}
    </span>
  ));

interface PaperProps {
  pub: Publication;
  isOpen: boolean;
  onToggle: (open: boolean) => void;
}

const Paper = ({ pub, isOpen, onToggle }: PaperProps) => {
  const links = Object.entries(pub.links ?? {}).filter(([, url]) => Boolean(url));

  return (
    <Strip
      onMouseEnter={() => onToggle(true)}
      onMouseLeave={() => onToggle(false)}
      onClick={() => onToggle(!isOpen)}
    >
      <StripHeader>
        <HeaderMain>
          <Title $isOpen={isOpen}>{pub.title}</Title>
          <Caption>
            {pub.venue}
            {pub.award && ` · ${pub.award}`}
          </Caption>
        </HeaderMain>
        <Year>{pub.year}</Year>
      </StripHeader>

      <AnimatePresence initial={false}>
        {isOpen && (
          <ExpandBody
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ExpandInner>
              <Authors>{renderAuthors(pub.authors)}</Authors>
              {pub.advisors?.map((adv) => <Caption key={adv}>Advised by {adv}</Caption>)}
              {pub.venueFullName && <Caption>{pub.venueFullName}</Caption>}
              {pub.tldr && <Tldr>{pub.tldr}</Tldr>}
              {pub.tags && <Caption>{pub.tags.join(' · ')}</Caption>}
              {links.length > 0 && (
                <Links>
                  {links.map(([kind, url]) => (
                    <PaperLink key={kind} href={url} target="_blank" rel="noopener noreferrer">
                      {kind}
                    </PaperLink>
                  ))}
                </Links>
              )}
            </ExpandInner>
          </ExpandBody>
        )}
      </AnimatePresence>
    </Strip>
  );
};

export const Publications = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const sorted = [
    ...publications.filter((p) => p.featured),
    ...publications.filter((p) => !p.featured),
  ];

  return (
    <Section id="publications">
      <Container>
        <SectionTitle>Publications</SectionTitle>

        <List>
          {sorted.map((pub) => (
            <Paper
              key={pub.id}
              pub={pub}
              isOpen={openId === pub.id}
              onToggle={(open) => setOpenId(open ? pub.id : null)}
            />
          ))}
        </List>
      </Container>
    </Section>
  );
};
