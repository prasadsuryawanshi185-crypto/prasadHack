import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Highlights } from './sections/Highlights';
import { Challenges } from './sections/Challenges';
import { Timeline } from './sections/Timeline';
import { Prizes } from './sections/Prizes';
import { Glimpses } from './sections/Glimpses';
import { Organizers } from './sections/Organizers';
import { Sponsors } from './sections/Sponsors';
import { Journey } from './sections/Journey';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';

function App() {
  return (
    <div className="relative min-h-screen bg-[#070814] text-[#F7F5FF] overflow-x-clip selection:bg-[#1fe0a0]/30 selection:text-[#1fe0a0]">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />

      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Highlights />
        <Challenges />
        <Timeline />
        <Prizes />
        <Glimpses />
        <Organizers />
        <Sponsors />
        <Journey />
        <FAQ />
        <FinalCTA />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
