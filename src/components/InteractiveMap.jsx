import React, { useState } from 'react';
import { MapPin, Compass, Sparkles, ExternalLink, ArrowRight, Anchor, Map } from 'lucide-react';
import { ARTIST_PAIRINGS, MUSEUM_INFO } from '../data/heritageData';

export default function InteractiveMap({ onSelectHeritage }) {
  const [activePinId, setActivePinId] = useState(ARTIST_PAIRINGS[0].id);

  const activePairing = ARTIST_PAIRINGS.find(p => p.id === activePinId) || ARTIST_PAIRINGS[0];

  return (
    <section id="map" className="section-wrapper">
      <div className="section-header">
        <span className="section-tag">INTERACTIVE HERITAGE MAP & GOOGLE MAPS</span>
        <h2 className="section-title">부산 미래유산 아트 맵 (구글맵 연동)</h2>
        <p className="section-subtitle">
          대한민국 개항의 요람 **부산항 1부두**부터 원도심(중구, 영도구, 서구, 동구)까지, 
          지도상의 유산 핀포인트를 클릭하시면 **실제 Google 지도로 바로 연결**됩니다.
        </p>
      </div>

      <div className="map-container">
        {/* Left Interactive SVG Map Representation */}
        <div className="map-svg-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary-gold)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Anchor size={14} /> BUSAN PORT & HERITAGE ART MAP
            </span>
            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>핀 클릭 시 구글맵 & 연계 정보 확인</span>
          </div>

          <svg viewBox="0 0 600 420" style={{ width: '100%', height: 'auto', background: '#07101b', borderRadius: '12px' }}>
            {/* Busan Coastline & Land outline stylized paths */}
            <path
              d="M 40 160 Q 110 100 220 120 T 400 80 T 540 140 T 570 280 T 440 390 T 260 370 T 90 330 T 40 160 Z"
              fill="#0f1d30"
              stroke="#1e3452"
              strokeWidth="2"
            />
            {/* Sea Area */}
            <ellipse cx="340" cy="350" rx="60" ry="32" fill="#0b1626" stroke="#162942" strokeWidth="1.5" />
            <text x="340" y="355" fill="#475569" fontSize="11" textAnchor="middle">부산항 앞바다</text>

            {/* Region Labels (Spaced Cleanly) */}
            <text x="110" y="170" fill="#334155" fontSize="13" fontWeight="bold">서구</text>
            <text x="210" y="140" fill="#334155" fontSize="13" fontWeight="bold">중구</text>
            <text x="360" y="130" fill="#334155" fontSize="13" fontWeight="bold">동구</text>
            <text x="280" y="310" fill="#334155" fontSize="13" fontWeight="bold">영도구</text>

            {/* Well-Spaced Interactive Pins */}

            {/* 1. 부산항 1부두 (중구 해안 / 동쪽) */}
            <g
              transform="translate(340, 205)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('busan-pier-1')}
            >
              <circle r={activePinId === 'busan-pier-1' ? '16' : '10'} fill={activePinId === 'busan-pier-1' ? '#e5b95a' : '#d95338'} opacity="0.4" />
              <circle r="7" fill={activePinId === 'busan-pier-1' ? '#e5b95a' : '#f87171'} />
              <text x="14" y="4" fill="#fef08a" fontSize="12" fontWeight="bold">⚓ 부산항 1부두</text>
            </g>

            {/* 2. 보수동 책방골목 (중구 북서쪽) */}
            <g
              transform="translate(190, 165)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('bosudong')}
            >
              <circle r={activePinId === 'bosudong' ? '15' : '9'} fill={activePinId === 'bosudong' ? '#e5b95a' : '#2563eb'} opacity="0.4" />
              <circle r="6" fill={activePinId === 'bosudong' ? '#e5b95a' : '#38bdf8'} />
              <text x="12" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">보수동 책방골목</text>
            </g>

            {/* 3. 영도대교 (중구-영도구 연륙교) */}
            <g
              transform="translate(290, 260)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('yeongdo-bridge')}
            >
              <circle r={activePinId === 'yeongdo-bridge' ? '15' : '9'} fill={activePinId === 'yeongdo-bridge' ? '#e5b95a' : '#2563eb'} opacity="0.4" />
              <circle r="6" fill={activePinId === 'yeongdo-bridge' ? '#e5b95a' : '#38bdf8'} />
              <text x="12" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">영도대교</text>
            </g>

            {/* 4. 임시수도 정부청사 (서구) */}
            <g
              transform="translate(100, 215)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('provisional-capital')}
            >
              <circle r={activePinId === 'provisional-capital' ? '15' : '9'} fill={activePinId === 'provisional-capital' ? '#e5b95a' : '#2563eb'} opacity="0.4" />
              <circle r="6" fill={activePinId === 'provisional-capital' ? '#e5b95a' : '#38bdf8'} />
              <text x="12" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">임시수도 정부청사</text>
            </g>

            {/* 5. 산복도로 168계단 (동구 산비탈) */}
            <g
              transform="translate(380, 145)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('sanbok-doro')}
            >
              <circle r={activePinId === 'sanbok-doro' ? '15' : '9'} fill={activePinId === 'sanbok-doro' ? '#e5b95a' : '#2563eb'} opacity="0.4" />
              <circle r="6" fill={activePinId === 'sanbok-doro' ? '#e5b95a' : '#38bdf8'} />
              <text x="12" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">산복도로 168계단</text>
            </g>

            {/* Busan Museum of Modern History Exhibition Venue Marker */}
            <g transform="translate(230, 220)">
              <rect x="-8" y="-8" width="16" height="16" fill="#22c55e" rx="4" />
              <text x="-120" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">🏛️ 부산근현대역사관(금고미술관)</text>
            </g>
          </svg>
        </div>

        {/* Right Active Pin Information Card with Direct Google Maps Link */}
        <div className="map-pins-list">
          <div className="map-pin-card active" style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div>
                <span className="badge-heritage" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', marginBottom: '0.4rem', display: 'inline-block' }}>
                  {activePairing.district} • {activePairing.heritageCategory}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#fff' }}>
                  {activePairing.heritageName}
                </h3>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: '700' }}>
                미래유산 핀포인트
              </span>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src={activePairing.heritageImageUrl}
                alt={activePairing.heritageName}
                style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}
              />
              <a
                href={activePairing.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '0.5rem',
                  background: 'rgba(9,18,29,0.85)',
                  color: '#38bdf8',
                  padding: '0.3rem 0.7rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(56,189,248,0.4)'
                }}
              >
                <MapPin size={12} />
                <span>Google Maps 지도에서 보기</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#9ca3af', marginBottom: '1rem', lineHeight: '1.5' }}>
              {activePairing.heritageDescription}
            </p>

            <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: '700' }}>
                매칭 부산 예술가 & 작품
              </div>
              <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>
                {activePairing.artwork.title}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#9ca3af' }}>
                {activePairing.artist.name} 작가 ({activePairing.artist.genre})
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <a
                href={activePairing.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ textDecoration: 'none', justifyContent: 'center', padding: '0.65rem', fontSize: '0.82rem', borderColor: 'rgba(56,189,248,0.4)', color: '#38bdf8' }}
              >
                <Map size={16} />
                <span>구글 맵 연결</span>
                <ExternalLink size={14} />
              </a>

              <button
                className="btn-primary"
                style={{ justifyContent: 'center', padding: '0.65rem', fontSize: '0.82rem' }}
                onClick={() => onSelectHeritage(activePairing.id)}
              >
                <span>연계 창 보기</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
