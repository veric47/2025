export default function Services() {
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
      image: "https://www.elease.com/wp-content/uploads/2020/05/heavy-equipment-leasing.jpg.webp"
    },
    {
      title: "Marine & Oil/Gas Support",
      desc: "Support services from pipeline maintenance to vessel leasing and logistics, delivered by specialized teams and proven methods for safe, efficient operations in marine and energy sectors.",
      icon: "⚓",
      image: "https://loyzmarine.com/wp-content/uploads/2024/07/Rectangle-34624369-1.png"
    }
  ];

  return (
    <section className="themed-section" style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #6C36A9 40%, #191f2b 100%)",
      padding: "0",
      fontFamily: "inherit"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.7rem 1rem 3rem 1rem" }}>
        {/* Page Intro */}
        <h1 className="services-intro-title"
          style={{
            textAlign: "left",
            fontSize: "2.38rem",
            fontWeight: 800,
            marginBottom: "1.35rem"
          }}>
          Our Services
        </h1>
        <p className="services-intro-desc"
          style={{
            textAlign: "left",
            fontSize: "1.15rem",
            marginBottom: "2.65rem",
            fontWeight: 500,
            maxWidth: "600px"
          }}>
          Accentuate delivers high-value engineering, procurement, energy, equipment leasing, and marine solutions. Our advanced technology, skilled manpower, and commitment to excellence drive project success for every client.
        </p>
        
        {/* Services Blocks */}
        <div>
          {services.map((service, idx) => (
            <div
              key={service.title}
              style={{
                display: "flex",
                flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                alignItems: "center",
                gap: "2.2rem",
                marginBottom: "3.28rem",
                background: "#241d39",
                borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(108,54,169,0.09)",
                padding: "2.1rem 1.2rem"
              }}
            >
              {/* Icon & Image Section */}
              <div style={{
                flex: "0 0 155px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <div
                  style={{
                    background: "#ede5fa",
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "#6C36A9",
                    marginBottom: "9px"
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
                      width: "112px",
                      height: "72px",
                      objectFit: "cover",
                      borderRadius: "11px",
                      marginTop: "12px",
                      boxShadow: "0 2px 10px rgba(25,195,125,0.10)"
                    }}
                  />
                }
              </div>
              {/* Content Section */}
              <div className="card" style={{
                background: "#fff",
                borderRadius: "13px",
                boxShadow: "0 2px 12px rgba(108,54,169,0.11)",
                padding: "1rem 1.2rem",
                flex: "1 1 0%"
              }}>
                <h2 style={{
                  color: "#6C36A9",
                  fontWeight: 700,
                  fontSize: "1.19rem",
                  marginBottom: "0.9rem"
                }}>{service.title}</h2>
                <p style={{
                  color: "#444",
                  fontSize: "1.04rem",
                  margin: 0
                }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered call-to-action */}
        <div style={{
          background: "#19C37D",
          color: "#191f2b",
          borderRadius: "18px",
          padding: "2rem 1.18rem",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.17rem",
          margin: "2.5rem auto 0 auto",
          boxShadow: "0 2px 8px rgba(25,195,125,0.08)",
          maxWidth: "700px"
        }}>
          We are dedicated to prompt, professional service and custom solutions for every challenge. Explore Accentuate’s proven expertise—your project, delivered safely, on time, and to the highest quality standards.
        </div>
      </div>
    </section>
  );
}
