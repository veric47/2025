export default function Contact() {
  return (
    <section 
      className="themed-section"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(110deg, #6C36A9 55%, #191f2b 100%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0",
        fontFamily: "inherit"
      }}>
      <div style={{
        background: "#fff",
        maxWidth: "420px",
        width: "100%",
        borderRadius: "12px",
        boxShadow: "0 4px 22px 0 rgba(60,44,124,0.13)",
        padding: "2.25rem 2.4rem 1.6rem 2.4rem",
        margin: "5.5rem 2rem 2.7rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        <h2 style={{
          color: "#6C36A9",
          fontWeight: 900,
          fontSize: "2rem",
          margin: "0 0 2.4rem 0",
          letterSpacing: ".01em"
        }}>
          Contact us
        </h2>
        <div style={{
          color: "#222",
          fontSize: "1.15rem",
          fontWeight: 500,
          marginBottom: "1.2rem"
        }}>
          Contact us today to explore our services or discuss your requirements.
        </div>
        <div style={{marginBottom: "1.45rem"}}>
          <div style={{fontWeight: 600, color: "#19C37D", marginBottom: "4px"}}>Head Office</div>
          <div style={{lineHeight: 1.4}}>
            6 Lolo Street, Ozuboko, Port Harcourt, Rivers State. Nigeria
          </div>
        </div>
        <div style={{marginBottom: "1.35rem"}}>
          <div style={{fontWeight: 600, color: "#19C37D", marginBottom: "4px"}}>Phone</div>
          <div>
            <a href="tel:+2347034008985" style={{ color: "#6C36A9", textDecoration: "none", fontWeight: 700 }}>+234 703 4008 985</a>
          </div>
        </div>
        <div style={{marginBottom: "1.35rem"}}>
          <div style={{fontWeight: 600, color: "#19C37D", marginBottom: "4px"}}>Email</div>
          <div>
            <a href="mailto:accentuate.integrated@gmail.com" style={{ color: "#6C36A9", textDecoration: "none", fontWeight: 700 }}>
              acccentuate.integrated@gmail.com
            </a>
          </div>
        </div>
        <div style={{marginBottom: "2.1rem"}}>
          <div style={{fontWeight: 600, color: "#19C37D", marginBottom: "4px"}}>Office Hours</div>
          <div>Mon - Fri: 09:00 - 18:00</div>
        </div>
        <div style={{
          fontSize: ".97rem",
          color: "#c3c0e3",
          textAlign: "left",
          marginTop: "2.1rem",
          width: "100%"
        }}>
          Accentuate Integrated Services Limited © {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
