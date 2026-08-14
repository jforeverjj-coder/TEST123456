import React, { useState } from 'react';
import { Landmark, Ticket, Menu, X, ExternalLink, Sparkles, Lock } from 'lucide-react';
import { PROJECT_INFO } from '../data/heritageData';

export default function Header({ activeSection, setActiveSection, onOpenTicketModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'pairing', label: '예술가-미래유산 연계 창' },
    { id: 'museum', label: '금고미술관 전시관' },
    { id: 'map', label: '부산 아트 맵' },
    { id: 'archive', label: '디지털 아카이브' },
    { id: 'citizen', label: '시민 방명록 & 공모' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Brand Logo & Badges */}
        <a href="#hero" className="brand-wrapper" onClick={() => handleNavClick('hero')}>
          <div className="brand-badge">금고미술관 X ART</div>
          <div>
            <div className="brand-title">
              <span>부산미래유산</span><br />
              <span className="brand-title-accent">아트 프로젝트</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '0.15rem' }}>
              부산근현대역사관 본관 B1 금고미술관
            </div>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <a
            href={PROJECT_INFO.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
            title="부산광역시 공식 미래유산 웹사이트로 이동"
          >
            부산시 공식 사이트 <ExternalLink size={14} />
          </a>

          <button className="btn-ticket" onClick={onOpenTicketModal}>
            <Ticket size={16} />
            <span>금고미술관 예매</span>
          </button>
        </div>
      </div>
    </header>
  );
}
