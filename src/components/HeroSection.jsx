import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, ArrowRight, Anchor, Landmark, Lock, Image } from 'lucide-react';
import { PROJECT_INFO } from '../data/heritageData';

export default function HeroSection({ onExplorePairings, onOpenTicketModal }) {
  const [heroImgType, setHeroImgType] = useState('VAULT'); // 'VAULT' | 'PORT'

  const heroCardImages = {
    VAULT: {
      url: "/vault_art_museum.jpg",
      title: "부산근현대역사관 본관 B1 금고미술관 실물 전경",
      subtitle: "구 한국은행 지하 금고문 및 레드카펫 특화 전시장",
      badge: "금고미술관 실물 전경"
    },
    PORT: {
      url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      title: "귀환(歸還)의 바다 : 제1부두 1912-2026",
      subtitle: "부산항 1부두 (미래유산 2014-03) X 최진혁 작가",
      badge: "미디어 아키텍처"
    }
  };

  const currentImg = heroCardImages[heroImgType];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Narrative Column */}
        <div>
          <div className="hero-tag">
            <Sparkles size={16} />
            <span>부산광역시 X 부산근현대역사관 금고미술관 기획전</span>
          </div>

          <h1 className="hero-heading">
            부산의 미래유산,<br />
            <span>금고미술관의 시선</span>으로<br />
            다시 숨쉬다
          </h1>

          <p className="hero-description">
            1912년 준공된 대한민국 개항의 첫 관문 **부산항 1부두**부터 보수동 책방골목, 영도대교까지 
            부산의 예술가들이 직접 현장 조사·연구하여 재해석한 작품들을 
            구 한국은행 지하 금고를 개조한 **부산근현대역사관 본관 B1 금고미술관**에서 선보입니다.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={onExplorePairings}>
              <span>예술가-미래유산 연계 창 탐색</span>
              <ArrowRight size={18} />
            </button>

            <button className="btn-secondary" onClick={onOpenTicketModal}>
              <Calendar size={18} />
              <span>금고미술관 관람 예약</span>
            </button>
          </div>

          {/* Exhibition Quick Meta Badge */}
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#9ca3af' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Landmark size={16} color="#e5b95a" />
              <span><strong>전시장소:</strong> {PROJECT_INFO.exhibitionVenue}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} color="#e5b95a" />
              <span>{PROJECT_INFO.exhibitionPeriod}</span>
            </div>
          </div>
        </div>

        {/* Right Featured Card Graphic: User Uploaded Vault Art Museum Image */}
        <div className="hero-card">
          <div style={{ position: 'relative' }}>
            <img
              src={currentImg.url}
              alt={currentImg.title}
              className="hero-card-img"
            />
            
            {/* Toggle Image Buttons */}
            <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', display: 'flex', gap: '0.4rem', background: 'rgba(9,18,29,0.85)', padding: '0.3rem', borderRadius: 'var(--radius-sm)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => setHeroImgType('VAULT')}
                style={{
                  background: heroImgType === 'VAULT' ? 'var(--primary-gold)' : 'transparent',
                  color: heroImgType === 'VAULT' ? '#000' : '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.2rem 0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                금고미술관 실경
              </button>
              <button
                onClick={() => setHeroImgType('PORT')}
                style={{
                  background: heroImgType === 'PORT' ? 'var(--primary-gold)' : 'transparent',
                  color: heroImgType === 'PORT' ? '#000' : '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.2rem 0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                부산항 1부두
              </button>
            </div>
          </div>

          <div className="hero-card-info">
            <div>
              <div style={{ fontSize: '0.75rem', color: '#e5b95a', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Lock size={13} /> {currentImg.badge}
              </div>
              <div className="hero-card-title">{currentImg.title}</div>
              <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                {currentImg.subtitle}
              </div>
            </div>
            <span className="badge-artwork">B1 금고미술관</span>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="hero-stats-bar" style={{ maxWidth: '1280px', margin: '3rem auto 0', padding: '2rem 1.5rem 0' }}>
        <div className="stat-item">
          <div className="stat-value">{PROJECT_INFO.stats.heritageCount}+</div>
          <div className="stat-label">부산광역시 지정 미래유산</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{PROJECT_INFO.stats.participatingArtists}명</div>
          <div className="stat-label">참여 부산 지역 예술가</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{PROJECT_INFO.stats.reinterpretedArtworks}점</div>
          <div className="stat-label">조사·연구 재해석 신작</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">금고미술관</div>
          <div className="stat-label">부산근현대역사관 본관 B1</div>
        </div>
      </div>
    </section>
  );
}
