import React from 'react';
import { Landmark, Calendar, Clock, MapPin, Bus, Volume2, Ticket, CheckCircle, ShieldCheck, Lock } from 'lucide-react';
import { MUSEUM_INFO, PROJECT_INFO } from '../data/heritageData';

export default function ExhibitionHub({ onOpenTicketModal }) {
  return (
    <section id="museum" className="section-wrapper" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="section-header">
        <span className="section-tag">BUSAN MUSEUM OF MODERN HISTORY - B1 VAULT ART MUSEUM</span>
        <h2 className="section-title">부산근현대역사관 금고미술관 기획전시</h2>
        <p className="section-subtitle">
          구 한국은행 부산지점의 육중한 지하 금고를 현대 예술 공간으로 탈바꿈시킨 **본관 지하 1층 '금고미술관'**에서 
          미래유산과 예술이 만들어내는 특별한 울림을 경험하세요.
        </p>
      </div>

      <div className="museum-hub-grid">
        {/* Left Column: Museum Overview & Exhibition Halls */}
        <div className="museum-info-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(229,185,90,0.15)', borderRadius: '50%', color: 'var(--primary-gold)' }}>
              <Lock size={22} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#fff' }}>
                {MUSEUM_INFO.name}
              </h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary-gold)' }}>구 한국은행 부산지점 지하 금고 보존·예술 공간</div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.92rem', color: '#9ca3af', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} color="#e5b95a" />
              <span><strong>위치:</strong> {MUSEUM_INFO.address}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} color="#e5b95a" />
              <span><strong>전시 기간:</strong> {PROJECT_INFO.exhibitionPeriod}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="#e5b95a" />
              <span><strong>관람 시간:</strong> {PROJECT_INFO.openingHours}</span>
            </div>
          </div>

          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
            금고미술관 전시 공간 구성 (본관 B1)
          </h4>

          <div className="museum-halls-list">
            {MUSEUM_INFO.exhibitionHalls.map((hall, idx) => (
              <div key={idx} className="hall-item">
                <div>
                  <div className="hall-name">{hall.name}</div>
                  <div className="hall-topic">{hall.topic}</div>
                </div>
                <CheckCircle size={18} color="#e5b95a" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Docent Schedule, Traffic & Mobile Ticket Callout */}
        <div className="museum-info-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-gold)', fontWeight: '700', marginBottom: '1rem' }}>
              <Volume2 size={20} />
              <span>금고미술관 도슨트 해설 및 작가 토크 일정</span>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-subtle)', marginBottom: '1.75rem' }}>
              {MUSEUM_INFO.docentSchedule.map((ds, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: idx !== 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <span style={{ fontWeight: '700', color: 'var(--primary-gold-light)' }}>{ds.time}</span>
                  <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>{ds.docent}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontWeight: '700', marginBottom: '0.75rem' }}>
              <Bus size={18} color="#e5b95a" />
              <span>오시는 길 및 대중교통</span>
            </div>

            <div style={{ fontSize: '0.88rem', color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {MUSEUM_INFO.traffic.map((t, idx) => (
                <div key={idx} style={{ marginBottom: '0.4rem' }}>• {t}</div>
              ))}
            </div>
          </div>

          {/* Ticket Booking Box */}
          <div style={{ background: 'linear-gradient(135deg, rgba(229,185,90,0.15), rgba(37,99,235,0.15))', border: '1px solid var(--border-gold)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontWeight: '800', color: '#fff', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
              금고미술관 관람료 무료 (모바일 티켓 즉시 발급)
            </div>
            <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '1rem' }}>
              사전 예약 시 본관 B1 금고미술관 패스트트랙 입장이 가능합니다.
            </p>
            <button className="btn-ticket" style={{ width: '100%', justifyContent: 'center' }} onClick={onOpenTicketModal}>
              <Ticket size={18} />
              <span>금고미술관 무료 모바일 티켓 예약하기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
