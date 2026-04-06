import { useState } from "react";

type Tab = "overview" | "compare" | "holika" | "inga" | "marketing" | "insight";

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "전체 요약" },
    { id: "compare", label: "3사 비교" },
    { id: "holika", label: "홀리카홀리카" },
    { id: "inga", label: "잉가 (INGA)" },
    { id: "marketing", label: "마케팅 분석" },
    { id: "insight", label: "인사이트" },
  ];

  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-inner">
          <div>
            <h1 className="logo">TAM BEAUTY</h1>
            <p className="subtitle">일본 시장 경쟁사 분석 대시보드 | 대행사 레퍼런스 팩트체크</p>
          </div>
          <div className="date-badge">2026년 4월 기준</div>
        </div>
      </header>

      <nav className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="main">
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "compare" && <CompareSection />}
        {activeTab === "holika" && <HolikaSection />}
        {activeTab === "inga" && <IngaSection />}
        {activeTab === "marketing" && <MarketingSection />}
        {activeTab === "insight" && <InsightSection />}
      </main>

      <footer className="footer">
        탐뷰티 내부 자료 | 일본 대행사 레퍼런스 경쟁사 분석 보고서
      </footer>
    </div>
  );
};

/* ────────────────────── 전체 요약 ────────────────────── */
const OverviewSection = () => (
  <div className="section">
    <h2 className="section-title">프로젝트 개요</h2>
    <div className="card highlight-card">
      <h3>목적</h3>
      <p>
        탐뷰티는 이미 큐텐에서 <b>메가데뷔 4위</b>를 달성하며 일본 시장에 진출 중.
        <br />
        대행사를 통한 스케일업을 위해, 대행사 레퍼런스 브랜드인
        <b> 홀리카홀리카</b>와 <b>잉가(INGA)</b>의 실적을 팩트 기반으로 검증하고
        탐뷰티의 다음 단계 전략 수립에 활용.
      </p>
    </div>

    <div className="grid-3">
      <div className="card stat-card">
        <span className="stat-label">분석 대상</span>
        <span className="stat-value">2개 브랜드</span>
        <span className="stat-sub">홀리카홀리카 / 잉가</span>
      </div>
      <div className="card stat-card">
        <span className="stat-label">핵심 판매 채널</span>
        <span className="stat-value">큐텐 (Qoo10)</span>
        <span className="stat-sub">일본 MZ세대 뷰티 1위 플랫폼</span>
      </div>
      <div className="card stat-card">
        <span className="stat-label">타깃 소비자</span>
        <span className="stat-value">MZ세대 여성</span>
        <span className="stat-sub">10~30대 (큐텐 회원 71%)</span>
      </div>
    </div>

    <h2 className="section-title" style={{ marginTop: 40 }}>핵심 숫자 한눈에 보기</h2>

    {/* 3-brand quick comparison */}
    <div className="grid-3">
      <div className="card" style={{ borderTop: "4px solid #ec4899" }}>
        <h4 style={{ color: "#db2777" }}>홀리카홀리카</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div><span className="metric-label">등록 제품</span><span className="metric-val pink">459개</span></div>
          <div><span className="metric-label">총 리뷰 (LIPS)</span><span className="metric-val pink">13,605개</span></div>
          <div><span className="metric-label">즐겨찾기</span><span className="metric-val pink">68,988명</span></div>
          <div><span className="metric-label">인스타 팔로워 (일본)</span><span className="metric-val pink">~2,100명</span></div>
          <div><span className="metric-label">가격대</span><span className="metric-val pink">¥990~2,970</span></div>
        </div>
      </div>
      <div className="card" style={{ borderTop: "4px solid #3b82f6" }}>
        <h4 style={{ color: "#2563eb" }}>잉가 (INGA)</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div><span className="metric-label">등록 제품</span><span className="metric-val blue">23개</span></div>
          <div><span className="metric-label">총 리뷰 (@cosme)</span><span className="metric-val blue">282개</span></div>
          <div><span className="metric-label">립틴트 리뷰 (LIPS)</span><span className="metric-val blue">859개</span></div>
          <div><span className="metric-label">인스타 팔로워 (일본)</span><span className="metric-val blue">~3,400명</span></div>
          <div><span className="metric-label">가격대</span><span className="metric-val blue">¥1,590~3,190</span></div>
        </div>
      </div>
      <div className="card" style={{ borderTop: "4px solid #6366f1", background: "linear-gradient(135deg, #f5f3ff, #ede9fe)" }}>
        <h4 style={{ color: "#6366f1" }}>탐뷰티 (디벨롭 중)</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div><span className="metric-label">큐텐 성과</span><span className="metric-val purple">메가데뷔 4위</span></div>
          <div><span className="metric-label">현재 상태</span><span className="metric-val purple">운영 중</span></div>
          <div><span className="metric-label">히어로 SKU</span><span className="metric-val purple">디벨롭 필요</span></div>
          <div><span className="metric-label">인스타 (일본)</span><span className="metric-val purple">확장 필요</span></div>
          <div><span className="metric-label">목표</span><span className="metric-val purple">대행사 통해 스케일업</span></div>
        </div>
      </div>
    </div>

    <h2 className="section-title" style={{ marginTop: 40 }}>일본 K-뷰티 시장 현황</h2>
    <div className="grid-2">
      <div className="card">
        <h4>시장 규모</h4>
        <p className="big-num">3.2조엔+</p>
        <p className="desc">2024년 일본 화장품 시장. 마스크 해제 후 베이스 메이크업 수요 회복.</p>
      </div>
      <div className="card">
        <h4>K-뷰티 트렌드</h4>
        <ul className="list">
          <li>Z세대 54.9%가 "SNS에서 화제가 됐을 때" 구매 결정</li>
          <li>편의점 한정판 K-코스메틱 호조</li>
          <li>큐텐 메가와리 (연 4회: 3/6/9/11월) 핵심 프로모션</li>
          <li>성분 & 저자극 키워드 주목도 상승</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ────────────────────── 3사 비교 ────────────────────── */
const CompareSection = () => (
  <div className="section">
    <h2 className="section-title">3사 비교 분석</h2>

    <div className="table-wrap compare-table">
      <table>
        <thead>
          <tr>
            <th>항목</th>
            <th className="holika-col">홀리카홀리카</th>
            <th className="inga-col">잉가 (INGA)</th>
            <th className="tam-col">탐뷰티 (계획)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><b>모기업</b></td><td>애경그룹</td><td>ABT ASIA</td><td>탐뷰티</td></tr>
          <tr><td><b>브랜드 이미지</b></td><td>플레이풀 / 캐릭터 콜라보</td><td>트렌디 / 세련된 립 전문</td><td>디벨롭 중</td></tr>
          <tr><td><b>가격대 (엔)</b></td><td>¥990 ~ ¥2,970</td><td>¥1,590 ~ ¥3,190</td><td>전략 고도화 필요</td></tr>
          <tr><td><b>히어로 제품</b></td><td>마이페이브 무드 아이팔레트</td><td>워터 그로우 립 틴트</td><td>히어로 확정 필요</td></tr>
          <tr><td><b>히어로 리뷰 수</b></td><td>2,355개 (LIPS)</td><td>859개 (LIPS)</td><td>축적 필요</td></tr>
          <tr><td><b>총 리뷰 수</b></td><td>13,605개</td><td>282개 (@cosme)</td><td>축적 필요</td></tr>
          <tr><td><b>큐텐 성과</b></td><td>메가와리 상시 참여</td><td>포인트메이크 1위</td><td>메가데뷔 4위 달성!</td></tr>
          <tr><td><b>인스타 일본 팔로워</b></td><td>~2,100명</td><td>~3,400명</td><td>확장 필요</td></tr>
          <tr><td><b>인스타 글로벌 팔로워</b></td><td>30만+</td><td>2.4만 + 1.4만</td><td>-</td></tr>
          <tr><td><b>주 유통채널</b></td><td>큐텐, 아마존JP, 라쿠텐, 오프라인</td><td>큐텐 (주력)</td><td>큐텐 운영 중</td></tr>
          <tr><td><b>오프라인 유통</b></td><td>플라자, 돈키호테, 로프트</td><td>미진출 (검토 중)</td><td>미진출</td></tr>
          <tr><td><b>핵심 마케팅</b></td><td>IP콜라보, 메가와리, 다색상</td><td>현지화 색상, 큐텐 프로모, 시딩</td><td>대행사 통해 스케일업 목표</td></tr>
        </tbody>
      </table>
    </div>

    {/* Bar Charts */}
    <h3 className="sub-title" style={{ marginTop: 36 }}>리뷰 수 비교 (막대 그래프)</h3>
    <div className="card">
      <div className="bar-chart">
        <div className="bar-row">
          <span className="bar-label">홀리카홀리카</span>
          <div className="bar-track"><div className="bar-fill holika" style={{ width: "100%" }}>13,605</div></div>
        </div>
        <div className="bar-row">
          <span className="bar-label">잉가 (LIPS 립틴트)</span>
          <div className="bar-track"><div className="bar-fill inga" style={{ width: "6.3%" }}>859</div></div>
        </div>
        <div className="bar-row">
          <span className="bar-label">잉가 (@cosme 전체)</span>
          <div className="bar-track"><div className="bar-fill inga" style={{ width: "2.1%" }}>282</div></div>
        </div>
        <div className="bar-row">
          <span className="bar-label">탐뷰티</span>
          <div className="bar-track"><div className="bar-fill tam" style={{ width: "1.5%" }}>축적 중</div></div>
        </div>
      </div>
      <p className="note">* 홀리카홀리카는 LIPS 기준 전체 리뷰, 잉가는 플랫폼별 분리 표기</p>
    </div>

    <h3 className="sub-title">인스타그램 일본 팔로워 비교</h3>
    <div className="card">
      <div className="bar-chart">
        <div className="bar-row">
          <span className="bar-label">잉가 @inga_jp</span>
          <div className="bar-track"><div className="bar-fill inga" style={{ width: "100%" }}>3,412명</div></div>
        </div>
        <div className="bar-row">
          <span className="bar-label">홀리카 @holikaholika_japan</span>
          <div className="bar-track"><div className="bar-fill holika" style={{ width: "62%" }}>2,107명</div></div>
        </div>
        <div className="bar-row">
          <span className="bar-label">홀리카 @holikaholika_japan_</span>
          <div className="bar-track"><div className="bar-fill holika" style={{ width: "50%" }}>1,707명</div></div>
        </div>
        <div className="bar-row">
          <span className="bar-label">탐뷰티</span>
          <div className="bar-track"><div className="bar-fill tam" style={{ width: "1.5%" }}>확장 필요</div></div>
        </div>
      </div>
      <p className="note">* 세 브랜드 모두 일본 인스타 팔로워 소규모 → 시딩 전략이 관건</p>
    </div>

    <h3 className="sub-title">가격 포지셔닝 맵</h3>
    <div className="price-map">
      <div className="price-axis">
        <span>저가 (¥900)</span>
        <span>중가 (¥2,000)</span>
        <span>고가 (¥3,200+)</span>
      </div>
      <div className="price-bar">
        <div className="price-range holika-range" style={{ left: "0%", width: "45%" }}>
          <span>홀리카홀리카</span>
        </div>
      </div>
      <div className="price-bar">
        <div className="price-range inga-range" style={{ left: "30%", width: "50%" }}>
          <span>잉가 (INGA)</span>
        </div>
      </div>
      <div className="price-bar">
        <div className="price-range tam-range" style={{ left: "15%", width: "55%" }}>
          <span>탐뷰티 포지션은?</span>
        </div>
      </div>
    </div>

    <h3 className="sub-title">히어로 제품 평점 비교</h3>
    <div className="card">
      <div className="bar-chart">
        <div className="bar-row">
          <span className="bar-label">홀리카 아이팔레트</span>
          <div className="bar-track">
            <div className="bar-fill holika" style={{ width: "86.6%" }}>4.33 / 5.0 (LIPS)</div>
          </div>
        </div>
        <div className="bar-row">
          <span className="bar-label">잉가 립틴트</span>
          <div className="bar-track">
            <div className="bar-fill inga" style={{ width: "83.8%" }}>4.19 / 5.0 (LIPS)</div>
          </div>
        </div>
        <div className="bar-row">
          <span className="bar-label">잉가 립틴트 (@cosme)</span>
          <div className="bar-track">
            <div className="bar-fill inga" style={{ width: "82.9%" }}>5.8 / 7.0</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ────────────────────── 홀리카홀리카 ────────────────────── */
const HolikaSection = () => (
  <div className="section">
    <div className="brand-header holika">
      <h2>홀리카홀리카</h2>
      <span className="brand-tag">애경그룹</span>
      <span className="brand-tag">LIPS 즐겨찾기 68,988명</span>
    </div>

    <div className="grid-2" style={{ marginBottom: 24 }}>
      <div className="card">
        <h4>브랜드 정체성</h4>
        <ul className="list">
          <li><b>포지셔닝:</b> 플레이풀 & 가성비 K-뷰티</li>
          <li><b>차별점:</b> 캐릭터 콜라보 패키징 (페코짱 등), 합리적 가격</li>
          <li><b>가격대:</b> ¥990 ~ ¥2,970</li>
          <li><b>주력:</b> 아이 메이크업 (아이섀도우 팔레트), 스킨케어</li>
          <li><b>총 등록 제품:</b> 459개 / 리뷰 13,605개</li>
        </ul>
      </div>
      <div className="card">
        <h4>유통 채널</h4>
        <div className="channel-grid">
          {["큐텐 (Qoo10)", "아마존 JP", "라쿠텐", "플라자", "돈키호테", "로프트"].map((ch) => (
            <span key={ch} className="channel-badge">{ch}</span>
          ))}
        </div>
        <p className="desc" style={{ marginTop: 12 }}>온라인 + 오프라인 버라이어티숍 동시 운영. 라쿠텐 공식몰 보유.</p>
      </div>
    </div>

    <h3 className="sub-title">히어로 제품 TOP 5 (LIPS 기준)</h3>
    <div className="table-wrap">
      <table>
        <thead>
          <tr><th>#</th><th>제품명</th><th>가격</th><th>평점</th><th>리뷰 수</th><th>특이사항</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>마이페이브 무드 아이팔레트 9색</td><td>¥2,970</td><td>4.33/5</td><td>2,355</td><td>메가와리 시 단색 2개 증정</td></tr>
          <tr><td>2</td><td>마이페이브 피스 아이섀도우 (단색)</td><td>¥990</td><td>4.34/5</td><td>1,408</td><td>1,000엔 이하 가성비</td></tr>
          <tr><td>3</td><td>래시 컬렉팅 마스카라</td><td>-</td><td>4.14/5</td><td>1,317</td><td>-</td></tr>
          <tr><td>4</td><td>알로에 99% 수딩 젤</td><td>¥1,078</td><td>4.01/5</td><td>558</td><td>시그니처 스킨케어</td></tr>
          <tr><td>5</td><td>세라바리아 모이스처 토너</td><td>-</td><td>4.05/5</td><td>513</td><td>세라마이드 스킨케어</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="sub-title">큐텐 주요 판매 라인업</h3>
    <div className="grid-3">
      <div className="card mini">
        <h5 style={{ color: "#db2777", marginBottom: 8 }}>누드롭 라인</h5>
        <p className="desc">아이섀도우, 치크, 립 묶음 기획전. 메가와리 때 1+1 행사로 1,000엔 이하 공략.</p>
      </div>
      <div className="card mini">
        <h5 style={{ color: "#db2777", marginBottom: 8 }}>누드롭 듀이스틱</h5>
        <p className="desc">크림 타입 멀티 스틱. 큐텐 인기 상품으로 등록.</p>
      </div>
      <div className="card mini">
        <h5 style={{ color: "#db2777", marginBottom: 8 }}>마이페이브 피스밤</h5>
        <p className="desc">신제품 치크. ¥1,000(세금 포함). 큐텐 공식 판매.</p>
      </div>
    </div>

    <h3 className="sub-title">인스타그램 현황</h3>
    <div className="grid-3">
      <div className="card mini">
        <span className="stat-label">@holikaholika_japan</span>
        <span className="stat-value" style={{ color: "#db2777" }}>2,107명</span>
        <span className="stat-sub">169개 게시물</span>
      </div>
      <div className="card mini">
        <span className="stat-label">@holikaholika_japan_</span>
        <span className="stat-value" style={{ color: "#db2777" }}>1,707명</span>
        <span className="stat-sub">129개 게시물 (보조 계정)</span>
      </div>
      <div className="card mini">
        <span className="stat-label">@holikaholika_official</span>
        <span className="stat-value" style={{ color: "#db2777" }}>30만+</span>
        <span className="stat-sub">글로벌 / 2,280개 게시물</span>
      </div>
    </div>
  </div>
);

/* ────────────────────── 잉가 ────────────────────── */
const IngaSection = () => (
  <div className="section">
    <div className="brand-header inga">
      <h2>잉가 (INGA)</h2>
      <span className="brand-tag">ABT ASIA</span>
    </div>

    <div className="grid-2" style={{ marginBottom: 24 }}>
      <div className="card">
        <h4>브랜드 정체성</h4>
        <ul className="list">
          <li><b>포지셔닝:</b> 트렌디 립 전문 K-뷰티</li>
          <li><b>차별점:</b> 일본 소비자 맞춤 색상 개발, 세련된 패키징, 텍스처 연구</li>
          <li><b>가격대:</b> ¥1,590 ~ ¥3,190</li>
          <li><b>주력:</b> 립 틴트/밤 (히어로), 아이 메이크업</li>
          <li><b>일본 슬로건:</b> "자신이 되고 싶은 자신으로, 빛나는 순간을"</li>
        </ul>
      </div>
      <div className="card">
        <h4>유통 채널 (크롤링 결과)</h4>
        <p className="desc" style={{ marginBottom: 10, fontWeight: 600 }}>온라인 (6개 채널)</p>
        <div className="channel-grid">
          {["큐텐 공식숍 (주력)", "아마존 JP (공식)", "라쿠텐 (COSTORY 공식)", "@cosme 쇼핑", "야후 쇼핑", "로프트 넷스토어"].map((ch) => (
            <span key={ch} className="channel-badge inga-badge">{ch}</span>
          ))}
        </div>
        <p className="desc" style={{ marginBottom: 10, marginTop: 14, fontWeight: 600 }}>오프라인 (전국 37개 매장 확인)</p>
        <div className="channel-grid">
          {["로프트 (복수 매장)", "숍인 (Shop In)", "로즈마리", "@cosme 매장", "돈키호테 (2025.03~)", "미니스톱 (한정판)"].map((ch) => (
            <span key={ch} className="channel-badge inga-badge">{ch}</span>
          ))}
        </div>
        <p className="desc" style={{ marginTop: 10 }}>2024년 5월부터 전국 오프라인 확대. 매장별 취급 제품 다름.</p>
      </div>
    </div>

    <h3 className="sub-title">히어로 제품: 워터 그로우 립 틴트</h3>
    <div className="card highlight-card" style={{ marginBottom: 20 }}>
      <div className="grid-2" style={{ gap: 24 }}>
        <div>
          <h3 style={{ marginBottom: 12 }}>핵심 성과</h3>
          <ul className="list">
            <li>LIPS 평점 <b>4.19 / 5.0</b> (리뷰 859개)</li>
            <li>@cosme 평점 <b>5.8 / 7.0</b> (리뷰 114개)</li>
            <li>가격: <b>¥1,690</b> (4.5g)</li>
            <li>13가지 색상 보유</li>
            <li>큐텐 립 카테고리 베스트셀러</li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: 12 }}>인기 색상 TOP 3 (LIPS)</h3>
          <div className="bar-chart">
            <div className="bar-row">
              <span className="bar-label" style={{ width: 120 }}>03 로지 로즈</span>
              <div className="bar-track"><div className="bar-fill inga" style={{ width: "100%" }}>272건</div></div>
            </div>
            <div className="bar-row">
              <span className="bar-label" style={{ width: 120 }}>05 스플래시</span>
              <div className="bar-track"><div className="bar-fill inga" style={{ width: "84%" }}>229건</div></div>
            </div>
            <div className="bar-row">
              <span className="bar-label" style={{ width: 120 }}>02 리치 살몬</span>
              <div className="bar-track"><div className="bar-fill inga" style={{ width: "74%" }}>200건</div></div>
            </div>
          </div>
          <p className="note">이엘베 5색 / 블루베 5색 / 뉴트럴 3색 구성</p>
        </div>
      </div>
    </div>

    <h3 className="sub-title">전체 제품 라인업 (@cosme 기준)</h3>
    <div className="table-wrap">
      <table>
        <thead>
          <tr><th>#</th><th>제품명</th><th>가격</th><th>평점</th><th>리뷰</th><th>특이사항</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>워터 그로우 립 틴트</td><td>¥1,690</td><td>5.8/7.0</td><td>114</td><td>큐텐 베스트셀러</td></tr>
          <tr><td>2</td><td>워터 그로우 세루마틱 립 밤</td><td>¥1,590</td><td>5.3/7.0</td><td>12</td><td>2024.04 출시</td></tr>
          <tr><td>3</td><td>로드 아이즈 섀도우 팔레트</td><td>¥3,190</td><td>6.4/7.0</td><td>11</td><td>2025.07 출시, 최고 평점</td></tr>
          <tr><td>4</td><td>워터 더블래스팅 센티드 틴트</td><td>-</td><td>-</td><td>-</td><td>큐텐 포인트메이크 1위 달성</td></tr>
        </tbody>
      </table>
    </div>
    <p className="note">@cosme 총 등록 제품 23개 / 리뷰 282개. 아이라이너, 마스카라, 쿠션 등 14개 카테고리 운영.</p>

    <h3 className="sub-title">인스타그램 현황</h3>
    <div className="grid-3">
      <div className="card mini">
        <span className="stat-label">@inga_jp (일본)</span>
        <span className="stat-value" style={{ color: "#2563eb" }}>3,412명</span>
        <span className="stat-sub">336개 게시물</span>
      </div>
      <div className="card mini">
        <span className="stat-label">@inga_official (글로벌)</span>
        <span className="stat-value" style={{ color: "#2563eb" }}>2.4만</span>
        <span className="stat-sub">424개 게시물</span>
      </div>
      <div className="card mini">
        <span className="stat-label">@inga_global</span>
        <span className="stat-value" style={{ color: "#2563eb" }}>1.4만</span>
        <span className="stat-sub">553개 게시물</span>
      </div>
    </div>

    {/* ── 마케팅 레퍼런스 상세 ── */}
    <h3 className="sub-title">잉가 마케팅 레퍼런스 (크롤링 팩트)</h3>

    <div className="grid-2" style={{ marginBottom: 16 }}>
      <div className="card" style={{ borderLeft: "4px solid #3b82f6" }}>
        <h4 style={{ color: "#2563eb" }}>큐텐 플레이 전략</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="marketing-card">
            <div className="marketing-icon blue">1</div>
            <div className="marketing-body">
              <h5>히어로 1개 집중 → 신뢰 축적</h5>
              <p>워터 그로우 립 틴트 하나에 집중. LIPS 859건, @cosme 114건 리뷰 확보. "최근 은밀하게 엄청 바이럴 되는 코스메" (@cosme 리뷰 원문)</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">2</div>
            <div className="marketing-body">
              <h5>신제품 런칭 프로모 = 당일 1위</h5>
              <p>워터 더블래스팅 센티드 틴트, 프로모 시작일 큐텐 포인트메이크 전체 1위 달성. 기존 히어로 신뢰가 신제품으로 전이.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">3</div>
            <div className="marketing-body">
              <h5>큐텐 공식숍 운영</h5>
              <p>INGA 공식숍 직접 운영. 메가와리 시즌 프로모 + 20% 쿠폰 적용 가능 구조로 가격 경쟁력 확보.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ borderLeft: "4px solid #8b5cf6" }}>
        <h4 style={{ color: "#7c3aed" }}>오프라인 확장 전략</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="marketing-card">
            <div className="marketing-icon purple">1</div>
            <div className="marketing-body">
              <h5>매장별 차별화 제품 배치</h5>
              <p><b>로프트:</b> 워터 그로우 립 틴트 (글로시 타입)<br/><b>돈키호테:</b> 벨벳 슛 틴트 (매트) + 젤리 샤인 립 플럼퍼<br/><b>미니스톱:</b> 한정 색상 3종 (베어피치, 로지로즈, 리치살몬)</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon purple">2</div>
            <div className="marketing-body">
              <h5>편의점 한정판 전략</h5>
              <p>미니스톱 전용 한정 컬러 3색 출시 (2025.03.20~). 이엘베/블루베/뉴트럴 각 1색씩 구성. 편의점 K-코스메 트렌드 활용.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon purple">3</div>
            <div className="marketing-body">
              <h5>돈키호테 입점 (2025.03~)</h5>
              <p>공식 X(트위터) @officialINGA_jp 통해 돈키호테 입점 공식 발표. 전국 매장 확대 중.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid-2">
      <div className="card" style={{ borderLeft: "4px solid #06b6d4" }}>
        <h4 style={{ color: "#0891b2" }}>인스타 시딩 & 인플루언서</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="marketing-card">
            <div className="marketing-icon blue">📱</div>
            <div className="marketing-body">
              <h5>@inga_jp 모니터 이벤트</h5>
              <p>일본 전용 계정에서 체험단/모니터 이벤트 정기 운영. 제품 무료 제공 → 리뷰 수집 → @cosme/LIPS 리뷰 확보 루프.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">👩</div>
            <div className="marketing-body">
              <h5>일본 뷰티 블로거/유튜버 리뷰</h5>
              <p>@cosme 리뷰어 "こまいぬ＠ポメ" 등 뷰티 인플루언서 자발적 리뷰 다수. "한 번 바르면 색이 안 빠진다! 키프력 최강!" (실제 리뷰 원문)</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">🎨</div>
            <div className="marketing-body">
              <h5>퍼스널 컬러 마케팅</h5>
              <p>이엘베/블루베 구분 콘텐츠 적극 활용. 일본 뷰티 미디어 daon.media에서 "전 색상 이엘베·블루베별 소개" 콘텐츠 확산.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ borderLeft: "4px solid #f59e0b" }}>
        <h4 style={{ color: "#d97706" }}>일본 소비자 반응 (실제 리뷰)</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: "#fffbeb", padding: 14, borderRadius: 10 }}>
            <p style={{ fontSize: "0.85rem", color: "#92400e", fontStyle: "italic" }}>"とにかく色が落ちない！本当に落ちない！キープ力最強です"</p>
            <p className="desc">(정말 색이 안 빠진다! 키프력 최강!) — @cosme 리뷰</p>
          </div>
          <div style={{ background: "#fffbeb", padding: 14, borderRadius: 10 }}>
            <p style={{ fontSize: "0.85rem", color: "#92400e", fontStyle: "italic" }}>"水々しいのにしっかり密着するので落ちにくい"</p>
            <p className="desc">(물광인데 밀착력이 좋아서 지워지지 않는다) — @cosme 리뷰</p>
          </div>
          <div style={{ background: "#fffbeb", padding: 14, borderRadius: 10 }}>
            <p style={{ fontSize: "0.85rem", color: "#92400e", fontStyle: "italic" }}>"最近ひそかにバズりまくってるコスメ"</p>
            <p className="desc">(최근 은밀하게 엄청 바이럴 되는 코스메) — @cosme 리뷰</p>
          </div>
          <div style={{ background: "#fffbeb", padding: 14, borderRadius: 10 }}>
            <p style={{ fontSize: "0.85rem", color: "#92400e", fontStyle: "italic" }}>"ひと塗りでパッと華やぐ発色でうるっとツヤ感がかわいすぎる"</p>
            <p className="desc">(한 번 발라도 확 화사한 발색, 촉촉한 윤기가 너무 귀엽다) — 인플루언서 리뷰</p>
          </div>
        </div>
      </div>
    </div>

    <div className="card" style={{ marginTop: 16 }}>
      <h4>잉가 마케팅 타임라인 요약</h4>
      <div className="table-wrap" style={{ border: "none", boxShadow: "none" }}>
        <table>
          <thead>
            <tr><th>시기</th><th>액션</th><th>성과/결과</th></tr>
          </thead>
          <tbody>
            <tr><td>2022</td><td>일본 시장 첫 진출 (큐텐 입점)</td><td>K-뷰티 립 카테고리 진입</td></tr>
            <tr><td>2023.03</td><td>오프라인 확대 (토큐핸즈, 숍인, 로즈마리)</td><td>전국 매장 유통 시작</td></tr>
            <tr><td>2024.04</td><td>워터 그로우 세루마틱 립 밤 출시</td><td>@cosme 평점 5.3/7.0</td></tr>
            <tr><td>2024.05</td><td>전국 오프라인 매장 확대</td><td>37개 매장 확인</td></tr>
            <tr><td>2025.03</td><td>미니스톱 한정 색상 출시 + 돈키호테 입점</td><td>편의점/대형 유통 동시 진출</td></tr>
            <tr><td>2025.07</td><td>로드 아이즈 섀도우 팔레트 출시</td><td>@cosme 평점 6.4/7.0 (최고점)</td></tr>
            <tr><td>2026.01</td><td>워터 더블래스팅 센티드 틴트 런칭</td><td>큐텐 포인트메이크 전체 1위</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

