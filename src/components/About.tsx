import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Lightbulb, Mic, Brain, Rocket } from 'lucide-react';

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(99, 102, 241, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
  }
`;

const AboutSection = styled.section`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.9;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Highlight = styled(motion.span).attrs(() => ({
  initial: { backgroundSize: '0% 100%' },
  whileInView: { backgroundSize: '100% 100%' },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "circOut" }
}))`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  background-image: linear-gradient(120deg, ${({ theme }) => theme.colors.primary}40 0%, ${({ theme }) => theme.colors.primary}40 100%);
  background-repeat: no-repeat;
  background-position: 0% 90%;
`;

const InterestsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const InterestCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-2px);
    ${css`
      animation: ${pulseAnimation} 2s infinite;
    `}
  }
`;

const InterestIcon = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $color }) => $color}20;
  color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const InterestText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;



const ProfileContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProfileImage = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 20px ${({ theme }) => theme.colors.primary}20);
`;

const ProfileName = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const StatsCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.background};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const StatIcon = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ $color }) => $color}20;
  color: ${({ $color }) => $color};
`;

const StatContent = styled.div``;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const interests = [
  { text: 'HCI Research', icon: <Brain size={20} />, color: '#6366f1' },
  { text: 'AI Design', icon: <Lightbulb size={20} />, color: '#8b5cf6' },
  { text: 'Voice Interaction', icon: <Mic size={20} />, color: '#06b6d4' },
  { text: 'Generative AI', icon: <Rocket size={20} />, color: '#ec4899' },
];

const stats = [
  { number: '20+', label: 'Projects Delivered', icon: <Rocket size={28} />, color: '#6366f1' },
  { number: '4+', label: 'Research Projects', icon: <Brain size={28} />, color: '#8b5cf6' },
  { number: '2', label: 'Leadership Roles', icon: <GraduationCap size={28} />, color: '#06b6d4' },
];

export const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>
            <Sparkles size={14} />
            About Me
          </SectionTag>
          <SectionTitle>Design × Technology</SectionTitle>
        </SectionHeader>

        <ContentGrid>
          <ProfileContainer
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProfileImage src="/profile-nobg.png" alt="Profile" />
            <ProfileName>박정원 | KAIST 22<br/> (JungWon Park)</ProfileName>
          </ProfileContainer>

          <TextContent
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AboutText>
              Hello! I am a developer and designer majoring in <Highlight>Industrial Design and Computer Science at KAIST</Highlight>, 
              creating new values at the intersection of technology and design.
            </AboutText>
            <AboutText>
              I research Medical AI services at <Highlight>AI Experience Lab</Highlight>,&nbsp;
              develop real-world services at <Highlight>SPARCS</Highlight>, and contribute to the community through 
              student council activities.
            </AboutText>

            <InterestsGrid
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {interests.map((interest, index) => (
                <InterestCard
                  key={interest.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <InterestIcon $color={interest.color}>
                    {interest.icon}
                  </InterestIcon>
                  <InterestText>{interest.text}</InterestText>
                </InterestCard>
              ))}
            </InterestsGrid>
          </TextContent>

          <StatsCard
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <StatItem key={stat.label}>
                <StatIcon $color={stat.color}>
                  {stat.icon}
                </StatIcon>
                <StatContent>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatContent>
              </StatItem>
            ))}
          </StatsCard>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};
