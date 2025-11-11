export default function About() {
  return (
    <section
      style={{
        backgroundColor: "#f8faff",
        minHeight: "100vh",
        padding: "3rem 1rem",
        fontFamily: "inherit",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#003366",
            fontSize: "2.3rem",
            fontWeight: 700,
            marginBottom: "2rem",
          }}
        >
          About Accentuate Integrated Services Limited
        </h1>
        
        {/* Vision Block */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            backgroundColor: "#fff",
            border: "2px solid #003366",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "2rem",
            minHeight: "150px"
          }}
        >
          {/* Space for Vision Design/Icon */}
          <div style={{
            flex: "0 0 90px",
            height: "90px",
            background: "#eaf0fa",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.2rem",
            color: "#003366"
          }}>
            {/* Put an icon or image component here later */}
            🌟
          </div>
          <div style={{ flex: "1 1 0%" }}>
            <h2 style={{ color: "#003366", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem" }}>
              Our Vision
            </h2>
            <p style={{ fontSize: "1.15rem", color: "#222" }}>
              Ensure all-round unique service delivery that would make us the first-choice call for client and employee.
            </p>
          </div>
        </div>
        
        {/* Mission Block */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            backgroundColor: "#fff",
            border: "2px solid #003366",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "2rem",
            minHeight: "150px"
          }}
        >
          {/* Space for Mission Design/Icon */}
          <div style={{
            flex: "0 0 90px",
            height: "90px",
            background: "#eaf0fa",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.2rem",
            color: "#003366"
          }}>
            {/* Put an icon or image component here later */}
            🎯
          </div>
          <div style={{ flex: "1 1 0%" }}>
            <h2 style={{ color: "#003366", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem" }}>
              Our Mission
            </h2>
            <p style={{ fontSize: "1.15rem", color: "#222" }}>
              To provide the best of service with integrity and ensure provision of consistent added value for our Client and Team with the best global practice.
            </p>
          </div>
        </div>
        
        {/* You can add an overview, values, or other sections below */}
      </div>
    </section>
  );
}
