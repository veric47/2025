export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--brand-purple)", // purple!
        color: "#fff",
        padding: "2.7rem 1rem 1.2rem 1rem",
        marginTop: "2rem",
        fontFamily: "inherit",
        borderTopLeftRadius: "28px",
        borderTopRightRadius: "28px",
        boxShadow: "0 -2px 18px rgba(108,54,169,0.09)"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2.4rem",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        {/* Company Name and Summary */}
        <div style={{ flex: "1 1 230px", minWidth: "220px" }}>
          <h2 style={{ fontWeight: 800, color: "#ffcc33", fontSize: "1.44rem", margin: 0, letterSpacing: ".04em" }}>
            Accentuate Integrated Services Limited
          </h2>
          <p style={{ margin: "0.7rem 0 0 0", color: "#f4ecfe", fontSize: "1.04rem", lineHeight: "1.7" }}>
            Registered in 2007 (RC 685091), Accentuate delivers solutions in Engineering, Construction, Procurement, Energy Consulting, Equipment Leasing, Pipeline Maintenance, Marine & Oil/Gas Support Services.
          </p>
        </div>
        {/* Quick Links */}
        <div style={{ flex: "1 1 150px", minWidth: "130px" }}>
          <h3 style={{ color: "#ffcc33", fontSize: "1.09rem", fontWeight: 800, marginBottom: "0.8rem" }}>
            Quick Links
          </h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            color: "#fff",
            lineHeight: "2",
            fontSize: "1.02rem"
          }}>
            <li><a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Home</a></li>
            <li><a href="/about" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>About</a></li>
            <li><a href="/services" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Services</a></li>
            <li><a href="/projects" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Projects</a></li>
            <li><a href="/team" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Team</a></li>
            <li><a href="/contact" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Contact</a></li>
          </ul>
        </div>
        {/* Contact Info with icons */}
        <div style={{ flex: "1 1 260px", minWidth: "220px" }}>
          <h3 style={{ color: "#ffcc33", fontSize: "1.09rem", fontWeight: 800, marginBottom: "0.6rem" }}>Contact</h3>
          <p style={{ margin: 0, fontSize: "1.04rem", lineHeight: "1.7" }}>
            <span style={{ fontWeight: 700 }}>&#x1F4CD; Port Harcourt HQ:</span><br />
            6 Lolo Street, Ozuboko, Port Harcourt<br />
            <span style={{ fontWeight: 700 }}>&#x1F4CD; Lagos:</span><br />
            5, Kilo Street, Aguda Surulere, Lagos<br />
            <span style={{ fontWeight: 700 }}>&#x1F4CD; Abuja:</span><br />
            Flat 8, Sunday Adewusi Housing Estate, Dakwa, Abuja<br />
            <span style={{ fontWeight: 700 }}>&#x260E; Phone:</span> 0703 4008 985<br />
            <span style={{ fontWeight: 700 }}>&#x2709; Email:</span> <a href="mailto:accentuate.integrated@gmail.com" style={{ color: "#ffcc33", textDecoration: "none" }}>accentuate.integrated@gmail.com</a>
          </p>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #a883c9",
          marginTop: "1.8rem",
          paddingTop: "0.9rem",
          textAlign: "center",
          color: "#f4ecfe",
          fontSize: "0.99rem"
        }}
      >
        © {new Date().getFullYear()} Accentuate Integrated Services Limited. All rights reserved.
      </div>
    </footer>
  );
}
