import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { 
  Navbar, 
  Hero, 
  About, 
  Projects, 
  TechStack, 
  Contact, 
  Footer,
  Cursor,
  ParticleBackground
} from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
