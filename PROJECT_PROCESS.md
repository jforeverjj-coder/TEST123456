# 부산미래유산 아트 프로젝트 개발 및 구축 과정 보고서

이 문서는 **부산미래유산 아트 프로젝트 : "시선을 잇다, 미래를 짓다"** 웹 플랫폼의 전체 구축 과정, 기능 개요, 데이터 연동 및 GitHub 푸시 내역을 상세히 기록한 종합 보고서입니다.

---

## 1. 프로젝트 개요 (Overview)

- **프로젝트명**: 부산미래유산 아트 프로젝트 : "시선을 잇다, 미래를 짓다"
- **기획 목적**: 부산광역시 공식 미래유산 웹사이트(`https://www.busan.go.kr/futureheritage/index`)와 연계하여, 부산의 대표 미래유산을 부산 지역 예술가들이 현장 조사·연구하고 이를 현대 예술 작품으로 재해석하여 **부산근현대역사관 본관 지하 1층 금고미술관**에서 전시하는 융합 웹 플랫폼 구축.
- **주요 대상 미래유산**:
  - **부산항 1부두** (미래유산 제2014-03호) X 최진혁 작가 (대형 미디어아키텍처)
  - **보수동 책방골목** (미래유산 제2014-01호) X 강태형 작가 (인터랙티브 미디어아트)
  - **영도대교** (미래유산 제2014-05호) X 정철민 작가 (키네틱 조각)
  - **임시수도 정부청사** (미래유산 제2014-12호) X 이서윤 작가 (대형 캔버스 회화)
  - **산복도로 168계단** (미래유산 제2015-08호) X 박유진 작가 (사운드스케이프 입체 음향)

---

## 2. 세부 개발 및 진행 과정 (Step-by-Step History)

### 📌 1단계: 프로젝트 초기화 및 핵심 컴포넌트 개발
- **기술 스택**: Vite + React, Lucide Icons, Modern Vanilla CSS (`src/styles/index.css`)
- **디자인 시스템**: Modern Heritage Ocean Palette (Deep Ocean `#09121d`, Slate Gold `#e5b95a`, Terracotta `#d95338`) 적용
- **핵심 UI 창(Window) 구축**:
  - `Header.jsx`: 브랜딩, GNB, 외부 공식 사이트 링크 연동
  - `HeroSection.jsx`: 키비주얼, 기획 취지, 전시 정보, 예매 CTA
  - `ArtistHeritagePairing.jsx`: **[핵심 창]** 조사·연구 노트 vs 재해석 작품 분할 비교 뷰, 음성 도슨트 플레이어, 사운드 웨이브 애니메이션
  - `ExhibitionHub.jsx`: 부산근현대역사관 전시실 공간 안내 및 도슨트 일정
  - `InteractiveMap.jsx`: 부산 원도심 구별 미래유산 지도
  - `DigitalArchive.jsx`: 카테고리별 아카이브 갤러리 및 검색
  - `CitizenWall.jsx`: 시민 방명록 및 작가 응원 메시지 등록
  - `OfficialLinkBanner.jsx`: 부산시 공식 미래유산 웹사이트 연동 배너

### 📌 2단계: 전시장소 및 대표 미래유산 개편
- **부산항 1부두 (제2014-03호) 중심 개편**:
  - 대한민국 개항의 기원이자 근대 항만 유산인 '부산항 1부두'를 대표 01번 유산으로 지정
  - 최진혁 작가의 대형 미디어아키텍처 작품 *<귀환(歸還)의 바다 : 제1부두 1912-2026>* 수록
- **전시장소 정밀 지정**:
  - 전시장소를 **"부산근현대역사관 본관 지하 1층 금고미술관 (Vault Art Museum)"**으로 반영
  - 구 한국은행 부산지점 지하 금고문, 콘크리트 미학, 레드카펫 전경 연출 반영

### 📌 3단계: 구글 앱스스크립트(GAS) & 구글 스프레드시트 실시간 연동
- **지정 스프레드시트 ID**: `1souBwO33cN-dr9x5fFj_IdTWnIWuKyaHjib91bYr_UA`
- **전용 열(Column) 기입 구조 설정**:
  - **A열**: 이름 (관람자 성명)
  - **B열**: 연락처
  - **C열**: 관람일 (관람 희망일)
  - **D열**: 회차 (관람 회차)
  - **E열**: 관람인원 (티켓 수량)
