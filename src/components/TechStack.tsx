import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { techStack } from '../data/siteData';

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const TechSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing['4xl']};
  padding-bottom: ${({ theme }) => theme.spacing['4xl']};
  overflow: hidden;
`;

/* ── Same 900px ── */
const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
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

/* ── Marquee ── */
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
  padding-top: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  margin-left: ${({ theme }) => theme.spacing.xs};
  margin-right: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  white-space: nowrap;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover { border-color: ${({ theme }) => theme.colors.primary}; }
`;

const TechDot = styled.div<{ $color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const TechName = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
`;

/* ── Compact skills table ── */
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
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`;

const CategoryDot = styled.div<{ $color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Pill = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 4px ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const techColors: Record<string, string> = {
  React: '#61dafb', TypeScript: '#3178c6', 'Next.js': '#aaaaaa',
  Python: '#3776ab', FastAPI: '#009688', TensorFlow: '#ff6f00', PyTorch: '#ee4c2c',
  Figma: '#f24e1e', 'Node.js': '#339933', MongoDB: '#47a248', AWS: '#ff9900',
  Docker: '#2496ed', Git: '#f05032', Javascript: '#f7df1e', Streamlit: '#ff4b4b',
  MySQL: '#4479a1', Render: '#46e3b7', Netlify: '#00c7b7', Blender: '#f5792a',
};

const skillCategories = [
  { label: 'Frontend',      color: '#61dafb', skills: ['React', 'Next.js', 'TypeScript', 'Javascript', 'Streamlit'] },
  { label: 'Backend / AI',  color: '#ff6f00', skills: ['Python', 'FastAPI', 'Node.js', 'TensorFlow', 'PyTorch', 'MySQL'] },
  { label: 'Design',        color: '#f24e1e', skills: ['Figma', 'Adobe XD', 'Blender', 'After Effects', 'Prototyping'] },
  { label: 'Infrastructure', color: '#ff9900', skills: ['AWS', 'Docker', 'MongoDB', 'Git', 'Render', 'Netlify'] },
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
              <TechDot $color={techColors[tech] || '#5b8af7'} />
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
              <CategoryLabel>
                <CategoryDot $color={cat.color} />
                {cat.label}
              </CategoryLabel>
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