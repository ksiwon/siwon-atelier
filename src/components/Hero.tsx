import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { roles, aboutDescription } from '../data/projects';

const glitchAnimation = keyframes`
  0%, 100% {
    text-shadow: 
      2px 0 #ff00ff,
      -2px 0 #00ffff;
    transform: translate(0);
  }
  20% {
    text-shadow: 
      -2px 0 #ff00ff,
      2px 0 #00ffff;
    transform: translate(-2px, 1px);
  }
  40% {
    text-shadow: 
      2px 0 #ff00ff,
      -2px 0 #00ffff;
    transform: translate(2px, -1px);
  }
  60% {
    text-shadow: 
      -1px 0 #ff00ff,
      1px 0 #00ffff;
    transform: translate(0);
  }
  80% {
    text-shadow: 
      1px 0 #ff00ff,
      -1px 0 #00ffff;
    transform: translate(1px, 1px);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
  overflow: hidden;
`;

const BackgroundOrb = styled(motion.div)<{ $color: string; $size: string; $top: string; $left: string }>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  filter: blur(80px);
  opacity: 0.4;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  pointer-events: none;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const WelcomeTag = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  letter-spacing: -0.02em;

  .gradient {
    background: ${({ theme }) => theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
  line-height: 1.8;
`;

const RolesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const RoleCard = styled(motion.div)<{ $glitch?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.glass.background};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.primaryGlow};
    transform: translateY(-2px);
    
    ${({ $glitch }) => $glitch && css`
      animation: ${glitchAnimation} 0.3s ease;
    `}
  }

  .icon {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDim};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['md']};
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textDim};
  cursor: pointer;

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-family: ${({ theme }) => theme.fonts.mono};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero">
      <BackgroundOrb
        $color="#6366f1"
        $size="600px"
        $top="-20%"
        $left="20%"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <BackgroundOrb
        $color="#8b5cf6"
        $size="400px"
        $top="50%"
        $left="70%"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <BackgroundOrb
        $color="#06b6d4"
        $size="300px"
        $top="70%"
        $left="10%"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <WelcomeTag variants={itemVariants}>
            <Sparkles size={14} />
            Welcome to my digital space
          </WelcomeTag>

          <HeroTitle variants={itemVariants}>
            <span className="gradient">Siwon's</span> Atelier
          </HeroTitle>

          <HeroSubtitle variants={itemVariants}>
            Frontend Developer researching UX,<br />
            Designer experimenting with AI and Interaction Design.
          </HeroSubtitle>

          <RolesGrid variants={containerVariants}>
            {roles.map((role, index) => (
              <RoleCard
                key={role.title}
                $glitch={role.glitch}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                custom={index}
              >
                <span className="icon">{role.icon}</span>
                <span>{role.title}</span>
              </RoleCard>
            ))}
          </RolesGrid>

          <Description variants={itemVariants}>
            {aboutDescription}
          </Description>
        </motion.div>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToProjects}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ y: 5 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};
