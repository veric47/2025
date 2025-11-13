export default function Services() {
  // Service data: Add image for each, or leave undefined/null if unavailable
  const services = [
    {
      title: "Construction",
      desc: "From concept to completion, we engineer and build infrastructure to global standards, delivering timely results and excellent quality for clients in commercial, industrial, and residential projects.",
      icon: "🏗️",
      image: "https://cdn.businessday.ng/2021/02/Building-construction.jpg"
    },
    {
      title: "Procurement",
      desc: "We supply high-quality materials and equipment across diverse industries, combining global sourcing and efficient logistics to meet client specifications and enhance operational efficiency.",
      icon: "📦",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Energy Consulting",
      desc: "Our experts provide technical advice, feasibility studies, and implementation for renewable, conventional, and hybrid energy solutions—ensuring efficiency, sustainability, and compliance for every project.",
      icon: "💡",
      image: "https://www.stanleyconsultants.com/images/default-source/about-career-pages/energy-utilities-approach.jpg?sfvrsn=3d792255_2"
    },
    {
      title: "Equipment Leasing",
      desc: "Flexible leasing options for modern equipment and vehicles, helping clients optimize project delivery and reduce costs with reliable, well-maintained assets.",
      icon: "🚜",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Marine & Oil/Gas Support",
      desc: "Support services from pipeline maintenance to vessel leasing and logistics, delivered by specialized teams and proven methods for safe, efficient operations in marine and energy sectors.",
      icon: "⚓",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="themed-section" style={{ minHeight: "100vh", padding: "3rem 1rem", fontFamily: "inherit" }}>
      <div style={{ maxWidth: "950px", margin: "0 auto" }}>
        {/* Left-aligned intro */}
        <h1 style={{
          textAlign: "left",
          color: "#003366",
          fontSize: "2.3rem",
          fontWeight: 700,
          marginBottom: "1.2rem"
        }}>
          Our Services
        </h1>
        <p style={{
          textAlign: "left",
          fontSize: "1.13rem",
          color: "#444",
          marginBottom: "2.6rem",
          fontWeight: 500,
          maxWidth: "580px"
        }}>
          Accentuate Integrated Services delivers high-value engineering and consulting across Nigeria’s construction, procurement, energy, marine, and oil & gas sectors. Our comprehensive solutions combine skilled manpower, advanced technology, and a culture of excellence to drive client success in every project.
        </p>
        
        {/* Service cards: alternate left/right alignment */}
        <div>
          {services.map((service, idx) => (
            <div
              key={service.title}
              style={{
                display: "flex",
                flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                alignItems: "center",
                gap: "2.2rem",
                marginBottom: "2.3rem"
              }}
            >
              {/* Icon & Image Section */}
              <div style={{
                flex: "0 0 120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <div
                  style={{
                    background: "#eaf0fa",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "#003366",
                    marginBottom: "10px"
                  }}
                >
                  {service.icon}
                </div>
                {/* Only render img if it exists */}
                {service.image &&
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "90px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginTop: "10px"
                    }}
                  />
                }
              </div>
              {/* Content Section */}
              <div className="card" style={{
                background: "#fff",
                borderRadius: "15px",
                boxShadow: "0 2px 12px rgba(0,51,102,0.09)",
                padding: "1.5rem 1.2rem",
                flex: "1 1 0%"
              }}>
                <h2 style={{
                  color: "#003366",
                  fontWeight: "bold",
                  fontSize: "1.13rem",
                  marginBottom: "0.7rem"
                }}>{service.title}</h2>
                <p style={{
                  color: "#444",
                  fontSize: "0.99rem",
                  margin: 0
                }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered call-to-action */}
        <div style={{
          background: "#ffcc33",
          color: "#003366",
          borderRadius: "18px",
          padding: "1.6rem 1rem",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.17rem",
          margin: "2.5rem auto 0 auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          maxWidth: "700px"
        }}>
          We are dedicated to prompt, professional service and custom solutions for every challenge. Explore Accentuate’s proven expertise—your project, delivered safely, on time, and to the highest quality standards.
        </div>
      </div>
    </section>
  );
}
