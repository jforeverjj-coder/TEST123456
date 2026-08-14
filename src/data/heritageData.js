// 부산미래유산 아트 프로젝트 데이터셋 (구글맵 연동 URL 포함)

export const PROJECT_INFO = {
  title: "부산미래유산 아트 프로젝트 : 시선을 잇다, 미래를 짓다",
  subtitle: "부산의 예술가가 조사·연구하고 재해석한 부산의 미래유산, 부산근현대역사관 금고미술관에서 만나다",
  officialUrl: "https://www.busan.go.kr/futureheritage/index",
  exhibitionVenue: "부산근현대역사관 본관 B1 금고미술관",
  exhibitionPeriod: "2026. 09. 15 (화) ~ 2026. 12. 20 (일)",
  openingHours: "09:00 ~ 18:00 (입장마감 17:00 / 매주 월요일 휴관)",
  admission: "무료 관람 (사전 예약 및 현장 입장 가능)",
  organizers: [
    { name: "부산광역시", role: "주최" },
    { name: "부산근현대역사관", role: "주관·전시" },
    { name: "부산미래유산 보존위원회", role: "협력" }
  ],
  stats: {
    heritageCount: 68,
    participatingArtists: 12,
    reinterpretedArtworks: 18,
    expectedVisitors: 45000
  }
};

