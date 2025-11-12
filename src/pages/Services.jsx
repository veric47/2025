export default function Services() {
  return (
    <section className="themed-section" style={{ minHeight: "100vh", padding: "3rem 1rem", fontFamily: "inherit" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Intro / Hero */}
        <h1 style={{
          textAlign: "center",
          color: "#003366",
          fontSize: "2.3rem",
          fontWeight: 700,
          marginBottom: "1.4rem"
        }}>
          Our Services
        </h1>
        <p style={{
          textAlign: "center",
          fontSize: "1.15rem",
          color: "#444",
          marginBottom: "2.5rem",
          fontWeight: 500,
          maxWidth: "700px",
          marginLeft: "auto", marginRight: "auto"
        }}>
          Accentuate Integrated Services Limited delivers high-value engineering and consulting across Nigeria’s construction, procurement, energy, marine, and oil & gas sectors. Our comprehensive solutions combine skilled manpower, advanced technology, and a culture of excellence to drive client success in every project.
        </p>

        {/* Services Highlights Cards */}
        <div style={{
          display: "flex",
          gap: "1.7rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          marginBottom: "2rem"
        }}>
          {/* Construction */}
          <div className="card" style={{
            flex: "1 1 240px",
            minWidth: "220px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 2px 12px rgba(0,51,102,0.09)",
            padding: "1.7rem 1rem",
            textAlign: "center"
          }}>
            <h2 style={{
              color: "#003366",
              fontWeight: "bold",
              fontSize: "1.07rem",
              marginBottom: "0.8rem"
            }}>Construction</h2>
            <p style={{ color: "#444", fontSize: "0.99rem", marginBottom: 0 }}>
              From concept to completion, we engineer and build infrastructure to global standards, delivering timely results and excellent quality for clients in commercial, industrial, and residential projects.
            </p>
          </div>
          {/* Procurement */}
          <div className="card" style={{
            flex: "1 1 240px",
            minWidth: "220px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 2px 12px rgba(0,51,102,0.09)",
            padding: "1.7rem 1rem",
            textAlign: "center"
          }}>
            <h2 style={{
              color: "#003366",
              fontWeight: "bold",
              fontSize: "1.07rem",
              marginBottom: "0.8rem"
            }}>Procurement</h2>
            <p style={{ color: "#444", fontSize: "0.99rem", marginBottom: 0 }}>
              We supply high-quality materials and equipment across diverse industries, combining global sourcing and efficient logistics to meet client specifications and enhance operational efficiency.
            </p>
          </div>
          {/* Energy Consulting */}
          <div className="card" style={{
            flex: "1 1 240px",
            minWidth: "220px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 2px 12px rgba(0,51,102,0.09)",
            padding: "1.7rem 1rem",
            textAlign: "center"
          }}>
            <h2 style={{
              color: "#003366",
              fontWeight: "bold",
              fontSize: "1.07rem",
              marginBottom: "0.8rem"
            }}>Energy Consulting</h2>
            <p style={{ color: "#444", fontSize: "0.99rem", marginBottom: 0 }}>
              Our experts provide technical advice, feasibility studies, and implementation for renewable, conventional, and hybrid energy solutions—ensuring efficiency, sustainability, and compliance for every project.
            </p>
          </div>
          {/* Equipment Leasing */}
          <div className="card" style={{
            flex: "1 1 240px",
            minWidth: "220px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 2px 12px rgba(0,51,102,0.09)",
            padding: "1.7rem 1rem",
            textAlign: "center"
          }}>
            <h2 style={{
              color: "#003366",
              fontWeight: "bold",
              fontSize: "1.07rem",
              marginBottom: "0.8rem"
            }}>Equipment Leasing</h2>
            <p style={{ color: "#444", fontSize: "0.99rem", marginBottom: 0 }}>
              Flexible leasing options for modern equipment and vehicles, helping clients optimize project delivery and reduce costs with reliable, well-maintained assets.
            </p>
          </div>
          {/* Marine & Oil/Gas Support */}
          <div className="card" style={{
            flex: "1 1 240px",
            minWidth: "220px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 2px 12px rgba(0,51,102,0.09)",
            padding: "1.7rem 1rem",
            textAlign: "center"
          }}>
            <h2 style={{
              color: "#003366",
              fontWeight: "bold",
              fontSize: "1.07rem",
              marginBottom: "0.8rem"
            }}>Marine & Oil/Gas Support</h2>
            <p style={{ color: "#444", fontSize: "0.99rem", marginBottom: 0 }}>
              Support services from pipeline maintenance to vessel leasing and logistics, delivered by specialized teams and proven methods for safe, efficient operations in marine and energy sectors.
            </p>
          </div>
        </div>

        {/* Call to Action / Why Choose Us */}
        <div style={{
          background: "#ffcc33",
          color: "#003366",
          borderRadius: "18px",
          padding: "1.6rem 1rem",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.17rem",
          margin: "2rem auto 0 auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          maxWidth: "700px"
        }}>
          We are dedicated to prompt, professional service and custom solutions for every challenge. Explore Accentuate’s proven expertise—your project, delivered safely, on time, and to the highest quality standards.
        </div>
      </div>
    </section>
  );
}
