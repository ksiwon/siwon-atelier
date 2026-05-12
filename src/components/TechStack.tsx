import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { techStack } from '../data/siteData';

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const TechSection = styled.section`
  padding-top: ${({ theme }) => theme.layout.sectionPadY};
  padding-bottom: ${({ theme }) => theme.layout.sectionPadY};
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: ${({ theme }) => theme.layout.sectionPadYSm};
    padding-bottom: ${({ theme }) => theme.layout.sectionPadYSm};
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.layout.sectionPadX};
  padding-right: ${({ theme }) => theme.layout.sectionPadX};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.layout.sectionPadXSm};
    padding-right: ${({ theme }) => theme.layout.sectionPadXSm};
  }
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

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.background}, transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, ${({ theme }) => theme.colors.background}, transparent);
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 44s linear infinite;
  &:hover { animation-play-state: paused; }
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  margin: 0 ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  white-space: nowrap;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover { border-color: ${({ theme }) => theme.colors.borderHover}; }
`;

const TechDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.6;
  flex-shrink: 0;
`;

const TechName = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const SkillTable = styled.div`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SkillRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: baseline;
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const CategoryLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDim};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`;

const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Pill = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 3px ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const skillCategories = [
  { label: 'Frontend',       skills: ['React', 'Next.js', 'TypeScript', 'Javascript', 'Streamlit'] },
  { label: 'Backend / AI',   skills: ['Python', 'FastAPI', 'Node.js', 'TensorFlow', 'PyTorch', 'MySQL'] },
  { label: 'Design',         skills: ['Figma', 'Adobe XD', 'Blender', 'After Effects', 'Prototyping'] },
  { label: 'Infrastructure', skills: ['AWS', 'Docker', 'MongoDB', 'Git', 'Render', 'Netlify'] },
];

export const TechStack = () => {
  const doubled = [...techStack, ...techStack];

  return (
    <TechSection id="tech">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel><Wrench size={13} /> Technologies</SectionLabel>
          <SectionTitle>Tech Stack & Skills</SectionTitle>
        </SectionHeader>
      </Container>

      <MarqueeContainer>
        <MarqueeTrack>
          {doubled.map((tech, i) => (
            <TechItem key={`${tech}-${i}`}>
              <TechDot />
              <TechName>{tech}</TechName>
            </TechItem>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>

      <Container>
        <SkillTable>
          {skillCategories.map((cat, i) => (
            <SkillRow
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CategoryLabel>{cat.label}</CategoryLabel>
              <SkillPills>
                {cat.skills.map((s) => <Pill key={s}>{s}</Pill>)}
              </SkillPills>
            </SkillRow>
          ))}
        </SkillTable>
      </Container>
    </TechSection>
  );
};