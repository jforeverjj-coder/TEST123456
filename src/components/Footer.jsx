import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECT_INFO } from '../data/heritageData';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#fff', fontWeight: '700', marginBottom: '0.75rem' }}>
            {PROJECT_INFO.title}
          </div>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', maxWidth: '500px' }}>
            부산광역시 지정 미래유산의 조사·연구 및 부산 지역 작가의 현대 예술 재해석을 통해 
            부산근현대역사관에서 펼쳐지는 특별 융합 프로젝트입니다.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--primary-gold)', fontSize: '0.85rem', fontWeight: '600' }}>
            <span>주최: 부산광역시</span>
            <span>주관: 부산근현대역사관</span>
            <span>협력: 부산미래유산 보존위원회</span>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: '700', color: '#fff', marginBottom: '0.75rem' }}>바로가기 메뉴</div>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '0.5rem', fontSize: '0.88rem' }}>
            <li><a href="#pairing" style={{ color: '#9ca3af', textDecoration: 'none' }}>예술가-미래유산 연계 창</a></li>
            <li><a href="#museum" style={{ color: '#9ca3af', textDecoration: 'none' }}>부산근현대역사관 전시실</a></li>
            <li><a href="#map" style={{ color: '#9ca3af', textDecoration: 'none' }}>부산 아트 맵</a></li>
            <li><a href="#archive" style={{ color: '#9ca3af', textDecoration: 'none' }}>디지털 아카이브</a></li>
            <li><a href="#citizen" style={{ color: '#9ca3af', textDecoration: 'none' }}>시민 방명록</a></li>
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: '700', color: '#fff', marginBottom: '0.75rem' }}>공식 기관 링크</div>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '0.5rem', fontSize: '0.88rem' }}>
            <li>
              <a href={PROJECT_INFO.officialUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-gold-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                부산미래유산 공식 웹사이트 <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://www.busan.go.kr/mch" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                부산근현대역사관 홈페이지 <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://www.busan.go.kr" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                부산광역시청 <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © 2026 Busan Metropolitan City & Busan Museum of Modern History. All Rights Reserved.
      </div>
    </footer>
  );
}
