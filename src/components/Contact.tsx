import styled from 'styled-components';
import { contacts } from '../data/siteData';
import { typo } from '../styles/typography';
import { Section, Container, SectionTitle, List } from './Section';

const Row = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const Label = styled.span`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
  padding-top: 2px;
`;

const Values = styled.div`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  flex-direction: column;

  a {
    width: fit-content;
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Contact = () => (
  <Section id="contact">
    <Container>
      <SectionTitle>Contact</SectionTitle>

      <List>
        <Row>
          <Label>Email</Label>
          <Values>
            <a href={`mailto:${contacts.email1}`}>{contacts.email1}</a>
            <a href={`mailto:${contacts.email2}`}>{contacts.email2}</a>
          </Values>
        </Row>
        <Row>
          <Label>Elsewhere</Label>
          <Values>
            <a href="https://github.com/ksiwon" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/jung-won-park-954487376/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Values>
        </Row>
        <Row>
          <Label>Affiliation</Label>
          <Values>
            <span>KAIST — Industrial Design / School of Computing</span>
            <span>AI Experience Lab</span>
          </Values>
        </Row>
        <Row>
          <Label>Location</Label>
          <Values>
            <span>N25, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, Korea</span>
          </Values>
        </Row>
      </List>
    </Container>
  </Section>
);
