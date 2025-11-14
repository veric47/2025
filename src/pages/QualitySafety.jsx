export default function QualitySafety() {
  return (
    <section className="themed-section" style={{
      minHeight: "100vh",
      padding: "0",
      background: "linear-gradient(110deg, #6C36A9 40%, #191f2b 100%)"
    }}>
      <div style={{ maxWidth: "950px", margin: "0 auto", padding: "4rem 1rem" }}>
        <h1 
          className="section-intro-title"
          style={{ 
            color: "#6C36A9", 
            fontSize: "2.45rem", 
            fontWeight: 900, 
            letterSpacing: ".02em",
            textAlign: "center",
            marginBottom: "1.25rem"
          }}>
          Quality & Safety
        </h1>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "2rem",
            margin: "2.5rem 0"
          }}
        >
          {/* QA Card */}
          <div style={{
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 2px 14px rgba(108,54,169,0.10)",
            padding: "2.2rem 1.4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative"
          }}>
            <div style={{
              background: "#19C37D",
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2.1rem",
              fontWeight: 800,
              boxShadow: "0 2px 12px rgba(25,195,125,0.13)",
              marginBottom: "1rem",
              position: "absolute",
              top: "-27px",
              left: "calc(50% - 27px)"
            }}>✔️</div>
            <h3 style={{
              color: "#6C36A9",
              fontWeight: 800,
              fontSize: "1.24rem",
              marginTop: "2.1rem",
              marginBottom: "1rem"
            }}>Quality Assurance</h3>
            <p style={{
              color: "#2B234C",
              fontSize: "1.07rem"
            }}>
              We implement Total Quality Management (TQM), rigorous audits, and continuous improvement at every stage—ensuring all projects not only meet but exceed global standards and client expectations.
            </p>
          </div>

          {/* HSE Card */}
          <div style={{
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 2px 14px rgba(108,54,169,0.10)",
            padding: "2.2rem 1.4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative"
          }}>
            <div style={{
              background: "#6C36A9",
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              fontWeight: 800,
              boxShadow: "0 2px 12px rgba(108,54,169,0.10)",
              marginBottom: "1rem",
              position: "absolute",
              top: "-27px",
              left: "calc(50% - 27px)"
            }}>🛡️</div>
            <h3 style={{
              color: "#19C37D",
              fontWeight: 800,
              fontSize: "1.24rem",
              marginTop: "2.1rem",
              marginBottom: "1rem"
            }}>Health, Safety & Environment</h3>
            <p style={{
              color: "#2B234C",
              fontSize: "1.07rem"
            }}>
              We rigorously follow HSE policy and training, complying with local and international standards, nurturing a safety-first culture, and actively promoting environmental stewardship throughout our operations.
            </p>
          </div>
        </div>

        {/* Value stats row */}
        <div style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2.3rem",
          flexWrap: "wrap"
        }}>
          <div style={{
            background: "#19C37D",
            color: "#191f2b",
            borderRadius: "18px",
            fontWeight: 900,
            fontSize: "1.10rem",
            padding: "1.25rem 1.7rem",
            boxShadow: "0 2px 8px rgba(25,195,125,0.09)",
            textAlign: "center",
            minWidth: "205px"
          }}>
            Zero Lost-Time Injuries
          </div>
          <div style={{
            background: "#6C36A9",
            color: "#fff",
            borderRadius: "18px",
            fontWeight: 900,
            fontSize: "1.10rem",
            padding: "1.25rem 1.7rem",
            boxShadow: "0 2px 8px rgba(108,54,169,0.10)",
            textAlign: "center",
            minWidth: "205px"
          }}>
            100% Environmental Compliance
          </div>
          <div style={{
            background: "#19C37D",
            color: "#191f2b",
            borderRadius: "18px",
            fontWeight: 900,
            fontSize: "1.10rem",
            padding: "1.25rem 1.7rem",
            boxShadow: "0 2px 8px rgba(25,195,125,0.09)",
            textAlign: "center",
            minWidth: "205px"
          }}>
            Safety Training for All Staff
          </div>
        </div>
      </div>
    </section>
  );
}
