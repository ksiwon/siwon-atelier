import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, Sparkles } from 'lucide-react';

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

const Nav = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.nav};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};
  background: ${({ $scrolled, theme }) => 
    $scrolled ? theme.colors.glass.background : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${({ $scrolled, theme }) => 
    $scrolled ? theme.colors.border : 'transparent'};
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  &:hover {
    ${css`
      animation: ${glitchAnimation} 0.3s ease;
    `}
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient.primary};
    transition: width ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    &::after {
      width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primaryGlow};
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: ${({ theme }) => theme.zIndex.nav + 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const MobileNavLink = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
`;

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContainer>
          <Logo
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={20} />
            Siwon
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <SocialLinks>
            <SocialIcon
              href="https://github.com/ksiwon"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </SocialIcon>
            <SocialIcon
              href="mailto:pjo12346@kaist.ac.kr"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
            </SocialIcon>
          </SocialLinks>

          <MobileMenuButton
            onClick={() => setMobileOpen(true)}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={24} />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={() => setMobileOpen(false)}>
              <X size={32} />
            </CloseButton>
            {navItems.map((item, i) => (
              <MobileNavLink
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};
