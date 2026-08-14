import React, { useState } from 'react';
import { MapPin, Compass, Sparkles, ExternalLink, ArrowRight, Anchor } from 'lucide-react';
import { ARTIST_PAIRINGS } from '../data/heritageData';

export default function InteractiveMap({ onSelectHeritage }) {
  const [activePinId, setActivePinId] = useState(ARTIST_PAIRINGS[0].id);

  const activePairing = ARTIST_PAIRINGS.find(p => p.id === activePinId) || ARTIST_PAIRINGS[0];

  return (
    <section id="map" className="section-wrapper">
      <div className="section-header">
        <span className="section-tag">INTERACTIVE HERITAGE MAP</span>
        <h2 className="section-title">부산 미래유산 아트 맵</h2>
        <p className="section-subtitle">
          대한민국 개항의 요람 **부산항 1부두**부터 원도심(중구, 영도구, 서구, 동구)까지, 
          부산 구석구석 퍼져있는 미래유산과 예술가들의 연구 거점을 지도로 탐색하세요.
        </p>
      </div>

      <div className="map-container">
        {/* Left Interactive SVG Map Representation */}
        <div className="map-svg-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary-gold)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Anchor size={14} /> BUSAN PORT & HERITAGE ART MAP
            </span>
            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>핀을 클릭하여 작품 상세 확인</span>
          </div>

          <svg viewBox="0 0 600 420" style={{ width: '100%', height: 'auto', background: '#07101b', borderRadius: '12px' }}>
            {/* Busan Coastline & Land outline stylized paths */}
            <path
              d="M 50 180 Q 120 120 220 140 T 380 100 T 520 160 T 550 280 T 420 380 T 260 360 T 100 320 T 50 180 Z"
              fill="#101d30"
              stroke="#20344f"
              strokeWidth="2"
            />
            {/* Harbor Sea & Islands */}
            <ellipse cx="320" cy="340" rx="45" ry="30" fill="#0d1726" stroke="#1c2d45" strokeWidth="1.5" />
            <text x="320" y="345" fill="#475569" fontSize="11" textAnchor="middle">부산항 앞바다</text>

            {/* District Regions */}
            <text x="180" y="190" fill="#475569" fontSize="13" fontWeight="bold">서구</text>
            <text x="240" y="210" fill="#475569" fontSize="13" fontWeight="bold">중구</text>
            <text x="280" y="170" fill="#475569" fontSize="13" fontWeight="bold">동구</text>
            <text x="260" y="290" fill="#475569" fontSize="13" fontWeight="bold">영도구</text>

            {/* Interactive Pins */}
            {/* 1. 부산항 1부두 (중구 해안가) */}
            <g
              transform="translate(255, 215)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('busan-pier-1')}
            >
              <circle r={activePinId === 'busan-pier-1' ? '15' : '10'} fill={activePinId === 'busan-pier-1' ? '#e5b95a' : '#d95338'} opacity="0.4" />
              <circle r="7" fill={activePinId === 'busan-pier-1' ? '#e5b95a' : '#f87171'} />
              <text x="14" y="4" fill="#fef08a" fontSize="12" fontWeight="bold">⚓ 부산항 1부두</text>
            </g>

            {/* 2. 보수동 책방골목 (중구) */}
            <g
              transform="translate(225, 195)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('bosudong')}
            >
              <circle r={activePinId === 'bosudong' ? '14' : '9'} fill={activePinId === 'bosudong' ? '#e5b95a' : '#2563eb'} opacity="0.4" />
              <circle r="6" fill={activePinId === 'bosudong' ? '#e5b95a' : '#38bdf8'} />
              <text x="-95" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">보수동 책방골목</text>
            </g>

            {/* 3. 영도대교 (영도구/중구) */}
            <g
              transform="translate(265, 245)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('yeongdo-bridge')}
            >
              <circle r={activePinId === 'yeongdo-bridge' ? '14' : '9'} fill={activePinId === 'yeongdo-bridge' ? '#e5b95a' : '#2563eb'} opacity="0.4" />
              <circle r="6" fill={activePinId === 'yeongdo-bridge' ? '#e5b95a' : '#38bdf8'} />
              <text x="12" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">영도대교</text>
            </g>

            {/* 4. 임시수도 정부청사 (서구) */}
            <g
              transform="translate(180, 205)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('provisional-capital')}
            >
              <circle r={activePinId === 'provisional-capital' ? '14' : '9'} fill={activePinId === 'provisional-capital' ? '#e5b95a' : '#2563eb'} opacity="0.4" />
              <circle r="6" fill={activePinId === 'provisional-capital' ? '#e5b95a' : '#38bdf8'} />
              <text x="-110" y="-8" fill="#ffffff" fontSize="11" fontWeight="bold">임시수도 정부청사</text>
            </g>

            {/* 5. 산복도로 & 168계단 (동구) */}
            <g
              transform="translate(285, 170)"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePinId('sanbok-doro')}
            >
              <circle r={activePinId === 'sanbok-doro' ? '14' : '9'} fill={activePinId === 'sanbok-doro' ? '#e5b95a' : '#2563eb'} opacity="0.4" />
              <circle r="6" fill={activePinId === 'sanbok-doro' ? '#e5b95a' : '#38bdf8'} />
              <text x="12" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">산복도로 168계단</text>
            </g>

            {/* Busan Museum of Modern History Exhibition Venue Marker */}
            <g transform="translate(235, 225)">
              <rect x="-7" y="-7" width="14" height="14" fill="#22c55e" rx="3" />
              <text x="10" y="18" fill="#4ade80" fontSize="11" fontWeight="bold">부산근현대역사관(전시실)</text>
            </g>
          </svg>
        </div>

        {/* Right Active Pin Information Card */}
        <div className="map-pins-list">
          <div className="map-pin-card active" style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div>
                <span className="badge-heritage" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', marginBottom: '0.4rem', display: 'inline-block' }}>
                  {activePairing.district} • {activePairing.heritageCategory}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fff' }}>
                  {activePairing.heritageName}
                </h3>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: '700' }}>
                미래유산 핀포인트
              </span>
            </div>

            <img
              src={activePairing.heritageImageUrl}
              alt={activePairing.heritageName}
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}
            />

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

            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.65rem' }}
              onClick={() => onSelectHeritage(activePairing.id)}
            >
              <span>이 유산 연계 창으로 바로가기</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
