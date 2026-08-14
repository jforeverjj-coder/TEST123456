import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ArtistHeritagePairing from './components/ArtistHeritagePairing';
import ExhibitionHub from './components/ExhibitionHub';
import InteractiveMap from './components/InteractiveMap';
import DigitalArchive from './components/DigitalArchive';
import CitizenWall from './components/CitizenWall';
import OfficialLinkBanner from './components/OfficialLinkBanner';
import Footer from './components/Footer';
import TicketModal from './components/TicketModal';
import './styles/index.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('pairing');
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

  const handleSelectHeritage = (id) => {
    setActiveSection('pairing');
    const el = document.getElementById('pairing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-main-root">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenTicketModal={() => setIsTicketModalOpen(true)}
      />

      <main>
        <HeroSection
          onExplorePairings={() => handleSelectHeritage()}
          onOpenTicketModal={() => setIsTicketModalOpen(true)}
        />

        <ArtistHeritagePairing />

        <ExhibitionHub
          onOpenTicketModal={() => setIsTicketModalOpen(true)}
        />

        <InteractiveMap
          onSelectHeritage={handleSelectHeritage}
        />

        <DigitalArchive
          onSelectArtwork={handleSelectHeritage}
        />

        <CitizenWall />

        <OfficialLinkBanner />
      </main>

      <Footer />

      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />
    </div>
  );
}
