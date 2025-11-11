export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#003366",
      color: "#fff",
      padding: "2.5rem 1rem 1.2rem 1rem",
      marginTop: "2rem",
      fontFamily: "inherit",
      borderTopLeftRadius: "28px",
      borderTopRightRadius: "28px"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "2.8rem",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }}>
        {/* Company Summary */}
        <div style={{ flex: "1 1 225px", minWidth: "220px" }}>
          <h2 style={{ fontWeight: 700, color: "#ffcc33", fontSize: "1.34rem", margin: 0 }}>
            Accentuate Integrated Services Limited
          </h2>
          <p style={{ margin: "0.7rem 0 0 0", color: "#e0ecff", fontSize: "1.03rem" }}>
            Registered in 2007 (RC 685091), Accentuate delivers solutions in Engineering, Construction, Procurement, Energy Consulting, Equipment Leasing, Pipeline Maintenance, Marine & Oil/Gas Support Services.
          </p>
        </div>
        {/* Links */}
        <div style={{ flex: "1 1 150px", minWidth: "130px" }}>
          <h3 style={{ color: "#ffcc33", fontSize: "1.08rem", fontWeight: 700, marginBottom: "0.8rem" }}>
            Quick Links
          </h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            color: "#fff",
            lineHeight: 2
          }}>
            <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
            <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
            <li><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</a></li>
            <li><a href="/projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a></li>
            <li><a href="/team" style={{ color: "#fff", textDecoration: "none" }}>Team</a></li>
            <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div style={{ flex: "1 1 260px", minWidth: "220px" }}>
          <h3 style={{ color: "#ffcc33", fontSize: "1.09rem", fontWeight: 700, marginBottom: "0.6rem" }}>Contact</h3>
          <p style={{ margin: 0 }}>
            <span style={{ fontWeight: 700 }}>Port Harcourt HQ:</span><br />
            6 Lolo Street, Ozuboko, Port Harcourt, Rivers State<br />
            <span style={{ fontWeight: 700 }}>Lagos:</span><br />
            5, Kilo Street, Aguda Surulere, Lagos State<br />
            <span style={{ fontWeight: 700 }}>Abuja:</span><br />
            Flat 8, Sunday Adewusi Housing Estate, Dakwa, Abuja<br />
            <span style={{ fontWeight: 700 }}>Phone:</span> 0703 4008 985<br />
            <span style={{ fontWeight: 700 }}>Email:</span> <a href="mailto:accentuate.integrated@gmail.com" style={{ color: "#ffcc33", textDecoration: "none" }}>accentuate.integrated@gmail.com</a>
          </p>
        </div>
      </div>
      <div style={{
        borderTop: "1px solid #224d7b",
        marginTop: "1.8rem",
        paddingTop: "0.9rem",
        textAlign: "center",
        color: "#e0ecff",
        fontSize: "0.98rem"
      }}>
        © {new Date().getFullYear()} Accentuate Integrated Services Limited. All rights reserved.
      </div>
    </footer>
  );
}
