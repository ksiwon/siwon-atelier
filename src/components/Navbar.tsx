import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail } from 'lucide-react';

/* ─── Nav shell ─── */
const Nav = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow-x: hidden;
  z-index: ${({ theme }) => theme.zIndex.nav};
  padding-top: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
  }
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.glass.background : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(24px)' : 'none')};
  border-bottom: 1px solid ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.border : 'transparent'};
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* ─── Logo ─── */
const Logo = styled(motion.button)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const KaistBall = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  flex-shrink: 0;
`;

/* ─── Nav links ─── */
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavLink = styled(motion.button)`
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
    height: 1.5px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    &::after { width: 100%; }
  }
`;

/* ─── Social icons ─── */
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 860px) {
    display: none;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

/* ─── Mobile ─── */
const MobileMenuButton = styled(motion.button)`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 860px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: ${({ theme }) => theme.zIndex.nav + 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const MobileNavLink = styled(motion.button)`
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

/* ─── Nav items: About, Awards, Publications, Projects, Tech Stack, Contact ─── */
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Awards', href: '#awards' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <NavContainer>
          <Logo
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <KaistBall src="/kaist-ball.png" alt="KAIST" />
            Siwon
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -1 }}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <SocialLinks>
            <SocialIcon
              href="https://github.com/ksiwon"
              target="_blank"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
            </SocialIcon>
            <SocialIcon
              href="mailto:pjo12346@kaist.ac.kr"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
            </SocialIcon>
          </SocialLinks>

          <MobileMenuButton onClick={() => setMobileOpen(true)} whileTap={{ scale: 0.95 }}>
            <Menu size={24} />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CloseButton onClick={() => setMobileOpen(false)}>
              <X size={28} />
            </CloseButton>
            {navItems.map((item, i) => (
              <MobileNavLink
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
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