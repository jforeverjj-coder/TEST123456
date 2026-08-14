import React from 'react';
import { Sparkles, Calendar, MapPin, ArrowRight, Anchor, Landmark } from 'lucide-react';
import { PROJECT_INFO } from '../data/heritageData';

export default function HeroSection({ onExplorePairings, onOpenTicketModal }) {
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

        {/* Right Featured Card Graphic: Busan Port Pier 1 */}
        <div className="hero-card">
          <img
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80"
            alt="부산항 1부두 항만 배경과 미디어 아키텍처"
            className="hero-card-img"
          />
          <div className="hero-card-info">
            <div>
              <div style={{ fontSize: '0.75rem', color: '#e5b95a', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Anchor size={13} /> 금고미술관 대표 출품작 01 (부산항 1부두)
              </div>
              <div className="hero-card-title">귀환(歸還)의 바다 : 제1부두 1912-2026</div>
              <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                부산항 1부두 (미래유산 2014-03) X 최진혁 작가
              </div>
            </div>
            <span className="badge-artwork">미디어 아키텍처</span>
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
