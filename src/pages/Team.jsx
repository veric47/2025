export default function Team() {
  return (
    <section className="themed-section" style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 className="section-intro-title"
        style={{
          fontSize: "2rem",
          fontWeight: "bold"
        }}>
        Our Team
      </h1>
      <p className="section-intro-desc"
        style={{
          fontSize: "1.1rem",
          marginTop: "1rem",
          maxWidth: "700px",
          margin: "0 auto"
        }}>
        Our management team consists of highly skilled professionals committed to quality,
        safety, and innovation across all our projects.
      </p>
      <div style={{ marginTop: "2.5rem" }}>
        <h2>Management Team</h2>
        <ul style={{ display: "inline-block", textAlign: "left", fontSize: "1.08rem", marginTop: "0.8rem" }}>
          <li>Ibrahim Salahudeen – Partner, Operations</li>
          <li>Muaz Obadaki – Partner, Strategy</li>
          <li>Suleiman Obadaki – Principal Partner</li>
          <li>Ibrahim Yusuf – CFO</li>
          <li>Rukayya Salihu – Legal Adviser</li>
          <li>Aguonye George – Architect</li>
        </ul>
      </div>
    </section>
  );
}
