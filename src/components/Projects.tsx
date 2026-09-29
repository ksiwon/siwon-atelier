import { useState } from 'react';
import styled, { css } from 'styled-components';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import { typo } from '../styles/typography';
import { Section, Container, SectionTitle, List } from './Section';

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Tab = styled.button<{ $active: boolean }>`
  ${typo('small')}
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textDim)};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const rowStyles = css`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProjectRow = styled.a`
  ${rowStyles}

  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* Retired deployment: same layout, not a link. */
const ProjectRowStatic = styled.div`
  ${rowStyles}
`;

const RowMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const ProjectTitle = styled.h3`
  ${typo('heading')}
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.fast};
`;

const ProjectDesc = styled.p`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Category = styled.span`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
  flex-shrink: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

const catLabel: Record<ProjectCategory, string> = {
  AEL:     'AI Experience Lab',
  Game:    'Game',
  Own:     'Personal',
  SPARCS:  'SPARCS',
  FreakIT: 'FreakIT',
};

type FilterId = ProjectCategory | 'All' | 'Stars';

const filters: { id: FilterId; label: string }[] = [
  { id: 'Stars',   label: 'Selected' },
  { id: 'AEL',     label: 'AI Experience Lab' },
  { id: 'Game',    label: 'Game' },
  { id: 'Own',     label: 'Personal' },
  { id: 'FreakIT', label: 'FreakIT' },
  { id: 'SPARCS',  label: 'SPARCS' },
  { id: 'All',     label: 'All' },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterId>('Stars');

  const filtered =
    activeFilter === 'All'   ? projects :
    activeFilter === 'Stars' ? projects.filter((p) => p.star) :
    projects.filter((p) => p.category === activeFilter);

  return (
    <Section id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>

        <Tabs>
          {filters.map((f) => (
            <Tab key={f.id} $active={activeFilter === f.id} onClick={() => setActiveFilter(f.id)}>
              {f.label}
            </Tab>
          ))}
        </Tabs>

        <List>
          {filtered.map((proj) => {
            const body = (
              <>
                <RowMain>
                  <ProjectTitle>{proj.title}</ProjectTitle>
                  <ProjectDesc>{proj.description}</ProjectDesc>
                </RowMain>
                <Category>{catLabel[proj.category]}</Category>
              </>
            );

            return proj.link ? (
              <ProjectRow key={proj.id} href={proj.link} target="_blank" rel="noopener noreferrer">
                {body}
              </ProjectRow>
            ) : (
              <ProjectRowStatic key={proj.id}>{body}</ProjectRowStatic>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};
