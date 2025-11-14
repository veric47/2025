export default function Projects() {
  // Placeholder for future project images (add src, title, desc when ready)
  const completedProjects = [
    {
      title: "Solar boreholes - Federal University Wukari",
      img: null // "https://link-to-photo.jpg"
    },
    {
      title: "Solar street lights - Yobe State",
      img: null // "https://..."
    },
    {
      title: "University medical center renovation",
      img: null
    },
    {
      title: "Civil construction - Port Harcourt, Asaba",
      img: null
    },
    {
      title: "Office renovations - Bonny Channel",
      img: null
    },
    {
      title: "Heavy equipment leasing - Port Harcourt",
      img: null
    },
    {
      title: "Billboard construction, apartment services",
      img: null
    },
  ];

  return (
    <section className="themed-section" style={{
      minHeight: "100vh",
      padding: "4rem 1rem",
      background: "linear-gradient(120deg, #6C36A9 40%, #191f2b 100%)",
      color: "#fff",
      fontFamily: "inherit"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 
        className="section-intro-title"
        style={{
          color: "#6C36A9",
          fontSize: "2.25rem",
          fontWeight: 800,
          marginBottom: "1.1rem",
          textAlign: "left"
        }}>
          Our Projects
        </h1>
        <p 
        className="section-intro-desc"
        style={{
          fontSize: "1.16rem",
          marginBottom: "2.8rem",
          maxWidth: "720px",
          textAlign: "left"
        }}>
          We have executed a range of projects including facility renovations, borehole installations,
          equipment supplies, and construction works across various sectors.
        </p>

        <div style={{
          background: "#23194C",
          borderRadius: "23px",
          padding: "2rem 1.1rem 2.2rem 1.1rem",
          marginBottom: "3rem",
          boxShadow: "0 2px 16px rgba(108,54,169,.13)"
        }}>
          <h2 style={{ color: "#19C37D", marginBottom: "1.6rem", fontWeight: 800 }}>
            Completed Projects
          </h2>
          <ul style={{
            listStyle: "none",
            padding: 0,
            color: "#fff",
            fontSize: "1.14rem",
            lineHeight: 2,
            margin: 0
          }}>
            {completedProjects.map((p, idx) =>
              <li key={idx} style={{
                margin: "0.32rem 0",
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}>
                <span style={{
                  fontSize: "1.25em",
                  color: "#19C37D"
                }}>✔️</span>
                {p.title}
              </li>
            )}
          </ul>
        </div>

        {/* Project Photo Grid: Show when you have images */}
        <div style={{
          margin: "0 auto 2.6rem auto",
          maxWidth: "970px"
        }}>
          <h2 style={{ color: "#19C37D", textAlign: "left", marginBottom: "1.4rem", fontWeight: 800 }}>
            Project Showcase
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.9rem"
          }}>
            {completedProjects.map((proj, idx) => (
              <div key={proj.title + idx}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  minHeight: "195px",
                  color: "#101622",
                  boxShadow: "0 2px 12px rgba(108,54,169,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.2rem 1rem"
                }}>
                {proj.img
                  ? <img src={proj.img} alt={proj.title} style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "0.7rem"
                    }}/>
                  : <div style={{
                      width: "100%",
                      height: "120px",
                      background: "#f1f2f6",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6C36A9",
                      marginBottom: "0.7rem",
                      fontWeight: 700,
                      fontSize: "1.5rem"
                    }}>
                      No photo yet
                    </div>
                }
                <div style={{
                  fontWeight: 700,
                  fontSize: "1.01rem",
                  textAlign: "center"
                }}>{proj.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div style={{
          background: "#19C37D",
          borderRadius: "17px",
          color: "#191f2b",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "1.11rem",
          padding: "1.35rem 1.2rem",
          margin: "2.3rem auto 0 auto",
          maxWidth: "650px"
        }}>
          Have a project in mind? We’d love to help you succeed—reach out today!
        </div>
      </div>
    </section>
  );
}
