export default function About() {
  const values = [
    {
      title: "Safety First",
      desc: "We uphold rigorous safety standards in every operation, prioritizing people and environmental integrity above all else."
    },
    {
      title: "Technical Excellence",
      desc: "Our experienced team and pursuit of innovation ensure advanced solutions, efficiency, and top-tier results for every client."
    },
    {
      title: "Sustainability",
      desc: "Environmental responsibility and long-term value are embedded in every decision, helping build a better Nigeria for generations."
    },
    {
      title: "True Partnership",
      desc: "We work closely with clients, aligning our expertise with your goals—building trust through communication and shared success."
    }
  ];

  return (
    <section className="themed-section" style={{
      minHeight: "100vh",
      background: "linear-gradient(110deg, #6C36A9 40%, #191f2b 100%)",
      padding: "0",
      fontFamily: "inherit"
    }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "1.5rem 1rem 4rem 1rem" }}>
        {/* Hero Title & Lead */}
        <h1 
          className="section-intro-title"
          style={{
            olor: "#6C36A9",
            textAlign: "center",
            fontSize: "2.9rem",
            fontWeight: 900,
            letterSpacing: ".04em",
            marginBottom: "1.45rem"
          }}>
          About Accentuate Integrated Services Limited
        </h1>
        <p 
          className="section-intro-desc"
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: 500,
            marginBottom: "2.13rem",
            color: "#e6e1fb",
            maxWidth: "700px",
            margin: "0 auto 2.2rem auto"
          }}>
          Pioneering engineering, energy, and infrastructure solutions for a dynamic Nigeria—driven by innovation, shaped by expertise, and powered by a commitment to build a brighter, more sustainable future.
        </p>
        <div style={{
          display: "inline-block",
          background: "#19C37D",
          color: "#191f2b",
          fontWeight: "bold",
          borderRadius: "40px",
          padding: "0.9rem 2.5rem",
          fontSize: "1.11rem",
          marginBottom: "2.7rem",
          boxShadow: "0 2px 10px rgba(25,195,125,.09)",
          marginLeft: "50%",
          transform: "translateX(-50%)"
        }}>
          Engineering Tomorrow. Delivering Today.
        </div>

        {/* Timeline / Journey */}
        <h2 style={{
          color: "#19C37D",
          fontWeight: 900,
          fontSize: "2rem",
          marginTop: "2.5rem",
          marginBottom: "1.2rem"
        }}>Our Journey</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "2.1rem",
          marginBottom: "2.8rem"
        }}>
          <div style={{background: "#241d39", borderRadius: "14px", padding: "1.3rem", boxShadow: "0 2px 12px rgba(108,54,169,0.07)"}}>
            <h3 style={{color: "#19C37D", fontWeight: 700, fontSize: "1.21rem"}}>2010</h3>
            <div style={{fontWeight: 700, color: "#f7f6fd"}}>Accentuate Founded</div>
            <p style={{color: "#dbd6f8"}}>Launched with a mission to set new standards in engineering and project delivery.</p>
          </div>
          <div style={{background: "#241d39", borderRadius: "14px", padding: "1.3rem", boxShadow: "0 2px 12px rgba(108,54,169,0.07)"}}>
            <h3 style={{color: "#19C37D", fontWeight: 700, fontSize: "1.21rem"}}>2012</h3>
            <div style={{fontWeight: 700, color: "#f7f6fd"}}>Growth Across Nigeria</div>
            <p style={{color: "#dbd6f8"}}>Awarded full-scope construction, procurement, and logistics contracts in multiple states.</p>
          </div>
          <div style={{background: "#241d39", borderRadius: "14px", padding: "1.3rem", boxShadow: "0 2px 12px rgba(108,54,169,0.07)"}}>
            <h3 style={{color: "#19C37D", fontWeight: 700, fontSize: "1.21rem"}}>2017</h3>
            <div style={{fontWeight: 700, color: "#f7f6fd"}}>Energy Expertise</div>
            <p style={{color: "#dbd6f8"}}>Expanded into renewables, energy consulting, and sustainable project design.</p>
          </div>
          <div style={{background: "#241d39", borderRadius: "14px", padding: "1.3rem", boxShadow: "0 2px 12px rgba(108,54,169,0.07)"}}>
            <h3 style={{color: "#19C37D", fontWeight: 700, fontSize: "1.21rem"}}>2023+</h3>
            <div style={{fontWeight: 700, color: "#f7f6fd"}}>Trusted Turnkey Partner</div>
            <p style={{color: "#dbd6f8"}}>Delivering projects that empower communities and industries for the long term.</p>
          </div>
        </div>

        {/* Human-centered Mission & Vision */}
        <div style={{
          display: "flex",
          gap: "2.2rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "2.7rem"
        }}>
          <div style={{
            background: "#fff",
            border: "2px solid #6C36A9",
            borderRadius: "17px",
            padding: "2.2rem 1.35rem",
            minWidth: "270px",
            boxShadow: "0 2px 12px rgba(108,54,169,0.09)",
            flex: "1 1 350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <h2 style={{
              color: "#6C36A9", fontWeight: 700, fontSize: "1.26rem", marginBottom: "1rem"
            }}>Our Vision</h2>
            <p style={{ fontSize: "1.09rem", color: "#222", margin: 0, textAlign: "center" }}>
              To inspire and enable progress through exceptional engineering, empowering people and organizations to realize their boldest ambitions—today and for generations to come.
            </p>
          </div>
          <div style={{
            background: "#fff",
            border: "2px solid #6C36A9",
            borderRadius: "17px",
            padding: "2.2rem 1.35rem",
            minWidth: "270px",
            boxShadow: "0 2px 12px rgba(108,54,169,0.09)",
            flex: "1 1 350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <h2 style={{
              color: "#6C36A9", fontWeight: 700, fontSize: "1.26rem", marginBottom: "1rem"
            }}>Our Mission</h2>
            <p style={{ fontSize: "1.09rem", color: "#222", margin: 0, textAlign: "center" }}>
              To build lasting value for clients and society with foresight, skill, and integrity—delivering solutions that exceed expectations and uplift every stakeholder we serve.
            </p>
          </div>
        </div>

        {/* Value Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "1.6rem",
          marginBottom: "2.7rem"
        }}>
          {values.map(val => (
            <div key={val.title} style={{
              background: "#fff",
              borderRadius: "13px",
              boxShadow: "0 2px 11px rgba(108,54,169,0.07)",
              padding: "1.6rem 1.15rem",
              textAlign: "center",
              borderTop: "5px solid #19C37D"
            }}>
              <h3 style={{ color: "#19C37D", fontWeight: 800, marginBottom: ".54rem" }}>{val.title}</h3>
              <div style={{ color: "#191f2b", fontSize: "1.05rem", lineHeight: 1.7 }}>{val.desc}</div>
            </div>
          ))}
        </div>

        {/* Certifications & Stats row */}
        <div style={{
          display: "flex", gap: "2rem", justifyContent: "center", padding: "2.3rem 0"
        }}>
          <div style={{
            background: "#19C37D",
            padding: "1rem 2rem",
            borderRadius: "18px",
            fontWeight: "bold",
            color: "#252033",
            minWidth: "170px",
            textAlign: "center"
          }}>ISO 9001:2015</div>
          <div style={{
            background: "#19C37D",
            padding: "1rem 2rem",
            borderRadius: "18px",
            fontWeight: "bold",
            color: "#252033",
            minWidth: "170px",
            textAlign: "center"
          }}>ISO 45001:2018</div>
          <div style={{
            background: "#19C37D",
            padding: "1rem 2rem",
            borderRadius: "18px",
            fontWeight: "bold",
            color: "#252033",
            minWidth: "170px",
            textAlign: "center"
          }}>A+ Safety Rating</div>
          <div style={{
            background: "#19C37D",
            padding: "1rem 2rem",
            borderRadius: "18px",
            fontWeight: "bold",
            color: "#252033",
            minWidth: "170px",
            textAlign: "center"
          }}>99%+ Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
}
