export default function Team() {
  // Placeholder for team members. Add img URL any time!
  const team = [
    { name: "Ibrahim Salahudeen", role: "Partner, Operations", img: null },
    { name: "Muaz Obadaki", role: "Partner, Strategy", img: null },
    { name: "Suleiman Obadaki", role: "Principal Partner", img: null },
    { name: "Ibrahim Yusuf", role: "CFO", img: null },
    { name: "Rukayya Salihu", role: "Legal Adviser", img: null },
    { name: "Aguonye George", role: "Architect", img: null }
  ];

  return (
    <section className="themed-section" style={{ minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 className="section-intro-title"
          style={{ color: "#6C36A9", fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
          Our Team
        </h1>
        <p className="section-intro-desc"
          style={{ fontSize: "1.1rem", marginTop: "1rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          Our management team consists of highly skilled professionals committed to quality,
          safety, and innovation across all our projects.
        </p>

        <div style={{ marginTop: "3rem" }}>
          <h2 style={{
            color: "#19C37D",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            Management Team
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "2rem",
            justifyContent: "center"
          }}>
            {team.map(member => (
              <div key={member.name}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  minHeight: "225px",
                  color: "#101622",
                  boxShadow: "0 2px 13px rgba(108,54,169,.11)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1.7rem .9rem"
                }}>
                {member.img
                  ? <img src={member.img} alt={member.name}
                      style={{
                        width: "85px", height: "85px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginBottom: "1.05rem"
                      }}/>
                  : <div style={{
                      width: "80px", height: "80px",
                      background: "#ede5fa",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6C36A9",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      marginBottom: "1.05rem"
                    }}>👤</div>
                }
                <div style={{
                  fontWeight: 700,
                  fontSize: "1.07rem",
                  textAlign: "center"
                }}>{member.name}</div>
                <div style={{
                  fontSize: ".98rem",
                  color: "#6C36A9",
                  textAlign: "center",
                  marginTop: ".38rem"
                }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
