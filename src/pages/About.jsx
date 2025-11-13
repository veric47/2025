export default function About() {
  return (
    <section className="themed-section" style={{
      minHeight: "100vh",
      padding: "3rem 1rem",
      fontFamily: "inherit"
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Hero Intro & Tagline */}
        <h1 style={{
          textAlign: "center",
          color: "#003366",
          fontSize: "2.7rem",
          fontWeight: 700,
          marginBottom: "1.2rem"
        }}>
          About Accentuate Integrated Services Limited
        </h1>
        <p style={{
          textAlign: "center",
          fontSize: "1.12rem",
          color: "#444",
          fontWeight: "500",
          marginBottom: "2rem"
        }}>
          Building Nigeria’s future through technology, expertise, and commitment. Delivering innovative engineering solutions, reliable project completion, and lasting value in construction, energy consulting, marine, and oil/gas.
        </p>
        <div style={{
          display: "inline-block",
          background: "#19C37D",
          color: "#003366",
          fontWeight: "bold",
          borderRadius: "40px",
          padding: "0.7rem 2.2rem",
          fontSize: "1.01rem",
          marginBottom: "2.5rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
        }}>
          “Engineering with Integrity. Solutions with Impact.”
        </div>

        {/* Vision and Mission Blocks, visually split */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "stretch",
          marginBottom: "2.3rem"
        }}>
          {/* Vision Block */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.4rem",
            background: "#fff",
            border: "2px solid #003366",
            borderRadius: "16px",
            padding: "2rem",
            minHeight: "150px",
            boxShadow: "0 2px 12px rgba(0,51,102,0.09)",
            flex: "1 1 340px"
          }}>
            <div style={{
              flex: "0 0 90px",
              height: "90px",
              background: "#eaf0fa",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.15rem",
              color: "#003366"
            }}>
              {/* Vision icon/graphic spot */}
              🦾
            </div>
            <div style={{ flex: "1 1 0%" }}>
              <h2 style={{ color: "#003366", fontWeight: 700, fontSize: "1.23rem", marginBottom: "1rem" }}>
                Our Vision
              </h2>
              <p style={{ fontSize: "1.07rem", color: "#222", margin: 0 }}>
                Ensure all-round unique service delivery that makes us the first-choice call for client and employee.
              </p>
            </div>
          </div>
          {/* Mission Block */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.4rem",
            background: "#fff",
            border: "2px solid #003366",
            borderRadius: "16px",
            padding: "2rem",
            minHeight: "150px",
            boxShadow: "0 2px 12px rgba(0,51,102,0.09)",
            flex: "1 1 340px"
          }}>
            <div style={{
              flex: "0 0 90px",
              height: "90px",
              background: "#eaf0fa",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.15rem",
              color: "#003366"
            }}>
              {/* Mission icon/graphic spot */}
              🎯
            </div>
            <div style={{ flex: "1 1 0%" }}>
              <h2 style={{ color: "#003366", fontWeight: 700, fontSize: "1.23rem", marginBottom: "1rem" }}>
                Our Mission
              </h2>
              <p style={{ fontSize: "1.07rem", color: "#222", margin: 0 }}>
                To provide the best of service with integrity and ensure provision of consistent added value for our Client and Team with the best global practice.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values / Why Us, for extra trust-building */}
        <div style={{
          borderRadius: "14px",
          background: "#fff",
          textAlign: "center",
          boxShadow: "0 2px 12px rgba(0,51,102,0.08)",
          padding: "1.7rem 1.1rem",
          maxWidth: "650px",
          margin: "0 auto"
        }}>
          <h3 style={{ color: "#003366", fontWeight: 700, fontSize: "1.11rem", marginBottom: "1rem" }}>
            Why Clients Trust Accentuate
          </h3>
          <ul style={{ listStyle: "none", padding: 0, color: "#222", fontSize: "1.06rem", lineHeight: 2 }}>
            <li><strong>Reliable project delivery</strong> on time, to global standards.</li>
            <li><strong>Expert knowledge</strong> across construction, energy, logistics, marine, and oil/gas.</li>
            <li><strong>Client-centric</strong> service and solutions for every need.</li>
            <li><strong>Total integrity, safety, and quality</strong> in every contract and interaction.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