/* ────────────────────── 마케팅 분석 ────────────────────── */
const MarketingSection = () => (
  <div className="section">
    <h2 className="section-title">마케팅 플레이 분석</h2>

    <div className="grid-2" style={{ marginBottom: 28 }}>
      {/* 홀리카홀리카 마케팅 */}
      <div className="card" style={{ borderTop: "4px solid #ec4899" }}>
        <h4 style={{ color: "#db2777" }}>홀리카홀리카 마케팅 방식</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="marketing-card">
            <div className="marketing-icon pink">🛍️</div>
            <div className="marketing-body">
              <h5>큐텐 메가와리 집중 공략</h5>
              <p>연 4회 메가와리(3/6/9/11월) 때 1+1 행사, 누드롭 라인 기획전 운영. 1,000엔 이하 가격대로 진입장벽 낮춤.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon pink">🎭</div>
            <div className="marketing-body">
              <h5>캐릭터 / IP 콜라보</h5>
              <p>페코짱 등 일본 인기 캐릭터와 콜라보 한정판 출시. 패키징 자체가 바이럴 콘텐츠가 되는 구조.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon pink">🎨</div>
            <div className="marketing-body">
              <h5>다색상 라인업 전략</h5>
              <p>마이페이브 무드 팔레트 다양한 컬러 테마(시나몬롤, 유자시트러스티 등)로 계절별 신규 수요 창출.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon pink">🏬</div>
            <div className="marketing-body">
              <h5>오프라인 버라이어티숍 입점</h5>
              <p>플라자, 돈키호테, 로프트 등 오프라인 셀렉티브 입점. 온+오프 동시 노출.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon pink">📱</div>
            <div className="marketing-body">
              <h5>인스타그램 운영</h5>
              <p>일본 전용 계정 2개 운영. 그러나 팔로워 규모 소규모 (2,100명 수준). 적극적 시딩보다는 공식 콘텐츠 위주.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 잉가 마케팅 */}
      <div className="card" style={{ borderTop: "4px solid #3b82f6" }}>
        <h4 style={{ color: "#2563eb" }}>잉가 (INGA) 마케팅 방식</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="marketing-card">
            <div className="marketing-icon blue">🚀</div>
            <div className="marketing-body">
              <h5>큐텐 런칭 프로모션 집중</h5>
              <p>신제품 '워터 더블래스팅 센티드 틴트' 프로모션 시작 당일 큐텐 포인트메이크 전체 1위 달성. 기존 히트작 신뢰 → 신제품 전이.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">🎯</div>
            <div className="marketing-body">
              <h5>일본 현지화 색상 전략</h5>
              <p>"일본 소비자의 고유한 선호도를 반영한 색상 선택, 세련된 패키징 디자인, 텍스처에 대한 지속적인 연구" (ABT ASIA 공식 발표)</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">📱</div>
            <div className="marketing-body">
              <h5>인스타 모니터 이벤트 (시딩)</h5>
              <p>@inga_jp 계정에서 체험단/모니터 이벤트 운영. 일본 마이크로 인플루언서 대상 제품 시딩 → 리뷰 콘텐츠 확보.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">🌏</div>
            <div className="marketing-body">
              <h5>동남아 성공 모델 일본 적용</h5>
              <p>동남아 시장 진출 성공 사례를 레버리지하여 일본 시장 전략 수립. 글로벌 K-뷰티 브랜드로 포지셔닝.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">🏪</div>
            <div className="marketing-body">
              <h5>오프라인 전략적 확장 (실행 완료)</h5>
              <p>로프트→숍인→로즈마리→돈키호테(2025.03)→미니스톱 한정판까지. 매장별 제품 차별화 (로프트=글로시, 돈키=매트). 전국 37개 매장 확보.</p>
            </div>
          </div>
          <div className="marketing-card">
            <div className="marketing-icon blue">🎨</div>
            <div className="marketing-body">
              <h5>퍼스널 컬러 마케팅</h5>
              <p>이엘베/블루베별 색상 분류 콘텐츠 적극 활용. 일본 뷰티 미디어에서 "전 색상 퍼스널 컬러별 소개" 콘텐츠 자발적 확산.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3 className="sub-title">마케팅 전략 비교 요약</h3>
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>마케팅 요소</th>
            <th className="holika-col">홀리카홀리카</th>
            <th className="inga-col">잉가</th>
            <th className="tam-col">탐뷰티 적용 포인트</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>큐텐 전략</b></td>
            <td>메가와리 1+1, 기획전</td>
            <td>런칭 프로모 집중, 당일 1위</td>
            <td>메가와리 시즌에 맞춰 런칭 필요</td>
          </tr>
          <tr>
            <td><b>인스타 시딩</b></td>
            <td>소극적 (공식 콘텐츠 위주)</td>
            <td>모니터 이벤트, 체험단 운영</td>
            <td>잉가 방식 벤치마킹 권장</td>
          </tr>
          <tr>
            <td><b>인플루언서</b></td>
            <td>대규모 X, 글로벌 계정 활용</td>
            <td>일본 마이크로 인플루언서 시딩</td>
            <td>1K~10K 마이크로 인플루언서 타깃</td>
          </tr>
          <tr>
            <td><b>제품 현지화</b></td>
            <td>글로벌 라인업 그대로</td>
            <td>일본 전용 색상/텍스처 개발</td>
            <td>현지 색상 맞춤 개발 필수</td>
          </tr>
          <tr>
            <td><b>오프라인</b></td>
            <td>플라자/돈키/로프트 입점</td>
            <td>로프트, 돈키(2025.03~), 숍인, 미니스톱 한정판</td>
            <td>온라인 성과 선행 후 오프라인 검토</td>
          </tr>
          <tr>
            <td><b>편의점 한정판</b></td>
            <td>해당 없음</td>
            <td>미니스톱 한정 3색 (2025.03)</td>
            <td>편의점 K-코스메 트렌드 활용 검토</td>
          </tr>
          <tr>
            <td><b>퍼스널 컬러</b></td>
            <td>해당 없음</td>
            <td>이엘베/블루베별 콘텐츠 적극 활용</td>
            <td>일본 MZ 트렌드에 맞춰 필수 적용</td>
          </tr>
          <tr>
            <td><b>리뷰 확보</b></td>
            <td>13,605개 (오랜 기간 축적)</td>
            <td>859개 (히어로 1개 집중)</td>
            <td>히어로 SKU 1개에 리뷰 집중 전략</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