export const ARTIST_PAIRINGS = [
  {
    id: "busan-pier-1",
    heritageName: "부산항 1부두 (부산항 제1부두)",
    heritageCategory: "해양 / 개항·산업유산",
    heritageYear: "1912년 준공 (미래유산 제2014-03호)",
    district: "중구",
    address: "부산광역시 중구 중앙동4가 15-3 일원 (부산항 1부두)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=부산항1부두",
    heritageDescription: "1912년 준공된 대한민국 최초의 근대식 항만 시설. 한국전쟁 당시 피란민과 군수·구호물자가 입항한 역사적 관문이자, 수출 대한민국으로 발돋움한 부산 항만의 기원이 되는 근현대 유산.",
    heritageImageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
    
    artist: {
      name: "최진혁",
      genre: "대형 미디어아키텍처 & 공간설치",
      bio: "부산 항만의 역사적 레이어와 바다의 파동을 대형 3D 미디어 아키텍처와 강철 조각으로 재구성하는 설치 예술가.",
      profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },

    researchNotes: {
      period: "2026. 02. 01 ~ 2026. 05. 15 (약 105일간 답사)",
      fieldStudyCount: 28,
      interviewees: ["1부두 원로 하역 노동자 2인", "부산항만공사 아카이비스트", "피란민 1세대"],
      keyKeywords: ["개항의 첫발", "구호물자 입항", "붉은 하역 크레인", "1912년의 바다"],
      summary: "부산항 1부두의 100년 묵은 창고 강철 구조재와 뱃적 소리, 밤바다의 수면 파동 데이터를 스캐닝했다. 구 한국은행 지하 금고의 묵직한 콘크리트 및 철제 금고문과 결합한 미디어 아키텍처 구상.",
      quote: "부산항 1부두는 단순한 선착장이 아닙니다. 대한민국이 세계와 숨을 트였던 첫 번째 호흡이자 피란민들의 생존선이었습니다.",
      researchPhoto: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
    },

    artwork: {
      title: "귀환(歸還)의 바다 : 제1부두 1912-2026",
      medium: "Steel Cranes, Vault Iron Door, 3D Hologram & Sound Machine",
      dimensions: "520 x 350 x 400 cm (금고미술관 1관 특화 설치)",
      year: "2026",
      concept: "부산근현대역사관 지하 금고미술관의 구 한국은행 금고문 및 금고 벽면과 부산항 1부두 고재 철강을 결합하여, 개항 이래 1부두를 거쳐간 선박 항로와 피란민들의 서사를 3D 파티클 홀로그램 미디어로 빛나게 한 대형 융합 미디어아키텍처.",
      imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      audioDocent: {
        title: "[도슨트 01] 귀환의 바다 - 최진혁 작가 음성 해설 (금고미술관)",
        duration: "03:15",
        audioSrc: "https://actions.google.com/sounds/v1/ambiences/sea_waves.ogg",
        transcript: "안녕하세요, 미디어 아키텍처 작가 최진혁입니다. 구 한국은행 지하 금고였던 이곳 금고미술관에서 선보이는 이 작품은 1912년 준공된 부산항 1부두의 강철 구조와 금고의 미학을 융합한 미디어 아키텍처입니다."
      }
    }
  },

  {
    id: "bosudong",
    heritageName: "보수동 책방골목",
    heritageCategory: "생활문화 / 거리",
    heritageYear: "1950년대 형성 (미래유산 제2014-01호)",
    district: "중구",
    address: "부산광역시 중구 대청로 67-1 일원",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=보수동책방골목",
    heritageDescription: "한국전쟁 당시 헌책방들이 모여 형성된 대한민국 대표 책방 골목. 피란시절 지식의 창구이자 부산의 인문학적 정신이 깃든 장소.",
    heritageImageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    
    artist: {
      name: "강태형",
      genre: "인터랙티브 미디어아트",
      bio: "부산을 기반으로 도시 아카이브와 빛의 미학을 연구하는 미디어 아티스트. 공간의 시간적 켜를 디지털 빛으로 재구성한다.",
      profileImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },

    researchNotes: {
      period: "2026. 03. 02 ~ 2026. 05. 20 (약 80일간)",
      fieldStudyCount: 24,
      interviewees: ["보수동 40년 종사 서점주 3인", "골목 아카이비스트", "단골 시민"],
      keyKeywords: ["종이의 냄새", "켜켜이 쌓인 지식", "빛의 텍스트", "피란시절 인문학"],
      summary: "보수동 골목 안 헌책들의 바랜 책장과 활자를 금고미술관 밀폐된 지하 보관고 특성에 맞춰 빛의 데이터로 재구성함.",
      quote: "헌책 한 권 한 권에 새겨진 시민들의 손때는 부산의 시간을 지탱해온 빛나는 텍스트였습니다.",
      researchPhoto: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80"
    },

    artwork: {
      title: "빛의 켜 : 보수동의 묵향(墨香)",
      medium: "Interactive LED Light, Vault Wall & Vintage Book Sculpture",
      dimensions: "450 x 300 x 280 cm",
      year: "2026",
      concept: "보수동 책방골목의 헌책 활자를 지하 금고미술관 벽면에 LED 파티클 프로젝션으로 반사시켜, 금고 속 보물처럼 빛나는 지식의 가치를 표현한 미디어아트.",
      imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
      audioDocent: {
        title: "[도슨트 02] 보수동의 묵향 - 강태형 작가 음성 해설",
        duration: "02:45",
        audioSrc: "https://actions.google.com/sounds/v1/ambiences/rain_heavy_loud.ogg",
        transcript: "안녕하세요, 미디어 아티스트 강태형입니다. 금고미술관 특유의 육중한 구조 속에 보수동 책방골목의 활자들이 마치 금고 속에 보관된 보물처럼 떠오르도록 구성했습니다."
      }
    }
  },

  {
    id: "yeongdo-bridge",
    heritageName: "영도대교 (도개교)",
    heritageCategory: "건축 / 교량 인프라",
    heritageYear: "1934년 준공 (미래유산 제2014-05호)",
    district: "영도구",
    address: "부산광역시 영도구 대교동1가 ~ 중구 중앙동4가",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=영도대교",
    heritageDescription: "대한민국 최초의 연륙교이자 유일한 상판 도개 교량. 피란 시절 헤어진 가족들이 만나는 기약의 장소이자 부산 항도 역사의 아이콘.",
    heritageImageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",

    artist: {
      name: "정철민",
      genre: "키네틱 조각 & 키네틱 아트",
      bio: "기계적 움직임과 수공예적 철조 조각을 결합하여 도시 구조물의 생명력을 표현하는 키네틱 아티스트.",
      profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },

    researchNotes: {
      period: "2026. 02. 10 ~ 2026. 04. 30",
      fieldStudyCount: 18,
      interviewees: ["영도대교 도개 관리 기술자", "피란민 2세대 어르신"],
      keyKeywords: ["육중한 도개음", "만남과 이별", "강철과 바다", "수평에서 수직으로"],
      summary: "영도대교가 거대한 상판을 75도 들어올릴 때 울리는 소리를 금고미술관 2관 울림 공간에 극적으로 연출.",
      quote: "영도대교가 들릴 때, 그것은 이별을 견뎌낸 사람들의 그리움이 솟구치는 순간이었습니다.",
      researchPhoto: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
    },

    artwork: {
      title: "기약(祈約)의 상승 - 75도의 시간",
      medium: "Steel, Brass, Hydraulic Actuator & Sound Machine",
      dimensions: "380 x 200 x 350 cm",
      year: "2026",
      concept: "금고미술관 2관의 천장고를 활용해 매시 정각마다 75도로 솟아오르는 키네틱 조각. 사이렌 소리와 함께 금고 내부를 공명시킨다.",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      audioDocent: {
        title: "[도슨트 03] 기약의 상승 - 정철민 작가 음성 해설",
        duration: "03:10",
        audioSrc: "https://actions.google.com/sounds/v1/ambiences/sea_waves.ogg",
        transcript: "안녕하세요, 조각가 정철민입니다. 금고의 울림을 통해 영도대교 도개의 75도각과 피란민들의 그리움을 느끼실 수 있습니다."
      }
    }
  },

  {
    id: "provisional-capital",
    heritageName: "임시수도 정부청사",
    heritageCategory: "역사건축물",
    heritageYear: "1925년 준공 (미래유산 제2014-12호)",
    district: "서구",
    address: "부산광역시 서구 구덕로 225 (부용동2가)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=임시수도정부청사",
    heritageDescription: "한국전쟁기 1,023일 동안 대한민국 임시수도의 정부청사로 사용된 붉은 벽돌의 근대 역사 건축물.",
    heritageImageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=80",

    artist: {
      name: "이서윤",
      genre: "현대 회화 & 캔버스 서양화",
      bio: "붉은 안료와 흙, 겹겹이 중첩된 질감을 통해 역사적 장소의 시간적 흔적과 서사를 화폭에 담아내는 서양화가.",
      profileImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },

    researchNotes: {
      period: "2026. 03. 15 ~ 2026. 06. 01",
      fieldStudyCount: 15,
      interviewees: ["석당박물관 학예연구사", "부용동 고령 주민"],
      keyKeywords: ["1023일의 수난", "붉은 흙벽돌", "대통령 관저", "결단의 밤"],
      summary: "임시수도 정부청사 벽돌 가루 안료와 금고미술관 콘크리트 벽면 감성을 대형 캔버스 회화로 조화시킴.",
      quote: "붉은 벽돌 틈새를 만졌을 때, 70년 전 국가의 운명을 짊어졌던 이들의 숨소리가 전율처럼 느껴졌습니다.",
      researchPhoto: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80"
    },

    artwork: {
      title: "1,023일의 붉은 서사(敍事)",
      medium: "Oil, Brick Dust, Charcoal on Canvas (4p Triptych)",
      dimensions: "640 x 210 cm",
      year: "2026",
      concept: "금고미술관 벽면에 거대하게 설치된 4연작 대형 캔버스 회화. 금고 내부의 어둠 속에서 서서히 솟아오르는 붉은 안료의 서사.",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      audioDocent: {
        title: "[도슨트 04] 1,023일의 붉은 서사 - 이서윤 작가 음성 해설",
        duration: "02:30",
        audioSrc: "https://actions.google.com/sounds/v1/ambiences/fire.ogg",
        transcript: "반갑습니다, 회화 작가 이서윤입니다. 작품에 사용된 붉은 빛은 임시수도 정부청사의 벽돌에서 추출한 색감입니다."
      }
    }
  },

  {
    id: "sanbok-doro",
    heritageName: "산복도로 & 168계단",
    heritageCategory: "공간경관 / 주거유산",
    heritageYear: "1960~70년대 형성 (미래유산 제2015-08호)",
    district: "동구",
    address: "부산광역시 동구 초량동 산복도로 및 168계단 일대",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=초량168계단",
    heritageDescription: "산비탈을 따라 개간된 부산 특유의 주거 형태와 도로. 피란민들과 산복도로 아낙들의 치열했던 삶의 흔적.",
    heritageImageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",

    artist: {
      name: "박유진",
      genre: "사운드스케이프 & 아쿠스틱 설치",
      bio: "도시의 소리와 앰비언스를 채집하여 공간을 소리의 박물관으로 재구성하는 음향 예술가.",
      profileImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
    },

    researchNotes: {
      period: "2026. 04. 01 ~ 2026. 06. 15",
      fieldStudyCount: 30,
      interviewees: ["초량 산복도로 50년 거주 주민", "우체부"],
      keyKeywords: ["계단을 오르는 숨소리", "바람의 노랫소리", "부산항 가적소리"],
      summary: "금고미술관 입구 통로부터 깊은 지하까지 연결되는 동선에 산복도로 입체 음향을 배치.",
      quote: "산복도로의 바람 속에는 가파른 계단을 오르며 가족을 부양했던 어머님들의 한숨과 노래가 섞여 있었습니다.",
      researchPhoto: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=900&q=80"
    },

    artwork: {
      title: "수직의 수화(手話) : 168개의 숨표",
      medium: "3D Spatial 16.2 Audio & Hanging Acoustic Resonance Cylinders",
      dimensions: "가변 크기 (금고 통로 입체 설치)",
      year: "2026",
      concept: "금고미술관 천장에 늘어뜨려진 168개의 공명 아크릴 파이프에서 관람객이 지하 금고를 건널 때 168계단의 숨소리가 입체적으로 울린다.",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      audioDocent: {
        title: "[도슨트 05] 수직의 수화 - 박유진 작가 음성 해설",
        duration: "03:00",
        audioSrc: "https://actions.google.com/sounds/v1/ambiences/rain_heavy_loud.ogg",
        transcript: "안녕하세요, 사운드 아티스트 박유진입니다. 금고미술관으로 내려오는 계단과 통로 전체가 하나의 커다란 소리 악기입니다."
      }
    }
  }
];

