export default function About() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        backgroundColor: "#ffffff",
      }}
    >
      <h1
        style={{
          color: "#003366",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        About Us
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          marginTop: "1rem",
          color: "#555",
          maxWidth: "700px",
          margin: "0 auto 3rem",
        }}
      >
        Accentuate Integrated Services Limited is a leading engineering firm registered in 2007 (CAC RC Number 685091). The company delivers responsive and professional solutions in Construction, Procurement, Energy Consulting, Equipment Leasing, Pipeline Maintenance, Marine Support, and Oil & Gas Services. Using advanced technologies and skilled manpower, Accentuate executes medium to large-scale projects from feasibility to completion, always striving to meet client expectations efficiently and effectively.
      </p>

      {/* Mission & Vision block */}
      <div
        style={{
          backgroundColor: "#f8faff",
          border: "1px solid #003366",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "600px",
          margin: "2rem auto",
        }}
      >
        <h2
          style={{
            color: "#003366",
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          Our Mission & Vision
        </h2>
        <p
          style={{
            color: "#222",
            fontSize: "1.15rem",
            fontWeight: "500",
            marginBottom: "0.8rem",
          }}
        >
          To provide the best of service with integrity and ensure provision of consistent added value for our clients and team, following the best global practices.
        </p>
        <p
          style={{
            color: "#003366",
            fontWeight: "bold",
            fontSize: "1.05rem",
          }}
        >
          We ensure all-round unique service delivery that makes us the first choice for clients and employees.
        </p>
      </div>
    </section>
  );
}
