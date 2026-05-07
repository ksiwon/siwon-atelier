import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Trophy } from 'lucide-react';
import { awards } from '../data/awards';

const AwardsSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['5xl']};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};
  position: relative;

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

const AwardsList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const AwardStrip = styled(motion.div)<{ $accentColor: string; $isOpen: boolean }>`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  cursor: default;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 0% 50%,
      ${({ $accentColor }) => $accentColor}10 0%,
      transparent 65%
    );
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
`;

const StripHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 2;
`;

const IndexLabel = styled.span<{ $color: string; $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ $isOpen, $color }) => ($isOpen ? $color : 'rgba(255,255,255,0.18)')};
  letter-spacing: 0.15em;
  width: 28px;
  flex-shrink: 0;
  transition: color 0.4s ease;
`;

const AwardBigName = styled.h3<{ $color: string; $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.2rem, 2vw, 1.9rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  flex: 1;
  min-width: 0;
  color: ${({ $isOpen, $color, theme }) => ($isOpen ? $color : theme.colors.text)};
  transition: color 0.35s ease;
`;

const YearChip = styled.span<{ $color: string; $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid ${({ $isOpen, $color }) => ($isOpen ? $color : 'rgba(255,255,255,0.12)')};
  color: ${({ $isOpen, $color }) => ($isOpen ? $color : 'rgba(255,255,255,0.28)')};
  background: ${({ $isOpen, $color }) => ($isOpen ? `${$color}15` : 'transparent')};
  transition: all 0.35s ease;
  flex-shrink: 0;
`;

const ChevronWrap = styled(motion.div)<{ $color: string; $isOpen: boolean }>`
  color: ${({ $isOpen, $color }) => ($isOpen ? $color : 'rgba(255,255,255,0.22)')};
  transition: color 0.35s ease;
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
  position: relative;
  z-index: 2;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding-left: 0;
  }
`;

const ImageBox = styled.div<{ $accentColor: string }>`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid ${({ $accentColor }) => $accentColor}30;
  background: ${({ $accentColor }) => $accentColor}0a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    height: 90px;
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

const Tag = styled.span<{ $color: string }>`
  padding-top: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}10;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ $color }) => $color}25;
`;

const LinkRow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textDim};
  text-decoration: none;
  transition: color 0.2s ease;
  width: fit-content;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
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
                $accentColor={award.accentColor}
                $isOpen={isOpen}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setOpenId(award.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                <StripHeader>
                  <IndexLabel $color={award.accentColor} $isOpen={isOpen}>
                    {award.index}
                  </IndexLabel>
                  <AwardBigName $color={award.accentColor} $isOpen={isOpen}>
                    {award.name}
                  </AwardBigName>
                  <YearChip $color={award.accentColor} $isOpen={isOpen}>
                    {award.year}
                  </YearChip>
                  <ChevronWrap
                    $color={award.accentColor}
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
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ExpandInner>
                        <ImageBox $accentColor={award.accentColor}>
                          <AwardImage src={award.image} alt={award.name} />
                        </ImageBox>
                        <BodyContent>
                          <AwardOrg>{award.org}</AwardOrg>
                          <AwardSubtitle>{award.project}</AwardSubtitle>
                          <AwardDescription>{award.description}</AwardDescription>
                          <TagRow>
                            {award.tags.map((tag) => (
                              <Tag key={tag} $color={award.accentColor}>{tag}</Tag>
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