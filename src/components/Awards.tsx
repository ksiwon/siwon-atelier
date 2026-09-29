import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { awards } from '../data/awards';
import { typo } from '../styles/typography';
import { Section, Container, SectionTitle, List } from './Section';

const Strip = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const StripHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

const Name = styled.h3<{ $isOpen: boolean }>`
  ${typo('heading')}
  color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.text : theme.colors.textMuted)};
  transition: color ${({ theme }) => theme.transitions.fast};
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
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const AwardImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  display: block;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Project = styled.p`
  ${typo('body')}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
`;

const Meta = styled.p`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
`;

const MetaLink = styled.a`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
  width: fit-content;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: ${({ theme }) => theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Awards = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section id="awards">
      <Container>
        <SectionTitle>Awards</SectionTitle>

        <List>
          {awards.map((award) => {
            const isOpen = openId === award.id;
            return (
              <Strip
                key={award.id}
                onMouseEnter={() => setOpenId(award.id)}
                onMouseLeave={() => setOpenId(null)}
                onClick={() => setOpenId(isOpen ? null : award.id)}
              >
                <StripHeader>
                  <Name $isOpen={isOpen}>{award.name}</Name>
                  <Year>{award.year}</Year>
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
                        <AwardImage src={award.image} alt={award.name} />
                        <Body>
                          <Meta>{award.org}</Meta>
                          <Project>{award.project}</Project>
                          <Description>{award.description}</Description>
                          <Meta>{award.tags.join(' · ')}</Meta>
                          <MetaLink href={award.link} target="_blank" rel="noopener noreferrer">
                            {new URL(award.link).hostname.replace(/^www\./, '')}
                          </MetaLink>
                        </Body>
                      </ExpandInner>
                    </ExpandBody>
                  )}
                </AnimatePresence>
              </Strip>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};
