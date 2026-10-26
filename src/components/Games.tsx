import styled from 'styled-components';
import { ArrowUpRight } from 'lucide-react';
import { games } from '../data/games';
import { typo } from '../styles/typography';
import { Section, Container, SectionTitle, List } from './Section';
import { Gallery } from './Gallery';

const Intro = styled.p`
  ${typo('small')}
  max-width: 560px;
  margin-top: calc(-1 * ${({ theme }) => theme.spacing.md});
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.textMuted};
`;

/* One entry per game: screenshot on one side, text on the other, alternating. */
const Entry = styled.article<{ $flip: boolean }>`
  display: grid;
  grid-template-columns: ${({ $flip }) => ($flip ? '1fr 1.3fr' : '1.3fr 1fr')};
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const GalleryCol = styled.div<{ $flip: boolean }>`
  min-width: 0;
  order: ${({ $flip }) => ($flip ? 2 : 1)};

  @media (max-width: 768px) {
    order: 1;
  }
`;

const Info = styled.div<{ $flip: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 0;
  order: ${({ $flip }) => ($flip ? 1 : 2)};

  @media (max-width: 768px) {
    order: 2;
  }
`;

const Meta = styled.p`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
`;

const Status = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const GameTitle = styled.h2`
  ${typo('title')}
  color: ${({ theme }) => theme.colors.text};

  a {
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Tagline = styled.p`
  ${typo('body')}
  color: ${({ theme }) => theme.colors.text};
`;

const Desc = styled.p`
  ${typo('small')}
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FactValue = styled.dt`
  ${typo('heading')}
  color: ${({ theme }) => theme.colors.text};
`;

const FactLabel = styled.dd`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
`;

const Note = styled.p`
  ${typo('caption')}
  color: ${({ theme }) => theme.colors.textDim};
`;

const PlayLink = styled.a`
  ${typo('small')}
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footnote = styled.p`
  ${typo('caption')}
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textDim};
`;

export const Games = () => (
  <Section id="games">
    <Container>
      <SectionTitle as="h1">Games</SectionTitle>
      <Intro>
        Browser games built from real game data — playable right in the browser, no install.
      </Intro>

      <List>
        {games.map((game) => {
          const flip = games.indexOf(game) % 2 === 1;
          return (
            <Entry key={game.id} $flip={flip}>
              <GalleryCol $flip={flip}>
                <Gallery slides={game.slides} title={game.title} />
              </GalleryCol>

              <Info $flip={flip}>
                <Meta>
                  {game.genre}
                  {game.status && <> · <Status>{game.status}</Status></>}
                </Meta>
                <GameTitle>
                  <a href={game.link} target="_blank" rel="noopener noreferrer">{game.title}</a>
                </GameTitle>
                <Tagline>{game.tagline}</Tagline>
                <Desc>{game.description}</Desc>

                <Facts>
                  {game.facts.map((f) => (
                    <div key={f.label}>
                      <FactValue>{f.value}</FactValue>
                      <FactLabel>{f.label}</FactLabel>
                    </div>
                  ))}
                </Facts>

                {game.modes && <Note>{game.modes.join(' · ')}</Note>}
                <Note>{game.tech.join(' · ')}</Note>
                {game.note && <Note>{game.note}</Note>}

                <PlayLink href={game.link} target="_blank" rel="noopener noreferrer">
                  Play <ArrowUpRight size={14} />
                </PlayLink>
              </Info>
            </Entry>
          );
        })}
      </List>

      <Footnote>
        Unofficial, non-commercial fan projects. Pokémon is a trademark of Nintendo, Creatures Inc.
        and GAME FREAK inc.; these projects are not affiliated with or endorsed by them.
      </Footnote>
    </Container>
  </Section>
);
