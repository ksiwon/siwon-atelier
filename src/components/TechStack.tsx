import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Palette, Database, Cloud, Gamepad2, Film, Box, Cpu, Layers } from 'lucide-react';
import { techStack } from '../data/projects';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TechSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
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
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150px;
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
  animation: ${scroll} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const TechItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  margin: 0 ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  white-space: nowrap;
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.primaryGlow};
    transform: translateY(-4px);
  }
`;

const TechIcon = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $color }) => $color}20;
  color: ${({ $color }) => $color};
`;

const TechName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const SkillCategory = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.glass.background};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CategoryIcon = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ $color }) => $color}20;
  color: ${({ $color }) => $color};
`;

const CategoryTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillTag = styled.span`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`;

const techIcons: Record<string, { icon: JSX.Element; color: string }> = {
  'React': { icon: <Code2 size={20} />, color: '#61dafb' },
  'TypeScript': { icon: <Code2 size={20} />, color: '#3178c6' },
  'Next.js': { icon: <Layers size={20} />, color: '#ffffff' },
  'Python': { icon: <Code2 size={20} />, color: '#3776ab' },
  'FastAPI': { icon: <Cpu size={20} />, color: '#009688' },
  'TensorFlow': { icon: <Cpu size={20} />, color: '#ff6f00' },
  'PyTorch': { icon: <Cpu size={20} />, color: '#ee4c2c' },
  'Figma': { icon: <Palette size={20} />, color: '#f24e1e' },
  'Framer': { icon: <Box size={20} />, color: '#0055ff' },
  'Node.js': { icon: <Code2 size={20} />, color: '#339933' },
  'PostgreSQL': { icon: <Database size={20} />, color: '#4169e1' },
  'MongoDB': { icon: <Database size={20} />, color: '#47a248' },
  'AWS': { icon: <Cloud size={20} />, color: '#ff9900' },
  'Docker': { icon: <Box size={20} />, color: '#2496ed' },
  'Git': { icon: <Code2 size={20} />, color: '#f05032' },
  'Three.js': { icon: <Box size={20} />, color: '#ffffff' },
  'WebGL': { icon: <Box size={20} />, color: '#990000' },
  'Unity': { icon: <Gamepad2 size={20} />, color: '#ffffff' },
  'Blender': { icon: <Box size={20} />, color: '#f5792a' },
  'Adobe CC': { icon: <Film size={20} />, color: '#ff0000' },
};

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 size={22} />,
    color: '#61dafb',
    skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Framer Motion', 'Three.js']
  },
  {
    title: 'Backend & AI',
    icon: <Cpu size={22} />,
    color: '#ff6f00',
    skills: ['Python', 'FastAPI', 'Node.js', 'TensorFlow', 'PyTorch', 'LangChain']
  },
  {
    title: 'Design',
    icon: <Palette size={22} />,
    color: '#f24e1e',
    skills: ['Figma', 'Framer', 'Adobe XD', 'Blender', 'After Effects', 'Prototyping']
  },
  {
    title: 'Infrastructure',
    icon: <Cloud size={22} />,
    color: '#ff9900',
    skills: ['AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Git', 'CI/CD']
  }
];

export const TechStack = () => {
  const doubledTechStack = [...techStack, ...techStack];

  return (
    <TechSection id="tech">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>
            <Sparkles size={14} />
            Technologies
          </SectionTag>
          <SectionTitle>Tech Stack & Skills</SectionTitle>
        </SectionHeader>
      </Container>

      <MarqueeContainer>
        <MarqueeTrack>
          {doubledTechStack.map((tech, index) => (
            <TechItem key={`${tech}-${index}`}>
              <TechIcon $color={techIcons[tech]?.color || '#6366f1'}>
                {techIcons[tech]?.icon || <Code2 size={20} />}
              </TechIcon>
              <TechName>{tech}</TechName>
            </TechItem>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>

      <Container>
        <SkillCategories>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryHeader>
                <CategoryIcon $color={category.color}>
                  {category.icon}
                </CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <SkillsList>
                {category.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillCategories>
      </Container>
    </TechSection>
  );
};
