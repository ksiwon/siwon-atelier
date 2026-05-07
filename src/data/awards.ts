// ─── Awards data ─────────────────────────────────────────────────────────────
// Edit this file to add, remove, or update awards. Changes reflect on the site automatically.

export interface Award {
  id: string;
  index: string;
  name: string;
  year: string;
  org: string;
  project: string;
  description: string;
  tags: string[];
  accentColor: string;
  image: string;
  link: string;
}

export const awards: Award[] = [
  {
    id: 'if-2026',
    index: '01',
    name: 'iF Design Award 2026',
    year: '2026',
    org: 'iF International Forum Design GmbH',
    project: 'Conext — Startup Stock Investment App',
    description:
      "Conext connects individual investors to South Korea's startup ecosystem via the PIA system, delivered as a mobile app. An intuitive Sankey Diagram visualizes investment flows across GPs and startups at a glance, while a real-time risk management system and community features make startup investing smarter and more accessible. Built with NH Investment & Securities, designed at KAIST Industrial Design.",
    tags: ['Service Design', 'FinTech', 'UX/UI', 'NH Investment & Securities'],
    accentColor: '#e8c840',
    image: '/conext.png',
    link: 'https://ifdesign.com/en/winner-ranking/project/conext/742790',
  },
  {
    id: 'ipesk-2025',
    index: '02',
    name: 'IPESK Next-Generation Engineer',
    year: '2025',
    org: 'Institute for Promotion of Engineering and Science of Korea (IPESK)',
    project: 'Certificate of Excellence',
    description:
      "This badge is awarded by IPESK to outstanding undergraduate students from global research-centric universities selected as IPESK Next-Generation Engineers. It recognizes excellent academic performance in major courses along with a recommendation from the Dean.",
    tags: ['Engineering', 'Science', 'IPESK'],
    accentColor: '#e69138',
    image: '/ipesk.png',
    link: 'https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/N2hrY1RJTXpKWkZScU40UFdGM2ZPUT09',
  },
  {
    id: 'humantech-2021',
    index: '03',
    name: 'Samsung Humantech Paper Award 2021',
    year: '2021',
    org: 'Samsung Electronics',
    project: 'Underwater Robot — 3D Optimal Path & Mineral Classification',
    description:
      "An autonomous underwater robot designed to explore deep-sea resources as alternatives to fossil fuels. Dijkstra's algorithm computes a 3D optimal route accounting for ocean currents and reefs, while a TensorFlow machine-learning model identifies and classifies minerals — including gas hydrates and manganese nodules — through the robot's front camera in real time.",
    tags: ['Robotics', 'AI/ML', 'Arduino', 'Dijkstra', 'TensorFlow'],
    accentColor: '#4a7eff',
    image: '/samsung.png',
    link: 'https://humantech.samsung.com/saitext/index.jsp',
  },
];