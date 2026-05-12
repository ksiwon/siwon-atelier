import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Trophy } from 'lucide-react';
import { awards } from '../data/awards';

const AwardsSection = styled.section`
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

const AwardsList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const AwardStrip = styled(motion.div)<{ $isOpen: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: default;
  transition: background ${({ theme }) => theme.transitions.fast};
  background: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.surface : 'transparent')};
`;

const StripHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

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

  @media (max-width: 480px) {
    display: none;
  }
`;

const AwardBigName = styled.h3<{ $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.1rem, 2vw, 1.9rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  flex: 1;
  min-width: 0;
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

const ExpandBody = styled(motion.div)`overflow: hidden;`;

const ExpandInner = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  padding-left: calc(28px + ${({ theme }) => theme.spacing.xl});

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding-left: 0;
  }
`;

const ImageBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    height: 100px;
  }
`;

const AwardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const AwardOrg = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textDim};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const AwardSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const AwardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Tag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textDim};
  background: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const LinkRow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textDim};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  width: fit-content;
  &:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

export const Awards = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <AwardsSection id="awards">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel><Trophy size={13} /> Recognition</SectionLabel>
          <SectionTitle>Major Awards</SectionTitle>
        </SectionHeader>

        <AwardsList>
          {awards.map((award, i) => {
            const isOpen = openId === award.id;
            return (
              <AwardStrip
                key={award.id}
                $isOpen={isOpen}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setOpenId(award.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                <StripHeader>
                  <IndexLabel $isOpen={isOpen}>{award.index}</IndexLabel>
                  <AwardBigName $isOpen={isOpen}>{award.name}</AwardBigName>
                  <YearChip $isOpen={isOpen}>{award.year}</YearChip>
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
                        <ImageBox>
                          <AwardImage src={award.image} alt={award.name} />
                        </ImageBox>
                        <BodyContent>
                          <AwardOrg>{award.org}</AwardOrg>
                          <AwardSubtitle>{award.project}</AwardSubtitle>
                          <AwardDescription>{award.description}</AwardDescription>
                          <TagRow>
                            {award.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </TagRow>
                          <LinkRow href={award.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={11} /> View award page
                          </LinkRow>
                        </BodyContent>
                      </ExpandInner>
                    </ExpandBody>
                  )}
                </AnimatePresence>
              </AwardStrip>
            );
          })}
        </AwardsList>
      </Container>
    </AwardsSection>
  );
};