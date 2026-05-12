import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { roles, aboutDescription } from '../data/siteData';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 100vw;
  padding-top: ${({ theme }) => theme.layout.sectionPadY};
  padding-bottom: ${({ theme }) => theme.layout.sectionPadY};
  padding-left: ${({ theme }) => theme.layout.sectionPadX};
  padding-right: ${({ theme }) => theme.layout.sectionPadX};
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing['3xl']};
    padding-bottom: ${({ theme }) => theme.spacing['3xl']};
  }

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.layout.sectionPadXSm};
    padding-right: ${({ theme }) => theme.layout.sectionPadXSm};
  }
`;

const HeroInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: flex-start;
  padding-top: ${({ theme }) => theme.spacing['2xl']};
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const PhotoCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    max-width: 160px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  filter: grayscale(15%);
`;

const AffiliationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  white-space: nowrap;
`;

const QuickLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  flex-wrap: wrap;
`;

const QuickLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const BioCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const HeroName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw + 0.8rem, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
`;

const HeroPosition = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: '';
    width: 18px;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
    &::before { display: none; }
  }
`;

const BioParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.9;
  max-width: 540px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ResearchInterests = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const InterestTag = styled.span`
  padding: 3px ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textDim};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textMuted};
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`;

const RolesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const RoleDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

const RoleChip = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transitions.normal};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ScrollIndicator = styled(motion.button)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textDim};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: none;
  border: none;
  cursor: pointer;

  &:hover { color: ${({ theme }) => theme.colors.textMuted}; }

  @media (max-width: 480px) { display: none; }
`;

const researchInterests = ['HCI', 'AI Design', 'Voice Interaction', 'Generative AI', 'Medical AI', 'UX Research'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <HeroSection id="hero">
      <HeroInner>
        {/* ── photo ── */}
        <PhotoCol
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfileImage src="/id_photo_nobg.png" alt="JungWon Park" />
          <AffiliationBadge>KAIST · Class of 2022</AffiliationBadge>
          <QuickLinks>
            <QuickLink
              href="https://github.com/ksiwon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
            >
              <Github size={11} /> GitHub
            </QuickLink>
            <QuickLink
              href="mailto:pjo12346@kaist.ac.kr"
              whileHover={{ y: -1 }}
            >
              <Mail size={11} /> Email
            </QuickLink>
          </QuickLinks>
        </PhotoCol>

        {/* ── bio ── */}
        <BioCol variants={containerVariants} initial="hidden" animate="visible">
          <NameBlock>
            <motion.div variants={itemVariants}>
              <HeroName>JungWon Park</HeroName>
            </motion.div>
            <motion.div variants={itemVariants}>
              <HeroPosition>Industrial Design & Computer Science, KAIST</HeroPosition>
            </motion.div>
          </NameBlock>

          <motion.div variants={itemVariants}>
            <BioParagraph>{aboutDescription}</BioParagraph>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ResearchInterests>
              {researchInterests.map((tag) => (
                <InterestTag key={tag}>{tag}</InterestTag>
              ))}
            </ResearchInterests>
          </motion.div>

          <motion.div variants={itemVariants}>
            <RolesRow>
              {roles.map((role) => (
                <RoleChip key={role.title} whileHover={{ scale: 1.01 }}>
                  <RoleDot />
                  {role.title}
                </RoleChip>
              ))}
            </RolesRow>
          </motion.div>
        </BioCol>
      </HeroInner>

      <ScrollIndicator
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        whileHover={{ y: 3 }}
      >
        <span>scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={15} />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};