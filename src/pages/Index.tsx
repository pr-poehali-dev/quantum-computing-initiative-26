export default function Index() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4"
      style={{ background: "var(--gg-bg)" }}
    >
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: "0.75rem",
          zIndex: 50,
          width: "100%",
          maxWidth: "820px",
          background: "rgba(10,12,10,0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid var(--gg-border)",
          borderRadius: "2rem",
          padding: "0.85rem 1.6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: "1.4rem",
            color: "var(--gg-green-bright)",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          MAYOT
        </span>
        <div
          style={{
            display: "flex",
            gap: "1.4rem",
            fontSize: "0.78rem",
            color: "var(--gg-green-dim)",
            fontFamily: "'Courier Prime', monospace",
            letterSpacing: "1px",
          }}
        >
          <a href="#bio" style={{ color: "inherit", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#a8d8a0")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--gg-green-dim)")}
          >БИО</a>
          <a href="#album" style={{ color: "inherit", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#a8d8a0")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--gg-green-dim)")}
          >АЛЬБОМ</a>
          <a href="#releases" style={{ color: "inherit", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#a8d8a0")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--gg-green-dim)")}
          >РЕЛИЗЫ</a>
        </div>
      </nav>

      {/* Main card */}
      <div className="gg-container animate-fade-in-up">

        {/* ── HEADER ── */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 4.5rem)",
            fontWeight: 900,
            letterSpacing: "6px",
            color: "var(--gg-green-bright)",
            textShadow: "0 0 20px #2e4a2e, 0 0 5px #1e2e1e",
            marginBottom: "0.2rem",
            lineHeight: 1,
            fontFamily: "'Space Grotesk', 'Arial Black', sans-serif",
            textTransform: "uppercase",
          }}
        >
          MAYOT
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "0.8rem",
            marginBottom: "2.8rem",
            borderBottom: "2px dashed var(--gg-border)",
            paddingBottom: "1.2rem",
          }}
        >
          <span
            style={{
              fontSize: "1.15rem",
              color: "var(--gg-green-mid)",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontFamily: "'Courier Prime', monospace",
              fontWeight: 400,
            }}
          >
            Артём Никитин
          </span>
          <span className="gg-tag">GHETTO GARDEN ERA</span>
        </div>

        {/* ── ALBUM COVER ── */}
        <div id="album" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2.5rem" }}>
          <div className="gg-cover-art">
            <div className="gg-garden-bg" />
            <div className="gg-cover-title">{"GHETTO\nGARDEN"}</div>
            <div className="gg-plants">
              <div className="gg-stem" style={{ height: "62%" }} />
              <div className="gg-stem" style={{ height: "80%" }} />
              <div className="gg-stem" style={{ height: "55%" }} />
              <div className="gg-stem" style={{ height: "72%" }} />
              <div className="gg-stem" style={{ height: "88%" }} />
              <div className="gg-stem" style={{ height: "65%" }} />
            </div>
            <div className="gg-vinyl-label">MELON MUSIC · 2020</div>
          </div>

          {/* Album desc */}
          <div className="gg-album-desc w-full animation-delay-200 animate-fade-in-up">
            <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#c8e0a8", marginBottom: "0.9rem" }}>
              🌿 GHETTO GARDEN — Сентябрь 2020
            </p>
            <p style={{ marginBottom: "1rem", lineHeight: 1.75, fontSize: "1.05rem" }}>
              Психоделичный трэп-альбом, который показал яркую харизму Артёма и попал в топ-чарты Apple Music.
              Именно этот релиз заставил многих спросить:{" "}
              <strong style={{ color: "#cbe6b0" }}>«Шаришь за MAYOT?»</strong> Мрачная, но атмосферная работа,
              полная колких панчей и плотного звука.
            </p>
            <p style={{ fontWeight: "bold", color: "#c2e0b0", marginBottom: "0.6rem" }}>Трек-лист:</p>
            <ul className="gg-tracklist">
              {[
                "Ауди (feat. SEEMEE)",
                "BEEF",
                "Колибри",
                "MOON",
                "Дрипики",
                "Под Звездопадом",
                "Candy Shop",
                "Райские Сады (feat. 163ONMYNECK)",
              ].map((track, i) => (
                <li key={i}>
                  <span className="gg-track-num">{String(i + 1).padStart(2, "0")}</span>
                  {track}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.82rem", color: "var(--gg-text-dim)", marginTop: "0.9rem" }}>
              * стилизованное представление обложки и трек-листа
            </p>
          </div>
        </div>

        {/* ── BIOGRAPHY ── */}
        <div id="bio" className="gg-section-title">🌱 Биография</div>
        <div className="gg-bio-text animate-fade-in-up animation-delay-100">
          <p>
            <strong>Артём Геннадьевич Никитин</strong>, известный как <strong>MAYOT</strong>, родился{" "}
            <strong>2 февраля 1999 года</strong> в Тюмени.
          </p>
          <p>
            Интерес к музыке привил отец, игравший на гитаре. Детство Артёма прошло в спортивных секциях:
            гимнастика, тхэквондо, бокс. Творческий путь начался с фристайла на вечеринке, после чего друг
            предложил запись в студии в счёт долга в 2 тысячи рублей — так началось сотрудничество с
            объединением <strong>Melon Music</strong>.
          </p>
          <p>
            Первую известность принёс трек <strong>«Scum Off the Pot»</strong> (2019) совместно с SEEMEE. Но
            именно выход альбома <strong>GHETTO GARDEN</strong> в 2020 году сделал MAYOT одним из главных
            голосов новой школы русского трэпа.
          </p>
        </div>

        {/* ── KEY RELEASES ── */}
        <div id="releases" className="gg-section-title">💿 Ключевые релизы</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
            gap: "1.1rem",
            marginTop: "0.4rem",
          }}
        >
          {[
            { year: "2019", title: "Scum Off the Pot", desc: "совместно с SEEMEE" },
            { year: "2020", title: "GHETTO GARDEN", desc: "прорывной альбом" },
            { year: "2022", title: "AA LANGUAGE", desc: "мелодичный трэп" },
            { year: "2023", title: "ОБА", desc: "концептуальный альбом" },
            { year: "2024", title: "Нефтяники", desc: "сингл / EP" },
          ].map((r) => (
            <div key={r.year} className="gg-release-card">
              <div style={{ fontSize: "0.78rem", color: "#708a60", fontWeight: "bold", letterSpacing: "1px" }}>
                {r.year}
              </div>
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  margin: "0.35rem 0 0.25rem",
                  color: "#d2e8b2",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                {r.title}
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--gg-text-soft)", lineHeight: 1.4 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <footer
          style={{
            marginTop: "3.5rem",
            textAlign: "center",
            color: "#44603a",
            fontSize: "0.78rem",
            borderTop: "1px solid #233a23",
            paddingTop: "1.8rem",
            letterSpacing: "1px",
            lineHeight: 2,
            fontFamily: "'Courier Prime', monospace",
          }}
        >
          сайт в стиле «GHETTO GARDEN» · MAYOT · Melon Music
          <br />
          <span style={{ color: "#546b3c" }}>биография основана на открытых источниках</span>
        </footer>
      </div>
    </div>
  )
}
