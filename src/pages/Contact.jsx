export default function Contact() {
  return (
    <section className="themed-section" style={{
      minHeight: "100vh",
      background: "linear-gradient(110deg, #6C36A9 40%, #191f2b 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "inherit"
    }}>
      <div style={{
        background: "#fff",
        maxWidth: "480px",
        width: "100%",
        borderRadius: "18px",
        boxShadow: "0 2px 16px rgba(108,54,169,0.10)",
        padding: "2.7rem 2rem 2.2rem 2rem",
        margin: "3.5rem 1rem"
      }}>
        <h1 className="section-intro-title"
          style={{
            color: "#6C36A9",
            fontSize: "2rem",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: "1.3rem"
          }}>
          Contact Us
        </h1>
        <div
          className="section-intro-desc"
          style={{
            color: "#222",
            textAlign: "center",
            fontSize: "1.13rem",
            margin: "0 0 2rem 0"
          }}>
          Reach out to our team for any inquiries or partnership discussions.<br />
          We’d love to hear from you.
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.45rem",
          fontSize: "1.08rem"
        }}>
          <div>
            <strong style={{ color: "#19C37D" }}>Head Office</strong><br />
            <span style={{color:"#000000ff"}}></span>
            6 Lolo Street, Ozuboko, Port Harcourt, Rivers State, Nigeria
          </div>
          <div>
            <strong style={{ color: "#19C37D" }}>Phone</strong><br />
            <a href="tel:+2347034008985" style={{ color: "#6C36A9", textDecoration: "none" }}>+234 703 4008 985</a>
          </div>
          <div>
            <strong style={{ color: "#19C37D" }}>Email</strong><br />
            <a href="mailto:accentuate.integrated@gmail.com" style={{ color: "#6C36A9", textDecoration: "none" }}>
              acccentuate.integrated@gmail.com
            </a>
          </div>
          <div>
            <strong style={{ color: "#19C37D" }}>Office Hours</strong><br />
            <span style={{color:"#000000ff"}}>
            Mon - Fri : 09:00 - 18:00
            </span>
          </div>
        </div>
        <div style={{
          fontSize: ".98rem",
          color: "#9090AD",
          textAlign: "center",
          marginTop: "2.9rem"
        }}>
          Accentuate Integrated Services Limited © {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}