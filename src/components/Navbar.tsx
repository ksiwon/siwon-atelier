import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';
import { typo } from '../styles/typography';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.nav};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.layout.sectionPadX};
  background: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.background : 'transparent')};
  border-bottom: 1px solid ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'transparent')};
  transition: background ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.layout.sectionPadXSm};
    padding-right: ${({ theme }) => theme.layout.sectionPadXSm};
  }
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.button`
  ${typo('heading')}
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const KaistBall = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.button`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textDim};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

const MobileNavLink = styled.button`
  ${typo('title')}
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const navItems = [
  { label: 'Awards', href: '#awards' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
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
      <Nav $scrolled={scrolled}>
        <NavContainer>
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <KaistBall src="/kaist-ball.png" alt="KAIST" />
            Siwon
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.label} onClick={() => scrollToSection(item.href)}>
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenuButton onClick={() => setMobileOpen(true)} aria-label="Menu">
            <Menu size={20} />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      {mobileOpen && (
        <MobileMenu>
          <CloseButton onClick={() => setMobileOpen(false)} aria-label="Close">
            <X size={20} />
          </CloseButton>
          {navItems.map((item) => (
            <MobileNavLink key={item.label} onClick={() => scrollToSection(item.href)}>
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </>
  );
};
