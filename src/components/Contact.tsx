import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, MessageCircle, Building2, Globe } from 'lucide-react';
import { contacts } from '../data/siteData';

const ContactSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['5xl']};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};
  position: relative;

  @media (max-width: 480px) {
    padding-top: ${({ theme }) => theme.spacing['3xl']};
    padding-bottom: ${({ theme }) => theme.spacing['3xl']};
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
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
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 540px;
  line-height: 1.7;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const ContactColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const ContactInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const BlockLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: 4px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const AffiliationText = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`;

const SubText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ProfessionalLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.glass.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
    transform: translateX(4px);
  }

  .link-icon {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  .link-label {
    flex: 1;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  .external-icon {
    opacity: 0.3;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  &:hover .external-icon {
    opacity: 1;
  }
`;

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel><MessageCircle size={13} /> Contact</SectionLabel>
          <SectionTitle>Contact Information</SectionTitle>
          <SectionSubtitle>
            I am always open to discussing new research opportunities, collaborations, or innovative projects.
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactColumn
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactInfoBlock>
              <BlockLabel><Building2 size={12} /> Affiliation</BlockLabel>
              <AffiliationText>KAIST</AffiliationText>
              <SubText>
                Department of Industrial Design<br />
                School of Computing
              </SubText>
            </ContactInfoBlock>

            <ContactInfoBlock>
              <BlockLabel><MapPin size={12} /> Location</BlockLabel>
              <AffiliationText>AI Experience Lab</AffiliationText>
              <SubText>
                N25, 291 Daehak-ro, Yuseong-gu<br />
                Daejeon, 34141, Republic of Korea
              </SubText>
            </ContactInfoBlock>
          </ContactColumn>

          <ContactColumn
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfoBlock>
              <BlockLabel><Mail size={12} /> Correspondence</BlockLabel>
              <LinkGroup>
                <ProfessionalLink
                  href={`mailto:${contacts.email1}`}
                  whileHover={{ scale: 1.01 }}
                >
                  <Mail className="link-icon" size={18} />
                  <span className="link-label">{contacts.email1}</span>
                  <ExternalLink className="external-icon" size={14} />
                </ProfessionalLink>
                <ProfessionalLink
                  href={`mailto:${contacts.email2}`}
                  whileHover={{ scale: 1.01 }}
                >
                  <Mail className="link-icon" size={18} />
                  <span className="link-label">{contacts.email2}</span>
                  <ExternalLink className="external-icon" size={14} />
                </ProfessionalLink>
              </LinkGroup>
            </ContactInfoBlock>

            <ContactInfoBlock>
              <BlockLabel><Globe size={12} /> Professional Networks</BlockLabel>
              <LinkGroup>
                <ProfessionalLink
                  href="https://www.linkedin.com/in/jung-won-park-954487376/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                >
                  <ExternalLink className="link-icon" size={18} />
                  <span className="link-label">LinkedIn</span>
                  <ExternalLink className="external-icon" size={14} />
                </ProfessionalLink>
                <ProfessionalLink
                  href="https://github.com/ksiwon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                >
                  <ExternalLink className="link-icon" size={18} />
                  <span className="link-label">GitHub</span>
                  <ExternalLink className="external-icon" size={14} />
                </ProfessionalLink>
              </LinkGroup>
            </ContactInfoBlock>
          </ContactColumn>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};