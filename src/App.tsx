import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navbar, Footer, ScrollManager } from './components';
import { Home } from './pages/Home';
import { GamesPage } from './pages/GamesPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
