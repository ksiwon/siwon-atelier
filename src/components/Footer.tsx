import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: -0.01em;
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDim};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FooterLink = styled(motion.a)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDim};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Logo>Siwon's Atelier</Logo>

        <FooterLinks>
          <FooterLink href="#hero" whileHover={{ y: -2 }}>Home</FooterLink>
          <FooterLink href="#projects" whileHover={{ y: -2 }}>Projects</FooterLink>
          <FooterLink href="#contact" whileHover={{ y: -2 }}>Contact</FooterLink>
        </FooterLinks>

        <Copyright>© {currentYear} JungWon Park · KAIST</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};