import { Games } from '../components';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const GamesPage = () => {
  useDocumentTitle("Games · Siwon's Atelier");

  return <Games />;
};
