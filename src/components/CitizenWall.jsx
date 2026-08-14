import React, { useState } from 'react';
import { MessageSquare, Heart, Send, Sparkles, User, Award } from 'lucide-react';
import { CITIZEN_MESSAGES_INIT, ARTIST_PAIRINGS } from '../data/heritageData';

export default function CitizenWall() {
  const [messages, setMessages] = useState(CITIZEN_MESSAGES_INIT);
  const [nameInput, setNameInput] = useState('');
  const [targetInput, setTargetInput] = useState(ARTIST_PAIRINGS[0].heritageName + ' X ' + ARTIST_PAIRINGS[0].artist.name);
  const [messageInput, setMessageInput] = useState('');
  const [likedMap, setLikedMap] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!nameInput.trim() || !messageInput.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: nameInput,
      target: targetInput,
      message: messageInput,
      date: new Date().toISOString().split('T')[0].replace(/-/g, '. '),
      likes: 0
    };

    setMessages([newMessage, ...messages]);
    setNameInput('');
    setMessageInput('');
  };

  const handleLikeToggle = (id) => {
    setLikedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));

    setMessages(prev =>
      prev.map(msg => {
        if (msg.id === id) {
          const isLiked = likedMap[id];
          return { ...msg, likes: isLiked ? msg.likes - 1 : msg.likes + 1 };
        }
        return msg;
      })
    );
  };

  return (
    <section id="citizen" className="section-wrapper">
      <div className="section-header">
        <span className="section-tag">CITIZEN COMMUNITY & GUESTBOOK</span>
        <h2 className="section-title">시민 참여 방명록 & 작가 응원 창</h2>
        <p className="section-subtitle">
          미래유산을 가꾸고 예술을 사랑하는 부산 시민들의 따뜻한 한마디와 소감을 남겨주세요.
        </p>
      </div>

      <div className="citizen-wall-grid">
        {/* Form Column */}
        <div className="guestbook-form-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-gold)', fontWeight: '700', marginBottom: '1.25rem' }}>
            <MessageSquare size={20} />
            <span>응원 메시지 작성하기</span>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="form-label">작성자 이름 / 소속</label>
              <input
                type="text"
                className="form-input"
                placeholder="예: 홍길동 (해운대구 주민)"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">응원할 유산 & 작가 선택</label>
              <select
                className="form-select"
                value={targetInput}
                onChange={(e) => setTargetInput(e.target.value)}
              >
                {ARTIST_PAIRINGS.map(p => (
                  <option key={p.id} value={`${p.heritageName} X ${p.artist.name} 작가`}>
                    {p.heritageName} (X {p.artist.name} 작가)
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">응원 메시지 및 전시 소감</label>
              <textarea
                className="form-textarea"
                rows="4"
                placeholder="미래유산에 대한 추억이나 작가의 작품에 대한 응원 소감을 자유롭게 입력해주세요."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Send size={16} />
              <span>방명록 남기기</span>
            </button>
          </form>
        </div>

        {/* Messages Stream List Column */}
        <div className="messages-stream">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>
              실시간 등록 방명록 ({messages.length}건)
            </span>
            <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>최신순 정렬</span>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <div className="message-meta">
                <span style={{ fontWeight: '700' }}>{msg.name}</span>
                <span style={{ color: '#9ca3af', fontSize: '0.78rem' }}>{msg.date}</span>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--primary-gold-light)', marginBottom: '0.5rem', fontWeight: '600' }}>
                [연계 유산] {msg.target}
              </div>

              <p style={{ fontSize: '0.92rem', color: '#e5e7eb', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                "{msg.message}"
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => handleLikeToggle(msg.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: likedMap[msg.id] ? '#ef4444' : '#9ca3af',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  <Heart size={16} fill={likedMap[msg.id] ? '#ef4444' : 'none'} />
                  <span>공감 {msg.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
