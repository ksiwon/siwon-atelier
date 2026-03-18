import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Sparkles } from 'lucide-react';

/* ─── Animations ─── */
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

/* ─── Layout ─── */
const AwardsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['5xl']} ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTag = styled.span`
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
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/* ─── Award Strip ─── */
const AwardsList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255,255,255,0.08);
`;

const AwardStrip = styled(motion.div)<{ $accentColor: string; $isOpen: boolean }>`
  position: relative;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  cursor: default;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 0% 50%, ${({ $accentColor }) => $accentColor}15 0%, transparent 65%);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
`;

const StripHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  z-index: 2;
`;

const IndexLabel = styled.span<{ $color: string; $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ $isOpen, $color }) => $isOpen ? $color : 'rgba(255,255,255,0.2)'};
  letter-spacing: 0.15em;
  width: 28px;
  flex-shrink: 0;
  transition: color 0.4s ease;
`;

const AwardBigName = styled.h3<{ $color: string; $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.4rem, 2.5vw, 2.2rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1;
  flex: 1;
  min-width: 0;
  background: ${({ $isOpen, $color }) =>
    $isOpen ? `linear-gradient(90deg, ${$color}, #fff 50%, ${$color})` : 'none'};
  background-size: 200% auto;
  -webkit-background-clip: ${({ $isOpen }) => ($isOpen ? 'text' : 'unset')};
  -webkit-text-fill-color: ${({ $isOpen }) => ($isOpen ? 'transparent' : 'inherit')};
  background-clip: ${({ $isOpen }) => ($isOpen ? 'text' : 'unset')};
  color: ${({ $isOpen }) => ($isOpen ? 'unset' : 'rgba(255,255,255,0.85)')};
  animation: ${({ $isOpen }) => $isOpen ? css`${shimmer} 3s linear infinite` : 'none'};
  transition: color 0.4s ease;
`;

const YearChip = styled.span<{ $color: string; $isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid ${({ $isOpen, $color }) => $isOpen ? $color : 'rgba(255,255,255,0.15)'};
  color: ${({ $isOpen, $color }) => $isOpen ? $color : 'rgba(255,255,255,0.3)'};
  background: ${({ $isOpen, $color }) => $isOpen ? `${$color}18` : 'transparent'};
  transition: all 0.4s ease;
  flex-shrink: 0;
`;

const ChevronWrap = styled(motion.div)<{ $color: string; $isOpen: boolean }>`
  color: ${({ $isOpen, $color }) => $isOpen ? $color : 'rgba(255,255,255,0.25)'};
  transition: color 0.4s ease;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

/* Expandable body */
const ExpandBody = styled(motion.div)`
  overflow: hidden;
`;

const ExpandInner = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
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
  width: 160px;
  height: 160px;
  border-radius: 12px;
  border: 1px solid ${({ $accentColor }) => $accentColor}40;
  background: ${({ $accentColor }) => $accentColor}10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${({ $accentColor }) => $accentColor};
    filter: blur(28px);
    opacity: 0.35;
    animation: ${glowPulse} 2.5s ease-in-out infinite;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100px;
  }
`;

const AwardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const AwardSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const AwardOrg = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textDim};
  text-transform: uppercase;
  letter-spacing: 0.1em;
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
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}15;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ $color }) => $color}30;
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

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

/* ─── Data ─── */
const awards = [
  {
    id: 'if-2026',
    index: '01',
    name: 'iF Design Award 2026',
    year: '2026',
    org: 'iF International Forum Design GmbH',
    project: 'Conext — Startup Stock Investment App',
    description:
      "Conext connects individual investors to South Korea's startup ecosystem via the PIA system, delivered as a mobile app. An intuitive Sankey Diagram visualizes investment flows across GPs and startups at a glance, while a real-time risk management system and community features make startup investing smarter and more accessible. Built with NH Investment & Securities, designed at KAIST Industrial Design.",
    tags: ['Service Design', 'FinTech', 'UX/UI', 'NH Investment & Securities'],
    accentColor: '#e8c840',
    image: '/conext.png',
    link: 'https://ifdesign.com/en/winner-ranking/project/conext/742790',
  },
  {
    id: 'ipesk-2025',
    index: '02',
    name: 'IPESK Next-Generation Engineer',
    year: '2025',
    org: 'Institute for Promotion of Engineering and Science of Korea (IPESK)',
    project: 'Certificate of Excellence',
    description:
      "This badge is awarded by IPESK to outstanding undergraduate students from global research-centric universities selected as IPESK Next-Generation Engineers. It recognizes excellent academic performance in major courses along with a recommendation from the Dean.",
    tags: ['Engineering', 'Science', 'IPESK'],
    accentColor: '#e69138',
    image: '/ipesk.png',
    link: 'https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/N2hrY1RJTXpKWkZScU40UFdGM2ZPUT09',
  },
  {
    id: 'humantech-2021',
    index: '03',
    name: 'Samsung Humantech Paper Award 2021',
    year: '2021',
    org: 'Samsung Electronics',
    project: 'Underwater Robot — 3D Optimal Path & Mineral Classification',
    description:
      "An autonomous underwater robot designed to explore deep-sea resources as alternatives to fossil fuels. Dijkstra's algorithm computes a 3D optimal route accounting for ocean currents and reefs, while a TensorFlow machine-learning model identifies and classifies minerals — including gas hydrates and manganese nodules — through the robot's front camera in real time.",
    tags: ['Robotics', 'AI/ML', 'Arduino', 'Dijkstra', 'TensorFlow'],
    accentColor: '#4a7eff',
    image: '/samsung.png',
    link: 'https://humantech.samsung.com/saitext/index.jsp',
  },
];

/* ─── Component ─── */
export const Awards = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <AwardsSection id="awards">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>
            <Sparkles size={14} />
            Recognition
          </SectionTag>
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
                initial={{ opacity: 0, y: 20 }}
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
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ChevronDown size={18} />
                  </ChevronWrap>
                </StripHeader>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <ExpandBody
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
                            {award.tags.map(tag => (
                              <Tag key={tag} $color={award.accentColor}>{tag}</Tag>
                            ))}
                          </TagRow>
                          <LinkRow
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={12} />
                            View award page
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