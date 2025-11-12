export default function Home() {
  return (
    <section className="themed-section" style={{ minHeight: "100vh", padding: "0", fontFamily: "inherit" }}>
      <div className="hero-section" style={{
        padding: "4rem 1rem 3rem 1rem",
        textAlign: "left",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px"
      }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.7rem", fontWeight: 700 }}>
            Accentuate Integrated Services Limited
          </h1>
          <p style={{
            fontSize: "1.35rem",
            fontWeight: 400,
            marginTop: "1.5rem",
            maxWidth: "600px",
            color: "inherit"
          }}>
            Empowering your success with innovative engineering and turnkey solutions in Construction, Procurement, Energy Consulting, and beyond.
          </p>
          <div style={{ marginTop: "2.7rem" }}>
            <a href="/contact" style={{
              background: "#ffcc33",
              color: "#003366",
              fontWeight: 700,
              fontSize: "1.12rem",
              borderRadius: "8px",
              padding: "0.85rem 2.3rem",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(0,0,0,0.09)"
            }}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "-3rem",
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        {[
          {
            title: "Engineering Excellence",
            desc: "Over 15 years of delivering robust solutions in Nigeria’s vital sectors.",
            icon: "🛠️"
          },
          {
            title: "Turnkey Project Delivery",
            desc: "From initial concept to handover, we manage and execute with precision.",
            icon: "🚀"
          },
          {
            title: "Client-Centric Approach",
            desc: "Your unique needs drive our tailored, value-added solutions.",
            icon: "🤝"
          }
        ].map(({ title, desc, icon }) => (
          <div key={title} className="card" style={{
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(0,51,102,0.07)",
            minWidth: "220px",
            maxWidth: "320px",
            padding: "2rem 1.3rem",
            flex: "1 0 220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{
              width: "56px",
              height: "56px",
              marginBottom: "1rem",
              fontSize: "2.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#eaf0fa",
              borderRadius: "50%"
            }}>
              {icon}
            </div>
            <h3 style={{
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "#003366",
              margin: "0.3rem 0"
            }}>{title}</h3>
            <p style={{
              color: "inherit",
              fontSize: "1.05rem",
              margin: 0,
              textAlign: "center"
            }}>{desc}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{
        maxWidth: "960px",
        margin: "3rem auto 0 auto",
        padding: "2.5rem 1rem",
        borderRadius: "18px",
        boxShadow: "0 2px 15px rgba(0,51,102,0.08)",
        textAlign: "center"
      }}>
        <h2 style={{
          color: "#003366",
          fontWeight: 700,
          fontSize: "1.65rem",
          marginBottom: "1.3rem"
        }}>
          Our Services
        </h2>
        <p style={{
          color: "inherit",
          fontSize: "1.14rem",
          marginBottom: "2.2rem",
          maxWidth: "690px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          We deliver a full spectrum of solutions: Construction, Procurement, Energy Consulting, Equipment Leasing, Pipeline Maintenance, Marine Support, and Oil & Gas Services. Explore what Accentuate can do for your next project, from concept to commissioning.
        </p>
        <a href="/services" style={{
          color: "#fff",
          background: "#003366",
          padding: "0.85rem 2.3rem",
          fontWeight: 700,
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem"
        }}>
          Discover More
        </a>
      </div>
    </section>
  );
}