export const MUSEUM_INFO = {
  name: "부산근현대역사관 (본관 B1 금고미술관)",
  address: "부산광역시 중구 대청로 112 (대청동2가) 본관 지하 1층 금고미술관",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=부산근현대역사관",
  tel: "051-607-6300",
  traffic: [
    "지하철: 1호선 중앙역 5번 출구 (도보 5분), 남포역 1번 출구 (도보 7분)",
    "버스: 8, 15, 86, 126, 186번 부산근현대역사관 정류장 하차"
  ],
  exhibitionHalls: [
    { name: "본관 B1 금고미술관 1관", topic: "부산항 1부두 & 보수동 책방골목 미디어아키텍처관" },
    { name: "본관 B1 금고미술관 2관", topic: "영도대교 & 산복도로 키네틱·사운드 수직관" },
    { name: "B1 금고 아카이브 룸", topic: "구 한국은행 금고문 연계 작가 연구노트 & 다큐 아카이브" },
    { name: "지하 금고 중앙 통로", topic: "부산미래유산 융합 대형 오브제 & 사운드 터널" }
  ],
  docentSchedule: [
    { time: "11:00", docent: "금고미술관 전문 도슨트 해설 (1회차)" },
    { time: "14:00", docent: "참여 작가 금고미술관 특별 도슨트 (주말 한정)" },
    { time: "16:00", docent: "금고미술관 전문 도슨트 해설 (2회차)" }
  ]
};

export const CITIZEN_MESSAGES_INIT = [
  {
    id: 1,
    name: "박성훈 (부산항 개항 연구원)",
    target: "부산항 1부두 X 최진혁 작가",
    message: "구 한국은행 지하 금고였던 금고미술관에서 부산항 1부두의 미디어아키텍처를 직관하니 묵직한 금고의 시간과 바다가 어우러져 최고입니다!",
    date: "2026. 08. 14",
    likes: 56
  },
  {
    id: 2,
    name: "김민재 (중구 주민)",
    target: "보수동 책방골목 X 강태형 작가",
    message: "지하 금고미술관 벽면에 보수동의 헌책 활자들이 보물처럼 빛나네요. 감동적입니다!",
    date: "2026. 08. 10",
    likes: 42
  },
  {
    id: 3,
    name: "박소연 (예술대학 학생)",
    target: "영도대교 X 정철민 작가",
    message: "금고미술관 2관 높이 솟아오르는 키네틱 조각과 금고 안 울림소리가 웅장합니다!",
    date: "2026. 08. 12",
    likes: 28
  }
];
