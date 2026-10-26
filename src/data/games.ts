export interface GameFact {
  value: string;
  label: string;
}

export interface GameArt {
  /** In-game screenshot, 16:10 or 16:9 — shown cropped to the card frame. */
  src: string;
  /** CSS object-position, to keep the interesting part in frame. */
  position?: string;
  /** Show the whole image (letterboxed on `background`) instead of cropping to the frame. */
  contain?: { background: string };
}

export interface Game {
  id: string;
  title: string;
  tagline: string;
  description: string;
  genre: string;
  art: GameArt;
  /** Three headline numbers shown under the description. */
  facts: GameFact[];
  /** Ways to play — rendered as a single mono line. */
  modes?: string[];
  tech: string[];
  link: string;
  /** Shown as a small badge next to the genre, e.g. while a game is not finished. */
  status?: string;
  /** Extra one-liner under the facts (e.g. bring-your-own-ROM notice). */
  note?: string;
}

const BYOR = 'Bring your own ROM — game data is converted in your own browser, never uploaded.';

export const games: Game[] = [
  {
    id: 'radiant-platinum',
    title: 'Radiant Platinum',
    tagline: 'Pokémon Platinum, rebuilt as a 3D game in the browser.',
    description:
      'Not an emulator — maps, collision and rules are read from the original data and rebuilt on three.js, with the two DS screens folded into one. Battles are computed by @pkmn/sim.',
    genre: '3D RPG remake',
    art: { src: '/game-art/radiant-platinum.jpg' },
    facts: [
      { value: '6.3 MB', label: 'Served' },
      { value: '768 MB', label: 'Built in your browser' },
      { value: 'Gen 4', label: 'Platinum' },
    ],
    tech: ['three.js', 'React', '@pkmn/sim', 'WebGL'],
    link: 'https://radiant.siwon.it.kr',
    note: BYOR,
  },
  {
    id: 'cosmic-gold',
    title: 'Cosmic Gold',
    tagline: 'HeartGold, walked again in free-roaming 3D — and continued past the ending.',
    description:
      'Event scripts run on the original VM, battles are ported line by line from the decompilation, and a new story picks up where the original ends. Move freely, in first or third person.',
    genre: '3D RPG remake',
    art: { src: '/game-art/cosmic-gold.jpg' },
    facts: [
      { value: '540', label: 'Maps in 3D' },
      { value: '16', label: 'Gyms' },
      { value: 'Gen 4', label: 'HeartGold' },
    ],
    tech: ['three.js', 'TypeScript', 'WebGL', 'Vite'],
    link: 'https://cosmic.siwon.it.kr',
    note: BYOR,
  },
  {
    id: 'pangea',
    title: 'Pangea',
    tagline: 'Kanto, Johto, Hoenn and Sinnoh as one connected world.',
    description:
      'Four regions stitched together like a map of Japan, with an entirely new story to walk through. The successor to Radiant Platinum and Cosmic Gold.',
    genre: '3D RPG',
    art: { src: '/game-art/pangea-map.jpg', contain: { background: '#efe4c6' } },
    facts: [
      { value: '4', label: 'Regions, one world' },
      { value: 'Lv 200', label: 'Level cap' },
      { value: '1,432', label: 'Rooms' },
    ],
    tech: ['three.js', 'React', 'TypeScript', 'WebGL'],
    link: 'https://pangea.siwon.it.kr',
    status: 'In development',
    note: BYOR,
  },
  {
    id: 'pokemon-aegis',
    title: 'Pokemon Aegis',
    tagline: 'Tower defense with all 1025 Pokémon.',
    description:
      'A strategy tower defense where every Pokémon from Gen 1 to Gen 9 is playable — a single-player story, real-time PvP battles, and a card-collecting auto-battler.',
    genre: 'Tower Defense',
    art: { src: '/game-art/pokemon-aegis.jpg' },
    facts: [
      { value: '1025', label: 'Pokémon' },
      { value: '9', label: 'Generations' },
      { value: '3', label: 'Ways to play' },
    ],
    modes: ['Story', 'Real-time PvP', 'Card auto-battler'],
    tech: ['React', 'TypeScript', 'Konva', 'Firebase'],
    link: 'https://aegis.siwon.it.kr',
  },
  {
    id: 'pokerhythm',
    title: 'Pokerhythm',
    tagline: 'A rhythm game charted from the real music data.',
    description:
      'DS Pokémon music is sequence data, not recordings — so the game ships notes and synthesizes the sound in the browser. Charts are generated on the fly, with a global leaderboard.',
    genre: 'Rhythm',
    art: { src: '/game-art/pokerhythm.jpg' },
    facts: [
      { value: '557', label: 'Songs' },
      { value: '4', label: 'Difficulties per song' },
      { value: '1–20', label: 'Chart levels' },
    ],
    modes: ['4-key', '6-key', 'Single-key (ADOFAI-style)'],
    tech: ['Preact', 'Web Audio', 'Firestore'],
    link: 'https://pokerhythm.siwon.it.kr',
  },
];
