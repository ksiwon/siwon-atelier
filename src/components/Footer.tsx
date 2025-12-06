import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDim};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FooterLink = styled(motion.a)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Logo>
          <Sparkles size={18} />
          Siwon's Atelier
        </Logo>

        <FooterLinks>
          <FooterLink
            href="#hero"
            whileHover={{ y: -2 }}
          >
            Home
          </FooterLink>
          <FooterLink
            href="#projects"
            whileHover={{ y: -2 }}
          >
            Projects
          </FooterLink>
          <FooterLink
            href="#contact"
            whileHover={{ y: -2 }}
          >
            Contact
          </FooterLink>
        </FooterLinks>

        <Copyright>
          © {currentYear} Siwon. at KAIST
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};
