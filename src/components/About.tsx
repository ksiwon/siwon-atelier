import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Lightbulb, Mic, Brain, Rocket, User } from 'lucide-react';

const AboutSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['5xl']};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`;

/* ── Same 900px as all sections ── */
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

/* ── Two-column: text (2fr) + compact stats (1fr) ── */
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.9;
`;

const Emphasis = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

const InterestsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InterestCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-1px);
  }
`;

const InterestIcon = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ $color }) => $color}15;
  color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const InterestText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

/* ── Compact stats: 2×2 grid ── */
const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StatCell = styled.div<{ $color: string }>`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  svg { color: ${({ $color }) => $color}; }
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  color: ${({ theme }) => theme.colors.textDim};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.3;
`;

const interests = [
  { text: 'HCI Research',      icon: <Brain size={15} />,    color: '#5b8af7' },
  { text: 'AI Design',         icon: <Lightbulb size={15} />, color: '#7c6ef5' },
  { text: 'Voice Interaction',  icon: <Mic size={15} />,     color: '#38c9b4' },
  { text: 'Generative AI',     icon: <Rocket size={15} />,   color: '#ec4899' },
];

const stats = [
  { number: '20+', label: 'Projects\nDelivered', icon: <Rocket size={16} />, color: '#5b8af7' },
  { number: '4+',  label: 'Research\nProjects',  icon: <Brain size={16} />,  color: '#7c6ef5' },
  { number: '1+',  label: 'Publications',        icon: <User size={16} />,   color: '#38c9b4' },
  { number: '2',   label: 'Leadership\nRoles',   icon: <User size={16} />,   color: '#ec4899' },
];

export const About = () => (
  <AboutSection id="about">
    <Container>
      <SectionHeader
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel><User size={13} /> About Me</SectionLabel>
        <SectionTitle>Design × Technology</SectionTitle>
      </SectionHeader>

      <ContentGrid>
        <TextContent
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AboutText>
            I am a developer and designer pursuing a double major in{' '}
            <Emphasis>Industrial Design and Computer Science at KAIST</Emphasis>,
            creating new value at the intersection of technology and human-centered design.
          </AboutText>
          <AboutText>
            As a researcher at <Emphasis>AI Experience Lab</Emphasis>, I design and study
            AI-powered medical services. I lead engineering as{' '}
            <Emphasis>CTO of FreakIT</Emphasis>, an AI education startup, and contribute
            to open-source infrastructure at <Emphasis>SPARCS</Emphasis>.
          </AboutText>

          <InterestsGrid
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {interests.map((interest, i) => (
              <InterestCard
                key={interest.text}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
              >
                <InterestIcon $color={interest.color}>{interest.icon}</InterestIcon>
                <InterestText>{interest.text}</InterestText>
              </InterestCard>
            ))}
          </InterestsGrid>
        </TextContent>

        {/* Compact 2×2 stats grid */}
        <StatsGrid
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <StatCell key={stat.label} $color={stat.color}>
              {stat.icon}
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCell>
          ))}
        </StatsGrid>
      </ContentGrid>
    </Container>
  </AboutSection>
);