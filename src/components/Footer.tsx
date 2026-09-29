import styled from 'styled-components';
import { typo } from '../styles/typography';

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.layout.sectionPadX};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.layout.sectionPadXSm};
    padding-right: ${({ theme }) => theme.layout.sectionPadXSm};
  }
`;

const FooterContent = styled.p`
  ${typo('caption')}
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textDim};
`;

export const Footer = () => (
  <FooterContainer>
    <FooterContent>© {new Date().getFullYear()} JungWon Park</FooterContent>
  </FooterContainer>
);
