export default function About() {
  return (
    <section className="themed-section" style={{
      minHeight: "100vh",
      background: "linear-gradient(110deg, #6C36A9 40%, #191f2b 100%)",
      padding: "0",
      fontFamily: "inherit"
    }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "1.5rem 1rem 4rem 1rem" }}>
        {/* Page Title & Tagline */}
        <h1 
        className="section-intro-title"
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "2.8rem",
          fontWeight: 900,
          marginBottom: "1.5rem",
          letterSpacing: ".03em"
        }}>
          About Accentuate Integrated Services Limited
        </h1>
        <p 
        className="section-intro-title"
        style={{
          textAlign: "center",
          fontSize: "1.22rem",
          color: "#ede5fa",
          fontWeight: 500,
          marginBottom: "2rem",
          maxWidth: "700px",
          margin: "0 auto 2.2rem auto"
        }}>
          Building Nigeria’s future through technology, expertise, and commitment.<br />
          Delivering innovative engineering solutions, reliable project completion, and lasting value in construction, energy, marine, and oil/gas.
        </p>
        <div style={{
          display: "inline-block",
          background: "#19C37D",
          color: "#191f2b",
          fontWeight: "bold",
          borderRadius: "40px",
          padding: "0.8rem 2.3rem",
          fontSize: "1.08rem",
          marginBottom: "2.7rem",
          boxShadow: "0 2px 10px rgba(25,195,125,.08)",
          marginLeft: "50%",
          transform: "translateX(-50%)"
        }}>
          “Engineering with Integrity. Solutions with Impact.”
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
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.6rem",
          marginBottom: "2.7rem"
        }}>
          <div style={{background: "#241d39", borderRadius: "13px", padding: "1.3rem"}}>
            <h3 style={{color: "#19C37D", fontWeight: 700}}>2010</h3>
            <div style={{fontWeight: 600, color: "#fff"}}>Founded</div>
            <p style={{color: "#ede5fa"}}>Started engineering services, laying the foundation for growth.</p>
          </div>
          <div style={{background: "#241d39", borderRadius: "13px", padding: "1.3rem"}}>
            <h3 style={{color: "#19C37D", fontWeight: 700}}>2012</h3>
            <div style={{fontWeight: 600, color: "#fff"}}>Expansion</div>
            <p style={{color: "#ede5fa"}}>Launched construction and procurement across Nigeria.</p>
          </div>
          <div style={{background: "#241d39", borderRadius: "13px", padding: "1.3rem"}}>
            <h3 style={{color: "#19C37D", fontWeight: 700}}>2017</h3>
            <div style={{fontWeight: 600, color: "#fff"}}>Energy Consulting Division</div>
            <p style={{color: "#ede5fa"}}>Added renewables & hybrid solutions for clients.</p>
          </div>
          <div style={{background: "#241d39", borderRadius: "13px", padding: "1.3rem"}}>
            <h3 style={{color: "#19C37D", fontWeight: 700}}>2023+</h3>
            <div style={{fontWeight: 600, color: "#fff"}}>Turnkey Engineering Group</div>
            <p style={{color: "#ede5fa"}}>Integrated, trusted provider for Nigerian industries.</p>
          </div>
        </div>

        {/* Vision & Mission - modern blocks */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "stretch",
          marginBottom: "2.3rem"
        }}>
          <div style={{
            background: "#fff",
            border: "2px solid #6C36A9",
            borderRadius: "15px",
            padding: "2rem",
            minWidth: "260px",
            boxShadow: "0 2px 12px rgba(108,54,169,0.08)",
            flex: "1 1 330px",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem"
          }}>
            <div style={{
              flex: "0 0 82px",
              height: "82px",
              background: "#ede5fa",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.12rem",
              color: "#6C36A9"
            }}>
              🦾
            </div>
            <div>
              <h2 style={{
                color: "#6C36A9", fontWeight: 700, fontSize: "1.23rem", marginBottom: "1rem"
              }}>Our Vision</h2>
              <p style={{ fontSize: "1.07rem", color: "#222", margin: 0 }}>
                Ensure all-round unique service delivery that makes us the first-choice call for client and employee.
              </p>
            </div>
          </div>
          <div style={{
            background: "#fff",
            border: "2px solid #6C36A9",
            borderRadius: "15px",
            padding: "2rem",
            minWidth: "260px",
            boxShadow: "0 2px 12px rgba(108,54,169,0.08)",
            flex: "1 1 330px",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem"
          }}>
            <div style={{
              flex: "0 0 82px",
              height: "82px",
              background: "#ede5fa",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.12rem",
              color: "#6C36A9"
            }}>
              🎯
            </div>
            <div>
              <h2 style={{
                color: "#6C36A9", fontWeight: 700, fontSize: "1.23rem", marginBottom: "1rem"
              }}>Our Mission</h2>
              <p style={{ fontSize: "1.07rem", color: "#222", margin: 0 }}>
                To provide the best of service with integrity and ensure provision of consistent added value for our Client and Team with the best global practice.
              </p>
            </div>
          </div>
        </div>

        {/* Values / Why Us */}
        <div style={{
          borderRadius: "13px",
          background: "#fff",
          textAlign: "center",
          boxShadow: "0 2px 12px rgba(108,54,169,0.09)",
          padding: "1.7rem 1.1rem",
          maxWidth: "740px",
          margin: "0 auto"
        }}>
          <h3 style={{
            color: "#6C36A9", fontWeight: 700, fontSize: "1.11rem", marginBottom: "1rem"
          }}>Why Clients Trust Accentuate</h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            color: "#222",
            fontSize: "1.08rem",
            lineHeight: 2
          }}>
            <li><strong>Reliable project delivery</strong> on time, to global standards.</li>
            <li><strong>Expert knowledge</strong> across construction, energy, logistics, marine, and oil/gas.</li>
            <li><strong>Client-centric</strong> service and solutions for every need.</li>
            <li><strong>Total integrity, safety, and quality</strong> in every contract and interaction.</li>
          </ul>
        </div>

        {/* Certifications & Awards row */}
        <div style={{
          display: "flex", gap: "2rem", justifyContent: "center", padding: "2.4rem 0"
        }}>
          <div style={{
            background: "#19C37D",
            padding: "1rem 2rem",
            borderRadius: "18px",
            fontWeight: "bold",
            color: "#252033",
            minWidth: "190px",
            textAlign: "center"
          }}>ISO 9001:2015</div>
          <div style={{
            background: "#19C37D",
            padding: "1rem 2rem",
            borderRadius: "18px",
            fontWeight: "bold",
            color: "#252033",
            minWidth: "190px",
            textAlign: "center"
          }}>ISO 45001:2018</div>
          <div style={{
            background: "#19C37D",
            padding: "1rem 2rem",
            borderRadius: "18px",
            fontWeight: "bold",
            color: "#252033",
            minWidth: "190px",
            textAlign: "center"
          }}>A+ Safety Rating</div>
          <div style={{
            background: "#19C37D",
            padding: "1rem 2rem",
            borderRadius: "18px",
            fontWeight: "bold",
            color: "#252033",
            minWidth: "190px",
            textAlign: "center"
          }}>100% Compliance</div>
        </div>
      </div>
    </section>
  )
}
