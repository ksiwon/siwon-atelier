import styled from 'styled-components';
import { Github, Mail } from 'lucide-react';
import { roles, aboutDescription, contacts } from '../data/siteData';
import { typo } from '../styles/typography';

const HeroSection = styled.section`
  padding: calc(${({ theme }) => theme.layout.sectionPadY} + 2rem) ${({ theme }) => theme.layout.sectionPadX}
    ${({ theme }) => theme.layout.sectionPadY};

  @media (max-width: 768px) {
    padding-top: calc(${({ theme }) => theme.layout.sectionPadYSm} + 2rem);
    padding-bottom: ${({ theme }) => theme.layout.sectionPadYSm};
  }

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.layout.sectionPadXSm};
    padding-right: ${({ theme }) => theme.layout.sectionPadXSm};
  }
`;

const HeroInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const PhotoCol = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ProfileImage = styled.img`
  width: 100%;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Box = styled.div`
  ${typo('caption')}
  width: 100%;
  padding: 6px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const QuickLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const QuickLink = styled(Box).attrs({ as: 'a' })`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`;

const BioCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const HeroName = styled.h1`
  ${typo('display')}
  color: ${({ theme }) => theme.colors.text};
`;

const HeroPosition = styled.p`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const BioParagraph = styled.p`
  ${typo('body')}
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 560px;
`;

const Interests = styled.p`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textDim};
`;

const RolesGrid = styled.ul`
  list-style: none;
  max-width: 560px;
`;

const Role = styled.li`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textMuted};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const researchInterests = ['HCI', 'AI Design', 'Voice Interaction', 'Generative AI', 'Medical AI', 'Game Development', 'UX Research'];

export const Hero = () => (
  <HeroSection id="hero">
    <HeroInner>
      <PhotoCol>
        <ProfileImage src="/jw_startup.webp" alt="Jungwon Park" />
        <Box>KAIST, 2022–</Box>
        <QuickLinks>
          <QuickLink href="https://github.com/ksiwon" target="_blank" rel="noopener noreferrer">
            <Github size={12} /> GitHub
          </QuickLink>
          <QuickLink href={`mailto:${contacts.email}`}>
            <Mail size={12} /> Email
          </QuickLink>
        </QuickLinks>
      </PhotoCol>

      <BioCol>
        <div>
          <HeroName>Jungwon Park</HeroName>
          <HeroPosition>Industrial Design &amp; School of Computing, KAIST</HeroPosition>
        </div>

        <BioParagraph>{aboutDescription}</BioParagraph>

        <Interests>{researchInterests.join(' · ')}</Interests>

        <RolesGrid>
          {roles.map((role) => (
            <Role key={role.title}>{role.title}</Role>
          ))}
        </RolesGrid>
      </BioCol>
    </HeroInner>
  </HeroSection>
);
