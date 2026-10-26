export interface Slide {
  /** Full-size image, loaded only when the slide is shown. */
  src: string;
  /** Small preview for the thumbnail strip. */
  thumb: string;
  /** Show the whole image (letterboxed on `background`) instead of cropping to the frame. */
  contain?: { background: string };
}

export interface Game {
  id: string;
  title: string;
  /** One line: what kind of game this is. */
  tagline: string;
  /** A short paragraph for someone who has never heard of the game. */
  description: string;
  genre: string;
  /** Screenshots, in display order — the first one is shown initially. */
  slides: Slide[];
  link: string;
  /** Shown next to the genre while a game is not finished. */
  status?: string;
  /** Something a player needs to know before starting. */
  note?: string;
}

/** `/game-art/<dir>/1.webp … <count>.webp`, each with a `t<n>.webp` thumbnail. */
const slides = (dir: string, count: number, contain: Record<number, string> = {}): Slide[] =>
  Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      src: `/game-art/${dir}/${n}.webp`,
      thumb: `/game-art/${dir}/t${n}.webp`,
      contain: contain[n] ? { background: contain[n] } : undefined,
    };
  });

const ROM_NOTE =
  '플레이하려면 원작 게임 파일(롬)이 필요합니다. 내 브라우저 안에서만 쓰이며 어디에도 업로드되지 않습니다.';

export const games: Game[] = [
  {
    id: 'radiant-platinum',
    title: 'Radiant Platinum',
    tagline: '포켓몬스터 플래티넘을 3D로 다시 모험합니다.',
    description:
      '닌텐도 DS 시절의 신오지방을 입체적인 세계에서 처음부터 다시 걸어 볼 수 있습니다. 이야기와 배틀은 원작 그대로이며, 두 화면으로 나뉘어 있던 조작은 한 화면에 모아 브라우저에서 편하게 즐길 수 있게 만들었습니다.',
    genre: '3D 리메이크 RPG',
    slides: slides('radiant-platinum', 6),
    link: 'https://radiant.siwon.it.kr',
    note: ROM_NOTE,
  },
  {
    id: 'cosmic-gold',
    title: 'Cosmic Gold',
    tagline: '하트골드를 자유롭게 걸어 다니고, 엔딩 그 이후의 이야기까지.',
    description:
      '성도지방을 3D로 옮겨, 1인칭과 3인칭을 오가며 어디든 자유롭게 돌아다닐 수 있습니다. 원작의 마을과 체육관, 사천왕까지 처음부터 끝까지 다시 모험하고, 챔피언이 된 뒤에는 원작에 없던 새로운 이야기가 이어집니다.',
    genre: '3D 리메이크 RPG',
    slides: slides('cosmic-gold', 6),
    link: 'https://cosmic.siwon.it.kr',
    note: ROM_NOTE,
  },
  {
    id: 'pangea',
    title: 'Pangea',
    tagline: '관동·성도·호연·신오가 하나로 이어진 새로운 세계.',
    description:
      '네 지방이 일본 지도처럼 하나로 연결된 거대한 세계를 두 발로 여행하는 포켓몬 팬게임입니다. 완전히 새로운 이야기를 따라가며 모든 지방을 누빌 수 있습니다. Radiant Platinum과 Cosmic Gold의 후속작입니다.',
    genre: '3D RPG',
    // 1 title screen, 2 world map, 3–6 region maps (map only, no title)
    slides: slides('pangea', 6, { 2: '#62a5d3', 3: '#62a5d3', 4: '#60a6d3', 5: '#60a6d3', 6: '#60a6d3' }),
    link: 'https://pangea.siwon.it.kr',
    status: '개발 중',
    note: ROM_NOTE,
  },
  {
    id: 'pokemon-aegis',
    title: 'Pokemon Aegis',
    tagline: '모든 포켓몬이 등장하는 타워 디펜스.',
    description:
      '포켓몬을 길목에 배치해 몰려오는 적을 막아내는 전략 게임입니다. 혼자서 이야기를 따라가는 스토리 모드, 친구와 실시간으로 맞붙는 대전, 카드를 모아 자동으로 싸우는 오토 배틀까지 여러 방식으로 즐길 수 있습니다.',
    genre: '타워 디펜스',
    slides: slides('pokemon-aegis', 5),
    link: 'https://aegis.siwon.it.kr',
  },
  {
    id: 'pokerhythm',
    title: 'Pokerhythm',
    tagline: '포켓몬 BGM을 직접 연주하듯 치는 리듬 게임.',
    description:
      '포켓몬 시리즈 속 익숙한 마을과 도로, 체육관의 음악이 그대로 악보가 됩니다. 원곡의 멜로디를 따라 키보드로 노트를 치다 보면 어느새 곡을 연주하고 있습니다. 곡마다 쉬움부터 극한까지 난이도가 있고, 다른 사람들과 순위도 겨룰 수 있습니다.',
    genre: '리듬 게임',
    slides: slides('pokerhythm', 5),
    link: 'https://pokerhythm.siwon.it.kr',
  },
];
