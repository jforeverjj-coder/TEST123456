import React, { useState } from 'react';
import { Search, Filter, Eye, Palette, BookOpen, Volume2 } from 'lucide-react';
import { ARTIST_PAIRINGS } from '../data/heritageData';

export default function DigitalArchive({ onSelectArtwork }) {
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'ALL', name: '전체 보기' },
    { id: 'MEDIA', name: '미디어아트' },
    { id: 'SCULPTURE', name: '조각 & 키네틱' },
    { id: 'PAINTING', name: '회화 & 사진' },
    { id: 'SOUND', name: '사운드 & 공예' },
  ];

  const filteredPairings = ARTIST_PAIRINGS.filter((pair) => {
    const matchesSearch = pair.heritageName.includes(searchQuery) ||
                          pair.artwork.title.includes(searchQuery) ||
                          pair.artist.name.includes(searchQuery) ||
                          pair.district.includes(searchQuery);
    if (!matchesSearch) return false;

    if (filterCategory === 'MEDIA') return pair.artist.genre.includes('미디어');
    if (filterCategory === 'SCULPTURE') return pair.artist.genre.includes('조각') || pair.artist.genre.includes('키네틱');
    if (filterCategory === 'PAINTING') return pair.artist.genre.includes('회화') || pair.artist.genre.includes('사진');
    if (filterCategory === 'SOUND') return pair.artist.genre.includes('사운드') || pair.artist.genre.includes('공예');

    return true;
  });

  return (
    <section id="archive" className="section-wrapper" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="section-header">
        <span className="section-tag">DIGITAL ARCHIVE GALLERY</span>
        <h2 className="section-title">미래유산 예술 재해석 디지털 아카이브</h2>
        <p className="section-subtitle">
          참여 작가들의 고화질 출품 작품, 현장 아카이브 사진, 사운드 트랙을 카테고리별로 탐색하세요.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '2.75rem' }}
            placeholder="유산명, 작가명, 작품명, 구별 이름으로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="archive-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-chip ${filterCategory === cat.id ? 'active' : ''}`}
            onClick={() => setFilterCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Archive Grid */}
      <div className="archive-grid">
        {filteredPairings.map((pair) => (
          <div key={pair.id} className="archive-card">
            <img
              src={pair.artwork.imageUrl}
              alt={pair.artwork.title}
              className="archive-card-img"
            />
            <div className="archive-card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge-heritage" style={{ fontSize: '0.7rem' }}>
                  {pair.district} • {pair.heritageName}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--primary-gold)' }}>
                  {pair.artist.name} 작가
                </span>
              </div>

              <h3 className="archive-card-title">{pair.artwork.title}</h3>
              
              <div style={{ fontSize: '0.82rem', color: '#9ca3af', marginBottom: '1rem' }}>
                {pair.artwork.medium}
              </div>

              <p style={{ fontSize: '0.85rem', color: '#d1d5db', lineHeight: '1.5', marginBottom: '1.25rem', height: '3.6em', overflow: 'hidden' }}>
                {pair.artwork.concept}
              </p>

              <button
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}
                onClick={() => onSelectArtwork(pair.id)}
              >
                <Eye size={16} />
                <span>연구 노트 & 작품 뷰어 보기</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
