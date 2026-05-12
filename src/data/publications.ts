// ─── Publications data ────────────────────────────────────────────────────────
// Edit this file to add / update publications. Changes reflect automatically.
// "JungWon Park" in the authors array will be bolded.

export type PublicationType = 'conference' | 'journal' | 'workshop' | 'preprint';

export interface PublicationLink {
  paper?: string;
  code?: string;
  project?: string;
  video?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  advisors?: string[];       // supervising teacher / professor
  venue: string;
  venueFullName?: string;
  year: number;
  type: PublicationType;
  links?: PublicationLink;
  featured?: boolean;
  award?: string;
  tldr?: string;
  tags?: string[];
}

export const publications: Publication[] = [
  {
    id: 'nonlinear-optical-2020',
    title: 'Study of Nonlinear Optical Lenz',
    authors: ['JungWon Park', 'Unbi Ryu', 'Wonyup Lee'],
    advisors: [
      'Gwangseok Kim, Ph.D. (Professor, Dept. of Optical Engineering, Pusan National University)',
    ],
    venue: 'KSIC Fall 2020',
    venueFullName:
      'The Korean Society of Industry Convergence (KSIC), 2020 Fall Conference',
    year: 2020,
    type: 'conference',
    featured: true,
    links: {
      // DOI / paper URL — fill in when available
    },
    award: 'Best Paper Award',
    tldr:
      'Using Z-scan technique, we measured the nonlinear optical coefficients of Rhodamine dye ' +
      'and experimentally confirmed that the nonlinear focusing effect based on Two-Photon ' +
      'Absorption (TPA) can enhance the spatial resolution of photoacoustic microscopy.',
    tags: ['Nonlinear Optics', 'Z-scan', 'Two-Photon Absorption', 'Photoacoustics', 'Spatial Resolution'],
  },
];