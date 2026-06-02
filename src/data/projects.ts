export type ProjectCategory = 'AEL' | 'Own' | 'FreakIT' | 'SPARCS';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  link: string;
  tech?: string[];
  featured?: boolean;
  star?: boolean;
  color?: string;
}

export const projects: Project[] = [
  // AEL
  { id: 'osler', title: 'Osler', description: 'Surgery Consent Support Agent (w. Asan Medical Center)', category: 'AEL', link: 'https://osler.siwon.it.kr', tech: ['AI', 'Healthcare', 'NLP'], featured: true, star: true, color: '#6366f1' },
  { id: 'freud-jr', title: 'Freud-Jr', description: 'Psychiatry First-visit Support Platform (w. Yonsei Severance)', category: 'AEL', link: 'https://freud-jr.siwon.it.kr', tech: ['AI', 'Mental Health', 'UX'], featured: true, star: true, color: '#8b5cf6' },
  { id: 'medicall', title: 'MediCall', description: 'AI Medical Tourism Platform (at. SWITCH SG)', category: 'AEL', link: 'https://medicall.siwon.it.kr', tech: ['AI', 'Tourism', 'Healthcare'], featured: true, color: '#06b6d4' },
  { id: 'choreobot', title: 'ChoreoBot', description: 'Choreography Creation Support Chatbot', category: 'AEL', link: 'https://choreobot.siwon.it.kr', tech: ['AI', 'Dance', 'Generative'], color: '#ec4899' },

  // Own
  { id: 'pokemon-aegis', title: 'Pokemon Aegis', description: 'Pokemon Tower Defense', category: 'Own', link: 'https://pokemon-td.freakit.co.kr', tech: ['Game', 'React', 'TypeScript'], featured: true, star: true, color: '#eab308' },
  { id: 'stl', title: 'STL', description: 'AI-based Timetable Generator', category: 'Own', link: 'https://stl.siwon.it.kr', tech: ['AI', 'Optimization', 'KAIST'], featured: true, star: true, color: '#3b82f6' },
  { id: 'votex', title: 'VoteX', description: 'Online Secret Voting Platform', category: 'Own', link: 'https://votex.siwon.it.kr', tech: ['Security', 'Web3', 'Democracy'], color: '#22c55e' },
  { id: 'pawmo', title: 'Pawmo', description: 'KAIST Graduation Checker', category: 'Own', link: 'https://pawmo.siwon.it.kr', tech: ['KAIST', 'Graduation', 'Checker'], color: '#22c55e' },
  { id: 'missvoice', title: 'MissVoice', description: 'Recording-based AI Voice Generator', category: 'Own', link: 'https://missvoice.siwon.it.kr', tech: ['AI', 'Voice', 'TTS'], color: '#f43f5e' },
  { id: 'miru-q', title: 'MIRU-Q', description: 'Hikikomori Recovery Project (Quest App)', category: 'Own', link: 'https://miru-aura.netlify.app', tech: ['VR', 'Mental Health', 'Quest'], color: '#a855f7' },
  { id: 'miru-i', title: 'MIRU-I', description: 'Hikikomori Recovery Project (Interview)', category: 'Own', link: 'https://miruni.netlify.app', tech: ['Research', 'UX', 'Interview'], color: '#a855f7' },
  { id: 'kbo-scouter', title: "I'm KBO Scouter!", description: 'Data-driven KBO Foreign Hitter Scouter', category: 'Own', link: 'https://im-kbo-scouter.siwon.it.kr', tech: ['Data', 'Sports', 'Analytics'], star: false, color: '#ef4444' },
  { id: 'hunter', title: 'Hunter', description: 'KAIST Marketplace Board', category: 'Own', link: 'https://hunter-kaist.netlify.app', tech: ['Marketplace', 'KAIST', 'Community'], color: '#14b8a6' },
  { id: 'kira', title: 'KIRA', description: 'KAIST ID Reservation Assistant', category: 'Own', link: 'https://kira7.netlify.app', tech: ['Automation', 'KAIST', 'Booking'], color: '#f97316' },
  { id: 'jjolab', title: 'jjolab', description: 'KAIST Lab Intern Contact Platform', category: 'Own', link: 'https://jjolab.netlify.app', tech: ['KAIST', 'Research', 'Network'], color: '#0ea5e9' },
  { id: 'reviewtrust', title: 'ReviewTrust', description: 'Product Review Comparison Platform', category: 'Own', link: 'https://reviewtrust.siwon.it.kr', tech: ['E-commerce', 'NLP', 'Analysis'], color: '#84cc16' },

  // SPARCS
  { id: 'ara', title: 'Ara', description: 'KAIST Online Community', category: 'SPARCS', link: 'https://newara.sparcs.org', tech: ['Community', 'KAIST', 'Web'], star: true, color: '#ff6b6b' },
  { id: 'students', title: 'Students', description: 'KAIST Undergraduate Student Council Platform', category: 'SPARCS', link: 'https://students.sparcs.org', tech: ['Community', 'KAIST', 'Web'], color: '#4ecdc4' },

  // FreakIT
  { id: 'dab4n', title: 'DAB4N', description: 'Digital Test Grading Platform', category: 'FreakIT', link: 'https://dab4n.netlify.app', tech: ['Education', 'AI', 'Grading'], featured: true, color: '#f59e0b' },
  { id: 'socra', title: 'SOCRATEST', description: 'Creative Cognitive Capability Question Generator (w. Prof. Jae-Seung Jeong)', category: 'FreakIT', link: 'https://socratest.freakit.co.kr', tech: ['AI', 'Education', 'Research'], featured: true, star: true, color: '#10b981' },
  { id: 'dab4s', title: 'DAB4S', description: 'Academy Test Grading Platform', category: 'FreakIT', link: 'https://dab4s.netlify.app', tech: ['Education', 'Academy', 'Grading'], color: '#f59e0b' },
  { id: 'd-maker', title: 'D-Maker', description: 'Test Question Auto-Generator & Editor', category: 'FreakIT', link: 'https://dabanmaker.netlify.app', tech: ['AI', 'Education', 'Generator'], color: '#6366f1' },
];