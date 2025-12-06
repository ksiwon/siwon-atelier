import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Sparkles, Cpu, Users, Briefcase } from 'lucide-react';
import { projects, ProjectCategory } from '../data/projects';

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['5xl']} ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const Tab = styled(motion.button)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ $active, theme }) => $active ? theme.colors.text : theme.colors.textMuted};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.glass.background : 'transparent'};
  border: 1px solid ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.normal};
  backdrop-filter: ${({ $active }) => $active ? 'blur(10px)' : 'none'};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ $active, theme }) => $active && `
    box-shadow: 0 0 20px ${theme.colors.primaryGlow};
  `}
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledProjectCard = styled(motion.a)<{ $color: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.glass.background};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $color }) => $color};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 0%,
      ${({ $color }) => $color}20 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
    pointer-events: none;
  }

  &:hover {
    border-color: ${({ $color }) => $color}60;
    box-shadow: 0 0 40px ${({ $color }) => $color}30;
    
    &::before,
    &::after {
      opacity: 1;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectSubtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ProjectIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transitions.fast};

  ${StyledProjectCard}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-grow: 1;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled.span<{ $color: string }>`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}15;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ $color }) => $color}30;
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary}20;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
`;

const categories: { id: ProjectCategory | 'All'; label: string; icon: JSX.Element }[] = [
  { id: 'All', label: 'All Projects', icon: <Sparkles size={16} /> },
  { id: 'AEL', label: 'AI Experience Lab', icon: <Cpu size={16} /> },
  { id: 'Own', label: 'Own Projects', icon: <Briefcase size={16} /> },
  { id: 'Team', label: 'Team Projects', icon: <Users size={16} /> },
];

const categoryLabels: Record<ProjectCategory, string> = {
  'AEL': 'AEL Project',
  'Own': 'Own Project',
  'Team': 'Team Project'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

const ProjectCard = ({ project, variants }: { project: typeof projects[0], variants: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <StyledProjectCard
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      $color={project.color || '#6366f1'}
      variants={variants}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
    >
      {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
      
      <CardHeader>
        <TitleContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectSubtitle>{categoryLabels[project.category]}</ProjectSubtitle>
        </TitleContainer>
        <ProjectIcon>
          <ExternalLink size={16} />
        </ProjectIcon>
      </CardHeader>
      
      <ProjectDescription>{project.description}</ProjectDescription>
      
      {project.tech && (
        <TechTags>
          {project.tech.map((tech) => (
            <TechTag key={tech} $color={project.color || '#6366f1'}>
              {tech}
            </TechTag>
          ))}
        </TechTags>
      )}
    </StyledProjectCard>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>
            <Sparkles size={14} />
            Portfolio
          </SectionTag>
          <SectionTitle>Featured Projects</SectionTitle>
        </SectionHeader>

        <TabsContainer>
          {categories.map((cat) => (
            <Tab
              key={cat.id}
              $active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.icon}
              {cat.label}
            </Tab>
          ))}
        </TabsContainer>

        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variants={cardVariants}
              />
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};
