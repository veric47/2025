export default function Home() {
  return (
    <section style={{
      textAlign: "center",
      padding: "4rem 1rem",
      backgroundColor: "#003366" // <-- Change to your desired color!
    }}>
      <h1 style={{ color: "#003366", fontSize: "2rem", fontWeight: "bold" }}>
        Accentuate Integrated Services Limited
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem", color: "#555" }}>
        Engineering | Construction | Procurement | Energy Consulting
      </p>
      <div style={{ marginTop: "3rem", lineHeight: "1.6" }}>
        <h2 style={{ color: "#003366", fontSize: "1.5rem", fontWeight: "bold" }}>
          Our Mission
        </h2>
        <p>
          To provide the best of service with integrity and ensure provision of
          consistent added value for our Clients and Team with global best practices.
        </p>
        <h2 style={{ color: "#003366", fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem" }}>
          Our Vision
        </h2>
        <p>
          Ensure all-round unique service delivery that makes us the first-choice
          call for clients and employees.
        </p>
        <h2 style={{ color: "#003366", fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem" }}>
          Core Values
        </h2>
        <p>Professionalism • Safety • Synergy • Innovation • Smart Teamwork • Integrity</p>
      </div>
    </section>
  );
}
