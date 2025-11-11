export default function About() {
  return (
    <section style={{
      backgroundColor: "#f8faff",
      minHeight: "100vh",
      padding: "3rem 1rem",
      fontFamily: "inherit"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        <h1 style={{
          textAlign: "center",
          color: "#003366",
          fontSize: "2.3rem",
          fontWeight: 700,
          marginBottom: "2rem"
        }}>
          About Accentuate Integrated Services Limited
        </h1>
        
        {/* Vision */}
        <div style={{
          backgroundColor: "#fff",
          border: "2px solid #003366",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem"
        }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#003366"
          }}>
            Our Vision
          </h2>
          <p style={{
            fontSize: "1.2rem",
            color: "#222"
          }}>
            To provide the best of service with integrity and ensure provision of consistent added value for our Client and Team with the best global practice. Ensure all-round unique service delivery that would make us the first-choice call for client and employee.
          </p>
        </div>
        
        {/* Mission */}
        <div style={{
          backgroundColor: "#fff",
          border: "2px solid #003366",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem"
        }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#003366"
          }}>
            Our Mission
          </h2>
          <p style={{
            fontSize: "1.2rem",
            color: "#222"
          }}>
            To be a pioneering force in Africa’s engineering and consulting landscape, delivering responsive, reliable, and innovative solutions using state-of-the-art technologies and skilled manpower. We are committed to empowering businesses and communities with quality services in construction, procurement, equipment leasing, pipeline & marine support, and oil & gas.
          </p>
        </div>

        {/* Why Choose Us/Values */}
        <div style={{
          backgroundColor: "#fff",
          border: "2px solid #003366",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem"
        }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#003366"
          }}>
            Why Accentuate?
          </h2>
          <ul style={{
            fontSize: "1.15rem",
            color: "#003366",
            textAlign: "left",
            paddingLeft: "1.4rem"
          }}>
            <li><strong>Reliability:</strong> Projects executed with professional standards and advanced technologies.</li>
            <li><strong>Expertise:</strong> Highly skilled manpower and years of experience since 2007.</li>
            <li><strong>Wide Service Range:</strong> Construction, Energy Consulting, Equipment Leasing, Oil & Gas Support, Marine & Pipeline Services.</li>
            <li><strong>Client Satisfaction:</strong> Value-driven solutions tailored to each client’s unique needs.</li>
            <li><strong>Innovation:</strong> Forward-thinking approach to deliver outstanding results.</li>
            <li><strong>Integrity:</strong> Committed to excellence and ethical practices in every project.</li>
          </ul>
        </div>

        {/* Company Overview */}
        <div style={{
          backgroundColor: "#fff",
          border: "2px solid #003366",
          borderRadius: "16px",
          padding: "2rem"
        }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#003366"
          }}>
            Company Overview
          </h2>
          <p style={{
            fontSize: "1.1rem",
            color: "#444"
          }}>
            Registered in 2007 with the Corporate Affairs Commission (CAC), RC Number 685091, Accentuate Integrated Services Limited has developed a strong capacity to execute medium to large-scale projects from feasibility through design and administration to successful completion. Our value-driven approach ensures prompt and efficient fulfillment of client expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
