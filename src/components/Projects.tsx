import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Cpu, Users, Briefcase, Star, Zap } from 'lucide-react';
import { projects, ProjectCategory } from '../data/projects';

const ProjectsSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['5xl']};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};
  overflow: hidden;

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

const TabsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const Tab = styled(motion.button)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.lg};
  padding-right: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.textDim)};
  background: ${({ $active, theme }) => ($active ? `${theme.colors.primary}12` : 'transparent')};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectTable = styled(motion.div)`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProjectRow = styled(motion.a)<{ $color: string }>`
  display: grid;
  grid-template-columns: 2.5rem 1fr auto;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.spacing.xl};
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ $color }) => $color};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
    border-radius: 0 2px 2px 0;

    @media (max-width: 480px) {
      left: -${({ theme }) => theme.spacing.md};
    }
  }

  &:hover::before { opacity: 1; }
  &:hover .proj-title { color: ${({ $color }) => $color}; }
  &:hover .proj-arrow { opacity: 1; transform: translate(2px, -2px); }

  @media (max-width: 640px) {
    grid-template-columns: 1.8rem 1fr auto;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const RowIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textDim};
  letter-spacing: 0.1em;
  text-align: right;
  align-self: flex-start;
  padding-top: 3px;
`;

const RowMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
`;

const RowTop = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
  transition: color ${({ theme }) => theme.transitions.fast};
`;

const CategoryBadge = styled.span<{ $color: string }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $color }) => $color}30;
  background: ${({ $color }) => $color}0e;
  white-space: nowrap;
  flex-shrink: 0;
`;

const ProjectDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    white-space: normal;
  }
`;

const TechRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
`;

const TechPill = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.60rem;
  padding: 1px 6px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.textDim};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const RowArrow = styled.div`
  color: ${({ theme }) => theme.colors.textDim};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const catColor: Record<string, string> = {
  AEL:     '#6366f1',
  Own:     '#3b82f6',
  SPARCS:  '#ff6b6b',
  FreakIT: '#f59e0b',
};

const catLabel: Record<string, string> = {
  AEL:     'AI Experience Lab',
  Own:     'Personal Project',
  SPARCS:  'SPARCS',
  FreakIT: 'FreakIT',
};

type FilterId = ProjectCategory | 'All' | 'Stars';

const categories: { id: FilterId; label: string; icon: JSX.Element }[] = [
  { id: 'Stars',   label: 'Stars',             icon: <Star size={13} /> },
  { id: 'AEL',     label: 'AI Experience Lab',  icon: <Cpu size={13} /> },
  { id: 'SPARCS',  label: 'SPARCS',             icon: <Zap size={13} /> },
  { id: 'FreakIT', label: 'FreakIT',            icon: <Users size={13} /> },
  { id: 'Own',     label: 'Personal',           icon: <Briefcase size={13} /> },
  { id: 'All',     label: 'All',                icon: <Sparkles size={13} /> },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};
const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, transition: { duration: 0.12 } },
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterId>('Stars');

  const filtered =
    activeFilter === 'All'   ? projects :
    activeFilter === 'Stars' ? projects.filter((p) => p.star) :
    projects.filter((p) => p.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel><Briefcase size={13} /> Portfolio</SectionLabel>
          <SectionTitle>Projects</SectionTitle>
        </SectionHeader>

        <TabsContainer>
          {categories.map((cat) => (
            <Tab
              key={cat.id}
              $active={activeFilter === cat.id}
              onClick={() => setActiveFilter(cat.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.icon}
              {cat.label}
            </Tab>
          ))}
        </TabsContainer>

        <AnimatePresence mode="wait">
          <ProjectTable
            key={activeFilter}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filtered.map((proj, i) => (
              <ProjectRow
                key={proj.id}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                $color={proj.color || catColor[proj.category]}
                variants={rowVariants}
              >
                <RowIndex>{String(i + 1).padStart(2, '0')}</RowIndex>

                <RowMain>
                  <RowTop>
                    <ProjectTitle className="proj-title">{proj.title}</ProjectTitle>
                    <CategoryBadge $color={proj.color || catColor[proj.category]}>
                      {catLabel[proj.category]}
                    </CategoryBadge>
                  </RowTop>
                  <ProjectDesc>{proj.description}</ProjectDesc>
                  {proj.tech && (
                    <TechRow>
                      {proj.tech.map((t) => <TechPill key={t}>{t}</TechPill>)}
                    </TechRow>
                  )}
                </RowMain>

                <RowArrow className="proj-arrow">
                  <ArrowUpRight size={16} />
                </RowArrow>
              </ProjectRow>
            ))}
          </ProjectTable>
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};