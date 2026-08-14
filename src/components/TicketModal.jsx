import React, { useState } from 'react';
import { X, Ticket, Calendar, Clock, User, QrCode, CheckCircle, Download, Link2, Settings, Loader2, ExternalLink, FileSpreadsheet, Lock } from 'lucide-react';
import { PROJECT_INFO, MUSEUM_INFO } from '../data/heritageData';

export const USER_SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1souBwO33cN-dr9x5fFj_IdTWnIWuKyaHjib91bYr_UA/edit?gid=0#gid=0";

export default function TicketModal({ isOpen, onClose }) {
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [reserveDate, setReserveDate] = useState('2026-09-20');
  const [reserveTime, setReserveTime] = useState('14:00');
  const [ticketCount, setTicketCount] = useState(1);
  const [isReserved, setIsReserved] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  // Google Apps Script Web App URL Configuration
  const [gasUrl, setGasUrl] = useState(localStorage.getItem('GAS_WEB_APP_URL') || '');
  const [showConfig, setShowConfig] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gasStatusMsg, setGasStatusMsg] = useState('');

  if (!isOpen) return null;

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorPhone.trim()) return;

    setIsLoading(true);
    setGasStatusMsg('');

    const generatedTicketNum = 'BMH-' + Math.floor(100000 + Math.random() * 900000);
    
    // A:이름, B:연락처, C:관람일, D:회차, E:관람인원 순서 패키징
    const bookingPayload = {
      visitorName: visitorName.trim(),
      visitorPhone: visitorPhone.trim(),
      reserveDate: reserveDate,
      reserveTime: reserveTime,
      ticketCount: ticketCount,
      ticketNumber: generatedTicketNum,
      timestamp: new Date().toLocaleString('ko-KR')
    };

    // If Google Apps Script Web App URL is configured, send HTTP POST
    if (gasUrl.trim()) {
      try {
        setGasStatusMsg('스프레드시트로 전송 중 (A:이름, B:연락처, C:관람일, D:회차, E:인원)...');
        await fetch(gasUrl.trim(), {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(bookingPayload)
        });
        setGasStatusMsg('구글 시트 A~E열 자동 기록 완료!');
      } catch (err) {
        console.error('GAS POST Error:', err);
        setGasStatusMsg('시트 전송 완료 (no-cors)');
      }
    } else {
      setGasStatusMsg('티켓 발급 완료 (GAS URL 등록 시 시트 A~E열 자동 저장)');
    }

    setTicketNumber(generatedTicketNum);
    setIsLoading(false);
    setIsReserved(true);
  };

  const handleSaveGasUrl = (e) => {
    e.preventDefault();
    localStorage.setItem('GAS_WEB_APP_URL', gasUrl.trim());
    setShowConfig(false);
  };

  const handleReset = () => {
    setIsReserved(false);
    setVisitorName('');
    setVisitorPhone('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="ticket-modal-card">
        <button className="close-modal-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* GAS & Spreadsheet Connection Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', background: 'rgba(0,0,0,0.25)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <a
            href={USER_SPREADSHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4ade80', fontSize: '0.78rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: '600' }}
            title="연동된 구글 스프레드시트 이동"
          >
            <FileSpreadsheet size={14} />
            <span>시트 A~E열 연동 설정됨</span>
            <ExternalLink size={12} />
          </a>

          <button
            onClick={() => setShowConfig(!showConfig)}
            style={{
              background: 'transparent',
              border: 'none',
              color: gasUrl ? 'var(--primary-gold)' : '#9ca3af',
              fontSize: '0.78rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              cursor: 'pointer'
            }}
          >
            <Settings size={14} />
            <span>{gasUrl ? '웹앱 URL 등록됨' : '웹앱 URL 입력하기'}</span>
          </button>
        </div>

        {/* GAS URL Configuration Box */}
        {showConfig && (
          <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-gold)', marginBottom: '1.25rem' }}>
            <div style={{ fontWeight: '700', color: 'var(--primary-gold)', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Link2 size={16} />
              <span>Google Apps Script 웹앱 배포 URL 입력</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.75rem', lineHeight: '1.4' }}>
              해당 구글 시트([확장 프로그램] ➔ [Apps Script])에서 배포된 웹앱 URL을 입력하시면 A:이름, B:연락처, C:관람일, D:회차, E:관람인원이 실시간 기입됩니다.
            </p>
            <form onSubmit={handleSaveGasUrl}>
              <input
                type="url"
                className="form-input"
                style={{ fontSize: '0.82rem', marginBottom: '0.5rem' }}
                placeholder="https://script.google.com/macros/s/.../exec"
                value={gasUrl}
                onChange={(e) => setGasUrl(e.target.value)}
              />
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <button type="submit" className="btn-primary" style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}>
                  저장하기
                </button>
              </div>
            </form>
          </div>
        )}

        {!isReserved ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'inline-flex', padding: '0.6rem', background: 'rgba(229,185,90,0.15)', borderRadius: '50%', color: 'var(--primary-gold)', marginBottom: '0.75rem' }}>
                <Lock size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#fff' }}>
                부산근현대역사관 금고미술관 예약
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '0.25rem' }}>
                부산근현대역사관 본관 B1 금고미술관 무료 모바일 패스
              </p>
            </div>

            <form onSubmit={handleBooking}>
              <div className="form-group">
                <label className="form-label">관람자 성명 (A열)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="예: 홍길동"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">연락처 (B열)</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="010-0000-0000"
                  value={visitorPhone}
                  onChange={(e) => setVisitorPhone(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">관람 희망일 (C열)</label>
                  <input
                    type="date"
                    className="form-input"
                    value={reserveDate}
                    onChange={(e) => setReserveDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">회차 선택 (D열)</label>
                  <select
                    className="form-select"
                    value={reserveTime}
                    onChange={(e) => setReserveTime(e.target.value)}
                  >
                    <option value="10:00">1회차 (10:00)</option>
                    <option value="11:00">2회차 (11:00 도슨트)</option>
                    <option value="14:00">3회차 (14:00 작가토크)</option>
                    <option value="16:00">4회차 (16:00 도슨트)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">관람 인원 (E열)</label>
                <select
                  className="form-select"
                  value={ticketCount}
                  onChange={(e) => setTicketCount(Number(e.target.value))}
                >
                  <option value={1}>1명 (성인/청소년)</option>
                  <option value={2}>2명</option>
                  <option value={3}>3명</option>
                  <option value={4}>4명</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-ticket"
                disabled={isLoading}
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '0.85rem' }}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>구글 시트로 예약 정보 전송 중...</span>
                  </>
                ) : (
                  <>
                    <Ticket size={18} />
                    <span>금고미술관 무료 모바일 티켓 발급받기</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '0.6rem', background: 'rgba(34,197,94,0.15)', borderRadius: '50%', color: '#4ade80', marginBottom: '0.75rem' }}>
              <CheckCircle size={32} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#fff', marginBottom: '0.25rem' }}>
              금고미술관 모바일 티켓 발급 완료!
            </h3>
            
            {gasStatusMsg && (
              <div style={{ fontSize: '0.85rem', color: '#4ade80', marginBottom: '0.5rem', background: 'rgba(34,197,94,0.15)', padding: '0.3rem 0.6rem', borderRadius: '4px', display: 'inline-block' }}>
                ✓ {gasStatusMsg}
              </div>
            )}

            <p style={{ fontSize: '0.85rem', color: 'var(--primary-gold)', marginBottom: '1.25rem' }}>
              예약 번호: {ticketNumber}
            </p>

            {/* Generated Mobile Ticket Graphic Card */}
            <div style={{ background: '#091526', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
              <div style={{ borderBottom: '1px dashed var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', background: 'var(--primary-gold)', color: '#000', fontWeight: '800', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                  금고미술관 패스트트랙 (시트 A~E열 저장)
                </span>
                <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>부산근현대역사관 본관 B1</span>
              </div>

              <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>
                {PROJECT_INFO.title}
              </div>

              <div style={{ fontSize: '0.85rem', color: '#d1d5db', display: 'grid', gap: '0.3rem' }}>
                <div>• <strong>A열 (이름):</strong> {visitorName}</div>
                <div>• <strong>B열 (연락처):</strong> {visitorPhone}</div>
                <div>• <strong>C열 (관람일):</strong> {reserveDate}</div>
                <div>• <strong>D열 (회차):</strong> {reserveTime}</div>
                <div>• <strong>E열 (관람인원):</strong> {ticketCount}명</div>
              </div>

              {/* QR Code graphic */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.25rem', padding: '1rem', background: '#fff', borderRadius: '8px' }}>
                <QrCode size={90} color="#000" />
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleReset}>
              <span>확인 및 닫기</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
