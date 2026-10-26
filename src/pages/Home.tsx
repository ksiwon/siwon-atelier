import { Hero, Awards, Publications, Projects, Contact } from '../components';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Home = () => {
  useDocumentTitle("Siwon's Atelier");

  return (
    <>
      <Hero />
      <Awards />
      <Publications />
      <Projects />
      <Contact />
    </>
  );
};