/* ────────────────────── 인사이트 ────────────────────── */
const InsightSection = () => (
  <div className="section">
    <h2 className="section-title">핵심 인사이트 & 제안</h2>

    <div className="grid-2">
      <div className="card insight-card green">
        <h4>기회 요인</h4>
        <ul className="list">
          <li><b>메가데뷔 4위 달성</b> → 이미 큐텐에서 초기 성과 검증됨. 스케일업 기반 확보.</li>
          <li>경쟁사 일본 인스타 팔로워 모두 소규모 → <b>시딩만 잘 하면 빠르게 따라잡을 수 있음</b></li>
          <li>잉가처럼 <b>히어로 SKU 1개에 집중</b>하면 소규모 브랜드도 카테고리 1위 가능</li>
          <li>오프라인(플라자, 로프트, 돈키) 입점 시 인지도 급상승</li>
          <li>일본 전용 색상 맞춤화가 성공의 핵심 (잉가 사례 참고)</li>
        </ul>
      </div>
      <div className="card insight-card orange">
        <h4>리스크 & 주의사항</h4>
        <ul className="list">
          <li>K-뷰티 경쟁 치열 (데이지크, 티르티르, VT 등 상위권)</li>
          <li>메가데뷔 4위에서 정규 랭킹 상위로 올라가려면 히어로 SKU 확정 필수</li>
          <li>큐텐 수수료 6~10% + 광고비 별도 → 수익구조 검토 필요</li>
          <li>@cosme 리뷰 100건 이상 필요 (일본 소비자 신뢰 기준)</li>
          <li>대행사 비용 대비 효과 검증이 핵심 → KPI 명확히 설정해야</li>
        </ul>
      </div>
    </div>

    <div className="card insight-card blue" style={{ marginTop: 24 }}>
      <h4>탐뷰티 스케일업 액션 플랜</h4>
      <ol className="list numbered">
        <li><b>히어로 SKU 확정:</b> 메가데뷔 4위 달성 제품 중심으로 일본 맞춤 히어로 1~2개 확정. 잉가의 "1개 집중" 전략 참고.</li>
        <li><b>큐텐 정규 랭킹 진입:</b> 메가데뷔 → 정규 카테고리 상위 진입 목표. 메가와리(6월/9월) 프로모 적극 활용.</li>
        <li><b>인스타 시딩 강화:</b> 일본 마이크로 인플루언서(1K~10K) 중심 체험단 운영. 잉가 모니터 이벤트 방식 벤치마킹.</li>
        <li><b>@cosme 리뷰 확보:</b> 100건 이상 리뷰 축적 목표. 일본 소비자 신뢰 구축의 핵심.</li>
        <li><b>대행사 KPI 명확화:</b> 큐텐 카테고리 랭킹, 인스타 팔로워 성장률, @cosme 평점/리뷰 수 기준 관리.</li>
        <li><b>현지화 고도화:</b> 일본 전용 색상/네이밍 개발. "글로벌 라인업 그대로"보다 "현지 맞춤"이 성과 좋음 (잉가 사례).</li>
      </ol>
    </div>

    <div className="card" style={{ marginTop: 24 }}>
      <h4>대행사 레퍼런스 팩트체크 결론</h4>
      <div className="grid-2" style={{ marginTop: 16 }}>
        <div style={{ padding: "16px", background: "#fdf2f8", borderRadius: 12 }}>
          <h5 style={{ color: "#db2777", marginBottom: 8 }}>홀리카홀리카</h5>
          <p className="desc">오래된 브랜드, 제품 수 많고 리뷰 축적량 많음. 그러나 <b>일본 인스타 팔로워가 2,100명 수준</b>으로 디지털 마케팅 성과는 크지 않음. 오프라인 유통 + 큐텐 가격 경쟁력이 핵심.</p>
        </div>
        <div style={{ padding: "16px", background: "#eff6ff", borderRadius: 12 }}>
          <h5 style={{ color: "#2563eb", marginBottom: 8 }}>잉가 (INGA)</h5>
          <p className="desc">소규모 브랜드이나 <b>히어로 1개 집중 + 현지화 전략</b>으로 큐텐 1위 달성. 탐뷰티와 비슷한 규모에서 시작했으므로 <b>벤치마킹 가치가 더 높음.</b></p>
        </div>
        <div style={{ padding: "16px", background: "#f5f3ff", borderRadius: 12, marginTop: 12, gridColumn: "1 / -1" }}>
          <h5 style={{ color: "#6366f1", marginBottom: 8 }}>탐뷰티 현재 위치</h5>
          <p className="desc"><b>큐텐 메가데뷔 4위 달성</b>으로 이미 시장 진입 검증 완료. 잉가가 초기에 했던 것처럼 히어로 SKU 집중 + 인스타 시딩을 체계적으로 진행하면 정규 랭킹 상위 진입 충분히 가능. 대행사를 통해 <b>시딩/인플루언서/현지화를 얼마나 효과적으로 스케일업</b>할 수 있는지가 핵심.</p>
        </div>
      </div>
    </div>

    <div className="card" style={{ marginTop: 24 }}>
      <h4>데이터 출처</h4>
      <ul className="list source-list">
        <li>LIPS (lipscosme.com) - 홀리카홀리카 제품 평점/리뷰/즐겨찾기</li>
        <li>@cosme (cosme.net) - 잉가 제품 평점/리뷰</li>
        <li>큐텐 재팬 (qoo10.jp) - 판매 랭킹/기획전 정보</li>
        <li>인스타그램 - 공식 계정 팔로워/게시물 수</li>
        <li>아시아경제 영문판 - 잉가 일본 성과 보도 (2026.01.14)</li>
        <li>조사 시점: 2026년 4월</li>
      </ul>
    </div>
  </div>
);

export default App;