- **구글 앱스스크립트 전용 코드 제작 (`google_apps_script.js`)**:
  - `doPost(e)` 수신 및 시트 A~E열 자동 기입 코드 작성

### 📌 4단계: 금고미술관 실물 배경 반영 & 헤더 타이포그래피 정돈
- **금고미술관 실물 배경 반영**:
  - 사용자 제공 금고미술관 내부 실물 사진(`vault_art_museum.jpg`)을 메인 히어로 섹션 배경 및 미리보기 카드로 적용
- **타이틀 레이아웃 교정**:
  - 브랜드 타이틀을 `부산미래유산` / `아트 프로젝트` 2줄로 자연스럽게 정돈하여 글자 끊김 현상 해소

### 📌 5단계: 지도 겹침 해소 & Google Maps 직통 연결
- **구글 맵 (Google Maps) 연동**:
  - 유산별 구글 지도로 이동하는 **`[🗺️ 구글 맵 연결]`** 버튼 추가
  - SVG 지도 핀 간격 및 레이블 위치 조정을 통해 텍스트 겹침 문제 교정

### 📌 6단계: Git 초기화 및 GitHub 저장소 푸시 완료
- `git init` 및 `main` 브랜치 설정
- `.gitignore` 작성으로 불필요한 빌드 파일 제외
- 사용자 GitHub Personal Access Token (PAT)을 통한 안전한 인증 진행
- GitHub 저장소(`https://github.com/jforeverjj-coder/TEST123456`)에 전 소스 코드 100% 업로드 완료

---

## 3. 주요 파일 디렉토리 구조

```
부산미래유산아트프로젝트/
├── google_apps_script.js       # 구글 앱스스크립트 연동 전용 백엔드 코드
├── PROJECT_PROCESS.md          # 프로젝트 개발 및 구축 과정 보고서 (본 문서)
├── README.md                   # 프로젝트 깃허브 안내 문서
├── index.html                  # SEO 메인 HTML
├── package.json                # 의존성 및 스크립트 정보
├── public/
│   └── vault_art_museum.jpg    # 금고미술관 실물 전경 배경 사진
└── src/
    ├── App.jsx                 # 메인 애플리케이션 컴포넌트
    ├── components/             # React UI 컴포넌트 모음
    │   ├── Header.jsx          # 내비게이션 & 브랜드 헤더
    │   ├── HeroSection.jsx     # 키비주얼 & 배경
    │   ├── ArtistHeritagePairing.jsx # 예술가-미래유산 연계 융합 창
    │   ├── ExhibitionHub.jsx   # 금고미술관 전시실 안내
    │   ├── InteractiveMap.jsx  # 구글맵 연동 아트 맵
    │   ├── DigitalArchive.jsx  # 디지털 아카이브 갤러리
    │   ├── CitizenWall.jsx     # 시민 방명록
    │   ├── OfficialLinkBanner.jsx # 부산시 공식 연동 배너
    │   ├── TicketModal.jsx     # 모바일 예매 & GAS 수신 모달
    │   └── Footer.jsx          # 하단 푸터
    ├── data/
    │   └── heritageData.js     # 통합 데이터셋 (유산, 작가, 작품, 구글맵 URL)
    └── styles/
        └── index.css           # CSS 디자인 시스템
```

---

## 4. 접속 및 연동 URL 목록

- 🐙 **GitHub 저장소**: [https://github.com/jforeverjj-coder/TEST123456](https://github.com/jforeverjj-coder/TEST123456)
- 🌍 **실시간 웹 접속**: [https://tidy-otters-share.loca.lt](https://tidy-otters-share.loca.lt)
- 💻 **로컬 웹 접속**: [http://localhost:5174/](http://localhost:5174/)
- 📊 **연동 구글 스프레드시트**: [https://docs.google.com/spreadsheets/d/1souBwO33cN-dr9x5fFj_IdTWnIWuKyaHjib91bYr_UA/edit](https://docs.google.com/spreadsheets/d/1souBwO33cN-dr9x5fFj_IdTWnIWuKyaHjib91bYr_UA/edit)
- 🏛️ **부산근현대역사관 공식 사이트**: [https://www.busan.go.kr/mmch/index](https://www.busan.go.kr/mmch/index)
- ⚓ **부산광역시 미래유산 공식 웹사이트**: [https://www.busan.go.kr/futureheritage/index](https://www.busan.go.kr/futureheritage/index)
