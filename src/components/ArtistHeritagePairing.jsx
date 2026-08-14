import React, { useState } from 'react';
import { BookOpen, Palette, Volume2, Play, Pause, FileText, UserCheck, MapPin, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { ARTIST_PAIRINGS } from '../data/heritageData';

export default function ArtistHeritagePairing() {
  const [selectedId, setSelectedId] = useState(ARTIST_PAIRINGS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const currentPairing = ARTIST_PAIRINGS.find(item => item.id === selectedId) || ARTIST_PAIRINGS[0];

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="pairing" className="section-wrapper">
      <div className="section-header">
        <span className="section-tag">HERITAGE X ARTIST WINDOW</span>
        <h2 className="section-title">예술가-미래유산 연계 융합 창</h2>
        <p className="section-subtitle">
          부산의 예술가가 미래유산을 현장에서 직접 아카이빙하고 연구하여 창작한 예술 작품과 
          연구 일지를 한눈에 비교 탐색하는 프로젝트 전용 연계 공간입니다.
        </p>
      </div>

      <div className="pairing-window-container">
        {/* Top Tab Bar: Heritage & Artist Selector */}
        <div className="pairing-selector-bar">
          {ARTIST_PAIRINGS.map((pair) => (
            <button
              key={pair.id}
              className={`pairing-tab-btn ${selectedId === pair.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedId(pair.id);
                setIsPlaying(false);
                setShowTranscript(false);
              }}
            >
              <Compass size={16} />
              <span>{pair.heritageName}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>X {pair.artist.name} 작가</span>
            </button>
          ))}
        </div>

        {/* Main Split Grid Window */}
        <div className="pairing-content-grid">
          {/* Left Side: Heritage Research & Field Notebook */}
          <div className="pairing-side pairing-side-left">
            <span className="side-badge badge-heritage">
              <BookOpen size={14} /> 미래유산 조사·연구 노트
            </span>

            <h3 className="item-main-title">{currentPairing.heritageName}</h3>
            
            <div className="item-meta">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <MapPin size={14} color="#e5b95a" /> {currentPairing.district} ({currentPairing.address})
              </span>
              <span>• {currentPairing.heritageCategory}</span>
            </div>

            <img
              src={currentPairing.heritageImageUrl}
              alt={currentPairing.heritageName}
              className="media-frame"
            />

            <p style={{ fontSize: '0.95rem', color: '#d1d5db', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              {currentPairing.heritageDescription}
            </p>

            {/* Artist Research Notebook Box */}
            <div className="research-notebook">
              <div className="notebook-header">
                <UserCheck size={16} />
                <span>{currentPairing.artist.name} 작가 현장 아카이브 일지 ({currentPairing.artist.genre})</span>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#9ca3af', marginBottom: '0.75rem' }}>
                {currentPairing.artist.bio}
              </p>

              <div style={{ fontSize: '0.82rem', color: '#d1d5db', marginBottom: '0.5rem' }}>
                <strong>조사 기간:</strong> {currentPairing.researchNotes.period} (현장 답사 {currentPairing.researchNotes.fieldStudyCount}회)
              </div>

              <div className="keyword-pills">
                {currentPairing.researchNotes.keyKeywords.map((kw, i) => (
                  <span key={i} className="keyword-pill">#{kw}</span>
                ))}
              </div>

              <div className="artist-quote">
                "{currentPairing.researchNotes.quote}"
              </div>
            </div>
          </div>

          {/* Right Side: Reinterpreted Artwork & Audio Docent */}
          <div className="pairing-side pairing-side-right">
            <span className="side-badge badge-artwork">
              <Palette size={14} /> 부산근현대역사관 출품 재해석 신작
            </span>

            <h3 className="item-main-title">{currentPairing.artwork.title}</h3>

            <div className="item-meta">
              <span><strong>매체:</strong> {currentPairing.artwork.medium}</span>
              <span>• <strong>규격:</strong> {currentPairing.artwork.dimensions}</span>
            </div>

            <img
              src={currentPairing.artwork.imageUrl}
              alt={currentPairing.artwork.title}
              className="media-frame"
              style={{ borderColor: 'var(--border-gold)' }}
            />

            <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
              <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                작품 창작 컨셉 & 역사관 전시 설명
              </div>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: '1.6' }}>
                {currentPairing.artwork.concept}
              </p>
            </div>

            {/* Interactive Audio Docent Box */}
            <div className="audio-player-box">
              <div className="audio-header">
                <div className="audio-title">
                  <Volume2 size={16} />
                  <span>{currentPairing.artwork.audioDocent.title}</span>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
                  재생시간 {currentPairing.artwork.audioDocent.duration}
                </span>
              </div>

              <div className="audio-controls">
                <button className="btn-play" onClick={handlePlayToggle}>
                  {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
                </button>

                {/* Animated Sound Wave Bar */}
                <div className="audio-wave">
                  {[40, 70, 30, 90, 50, 80, 20, 100, 60, 40, 75, 95, 30, 85, 50].map((h, i) => (
                    <div
                      key={i}
                      className={`wave-bar ${isPlaying ? 'playing' : ''}`}
                      style={{
                        animationDelay: `${(i % 5) * 0.15}s`,
                        height: isPlaying ? undefined : `${h}%`
                      }}
                    />
                  ))}
                </div>

                <button
                  className="btn-secondary"
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => setShowTranscript(!showTranscript)}
                >
                  <FileText size={14} />
                  <span>{showTranscript ? '자막 닫기' : '해설 자막'}</span>
                </button>
              </div>

              {showTranscript && (
                <div className="audio-transcript-box">
                  <strong style={{ color: 'var(--primary-gold)' }}>[작가 녹음 도슨트 전문]</strong><br />
                  "{currentPairing.artwork.audioDocent.transcript}"
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
