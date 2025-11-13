export default function Home() {
  return (
    <section
      className="themed-section"
      style={{ minHeight: "100vh", padding: "0", fontFamily: "inherit" }}
    >
      {/* Hero Section: Large Brand Banner, Bold CTA, nice gradient background */}
      <div
        className="hero-section"
        style={{
          background: "linear-gradient(90deg, #6C36A9 60%, #f8faff 100%)",
          color: "#fff",
          padding: "5rem 1.7rem 3rem 1.7rem",
          textAlign: "left",
          borderBottomLeftRadius: "65px",
          borderBottomRightRadius: "65px",
          boxShadow: "0 4px 80px rgba(108,54,169,0.10)",
          position: "relative"
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2
          }}
        >
          <h1 style={{
  fontSize: "2.8rem",
  fontWeight: 700,
  marginBottom: "1.2rem",
  letterSpacing: ".01em",
  color: "#fff", // High-contrast white for dark or purple backgrounds
  textShadow: "0 2px 6px rgba(108,54,169,0.16)", // Soft purple glow for separation
}}>
  Accentuate Integrated Services Limited
</h1>

          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: 400,
              marginTop: "1.2rem",
              maxWidth: "600px",
              color: "#e8f1fb",
              marginBottom: "2.6rem",
            }}
          >
            Engineering innovation and turnkey solutions for success in construction, procurement, energy consulting, marine, and oil & gas—trusted for reliability, sustainability and excellence throughout Nigeria.
          </p>
          <a
            href="/contact"
            style={{
              background: "#19C37D",
              color: "#6C36A9",
              fontWeight: 700,
              fontSize: "1.12rem",
              borderRadius: "9px",
              padding: "1.05rem 2.6rem",
              textDecoration: "none",
              boxShadow: "0 6px 36px rgba(108,54,169,0.09)",
              transition: "background .3s, color .3s",
              display: "inline-block"
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Highlights */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "-3rem",
          maxWidth: "1040px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 2
        }}
      >
        {[
          {
            title: "Engineering Excellence",
            desc: "Over 15 years of robust solutions and sector leadership.",
            icon: "🛠️"
          },
          {
            title: "Turnkey Project Delivery",
            desc: "From concept to handover, exact project management for results.",
            icon: "🚀"
          },
          {
            title: "Client-Centric Approach",
            desc: "Your needs drive our tailored, value-added solutions every time.",
            icon: "🤝"
          }
        ].map(({ title, desc, icon }) => (
          <div
            key={title}
            className="card"
            style={{
              borderRadius: "18px",
              background: "#fff",
              boxShadow: "0 2px 13px rgba(108,54,169,0.07)",
              minWidth: "240px",
              maxWidth: "340px",
              padding: "2.1rem 1.5rem",
              flex: "1 0 220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                marginBottom: "1.1rem",
                fontSize: "2.3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#eaf0fa",
                borderRadius: "50%"
              }}
            >
              {icon}
            </div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#6C36A9",
                margin: "0.3rem 0"
              }}
            >
              {title}
            </h3>
            <p
              style={{
                color: "#444",
                fontSize: "1.07rem",
                margin: 0,
                textAlign: "center"
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Our Services - modern info block */}
      <div
        className="card"
        style={{
          maxWidth: "960px",
          margin: "3.5rem auto 0 auto",
          padding: "2.6rem 1.2rem",
          borderRadius: "22px",
          background: "#fff",
          boxShadow: "0 2px 18px rgba(108,54,169,0.09)",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            color: "#6C36A9",
            fontWeight: 700,
            fontSize: "1.75rem",
            marginBottom: "1.2rem"
          }}
        >
          Our Services
        </h2>
        <p
          style={{
            color: "#444",
            fontSize: "1.17rem",
            marginBottom: "2.4rem",
            maxWidth: "690px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          We deliver a full range of solutions: Construction, Procurement, Energy Consulting, Equipment Leasing, Pipeline Maintenance, Marine Support, and Oil & Gas Services. Discover how Accentuate powers project success from concept to commissioning.
        </p>
        <a
          href="/services"
          style={{
            color: "#fff",
            background: "#6C36A9",
            padding: "1rem 2.4rem",
            fontWeight: 700,
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "1.13rem",
            boxShadow: "0 2px 12px rgba(108,54,169,0.12)"
          }}
        >
          Discover More
        </a>
      </div>
    </section>
  );
}
