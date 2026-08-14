import React from 'react';
import { ExternalLink, ShieldCheck, Landmark, ArrowUpRight } from 'lucide-react';
import { PROJECT_INFO } from '../data/heritageData';

export default function OfficialLinkBanner() {
  return (
    <div className="section-wrapper" style={{ paddingTop: 0 }}>
      <div className="official-banner">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', color: '#60a5fa', fontSize: '0.82rem', fontWeight: '700', marginBottom: '1rem' }}>
          <ShieldCheck size={16} />
          <span>부산광역시 공식 미래유산 연동 사이트</span>
        </div>

        <h3>부산광역시 공식 미래유산 보존·활용 사업 연계</h3>

        <p style={{ color: '#93c5fd', maxWidth: '750px', margin: '0 auto 1.75rem', fontSize: '1rem', lineHeight: '1.6' }}>
          부산미래유산은 근·현대 부산을 배경으로 다수 시민이 체감하고 있는 사건, 인물, 사건이 담긴 
          유·무형 유산 중 보존 가치가 높은 유산을 부산광역시 미래유산보존위원회 심의를 통해 지정 관리하고 있습니다.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={PROJECT_INFO.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <span>부산광역시 공식 미래유산 웹사이트 이동</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
