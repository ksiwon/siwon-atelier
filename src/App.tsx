import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import {
  Navbar,
  Hero,
  About,
  Awards,
  Publications,
  Projects,
  TechStack,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Awards />
        <Publications />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;