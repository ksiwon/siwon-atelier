import styled from 'styled-components';
import { typo } from '../styles/typography';

export const Section = styled.section`
  padding: ${({ theme }) => theme.layout.sectionPadY} ${({ theme }) => theme.layout.sectionPadX};

  @media (max-width: 768px) {
    padding-top: ${({ theme }) => theme.layout.sectionPadYSm};
    padding-bottom: ${({ theme }) => theme.layout.sectionPadYSm};
  }

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.layout.sectionPadXSm};
    padding-right: ${({ theme }) => theme.layout.sectionPadXSm};
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  ${typo('title')}
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

/** Hairline-separated list used by every section. */
export const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
