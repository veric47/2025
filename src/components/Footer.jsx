export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, var(--brand-purple) 85%, #191f2b 100%)",
        color: "#fff",
        padding: "3rem 1rem 1.6rem 1rem",
        fontFamily: "inherit",
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        marginTop: "2rem"
      }}
    >
      <div style={{
        maxWidth: "1300px",
        margin: "0 auto",
        display: "flex",
        gap: "3rem",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }}>
        {/* Branding & Standards */}
        <div style={{ flex: "1 1 240px", minWidth: "220px", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Logo: replace with your asset path */}
          <img src="/logo.png" alt="Accentuate Logo" style={{ height: "44px", marginBottom: "1rem" }} />
          <div style={{ marginBottom: "1rem", fontSize: "1.07rem", lineHeight: 1.7 }}>
            <div>
              <span style={{ color: "#19C37D", marginRight: "9px" }}>●</span> ISO 9001:2015
            </div>
            <div>
              <span style={{ color: "#19C37D", marginRight: "9px" }}>●</span> ISO 45001:2018
            </div>
            <div>
              <span style={{ color: "#19C37D", fontWeight: 700, marginRight: "9px" }}>●</span>
              24/7 Operations
            </div>
          </div>
          <div style={{margin: "0.6rem 0", display: "flex", gap: "1.2rem", fontSize: "1.18rem", color: "#fff"}}>
            <a href="https://facebook.com" style={{color: "#fff"}} aria-label="Facebook">🌐</a>
            <a href="https://twitter.com" style={{color: "#fff"}} aria-label="Twitter">🐦</a>
            <a href="https://instagram.com" style={{color: "#fff"}} aria-label="Instagram">📸</a>
            <a href="https://linkedin.com" style={{color: "#fff"}} aria-label="LinkedIn">💼</a>
          </div>
        </div>

        {/* Company Links */}
        <div style={{ flex: "1 1 180px", minWidth: "160px" }}>
          <h3 style={{ color: "#19C37D", fontWeight: 700, fontSize: "1.09rem", marginBottom: "0.65rem" }}>Company</h3>
          <ul style={{
            listStyle: "none", margin: 0, padding: 0, lineHeight: 2,
            fontSize: "1.058rem", color: "#fff"
          }}>
            <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
            <li><a href="/team" style={{ color: "#fff", textDecoration: "none" }}>Leadership</a></li>
            <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>Vision & Mission</a></li>
            <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>Certifications</a></li>
            <li><a href="/news" style={{ color: "#fff", textDecoration: "none" }}>News & Media</a></li>
          </ul>
        </div>

        {/* Services Links - now 2nd column */}
        <div style={{ flex: "1 1 180px", minWidth: "160px" }}>
          <h3 style={{ color: "#19C37D", fontWeight: 700, fontSize: "1.09rem", marginBottom: "0.65rem" }}>Services</h3>
          <ul style={{
            listStyle: "none", margin: 0, padding: 0, lineHeight: 2,
            fontSize: "1.058rem", color: "#fff"
          }}>
            <li><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Construction</a></li>
            <li><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Marine Support</a></li>
            <li><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Equipment Leasing</a></li>
            <li><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Energy Consulting</a></li>
            <li><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Procurement</a></li>
          </ul>
        </div>

        {/* Resources Links - now 3rd column */}
        <div style={{ flex: "1 1 180px", minWidth: "160px" }}>
          <h3 style={{ color: "#19C37D", fontWeight: 700, fontSize: "1.09rem", marginBottom: "0.7rem" }}>Resources</h3>
          <ul style={{
            listStyle: "none", margin: 0, padding: 0, lineHeight: 2,
            fontSize: "1.058rem", color: "#fff"
          }}>
            <li><a href="/projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a></li>
            <li><a href="/careers" style={{ color: "#fff", textDecoration: "none" }}>Careers</a></li>
            <li><a href="/downloads" style={{ color: "#fff", textDecoration: "none" }}>Downloads</a></li>
            <li><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Case Studies</a></li>
          </ul>
        </div>

        {/* Branch offices */}
        <div style={{ flex: "1 1 300px", minWidth: "220px", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <h3 style={{ color: "#19C37D", fontWeight: 700, fontSize: "1.09rem", marginBottom: "0.6rem" }}>
            Our Branches
          </h3>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: "14px",
            padding: "0.75rem 1rem",
            marginBottom: "0.9rem",
            color: "#fff"
          }}>
            <strong style={{ color: "#19C37D" }}>Head Office - PH</strong><br />
            6 Lolo Street, Ozuboko, Port Harcourt, Rivers State<br />
            <span style={{ color: "#19C37D" }}>✆</span> 0703 4008 985<br />
            <span style={{ color: "#19C37D" }}>✉</span> accc@email.com
          </div>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: "14px",
            padding: "0.75rem 1rem",
            color: "#fff"
          }}>
            <strong style={{ color: "#19C37D" }}>Lagos</strong><br />
            5, Kilo Street, Aguda Surulere, Lagos State<br />
            <span style={{ color: "#19C37D" }}>✆</span> 0703 4008 985<br />
            <span style={{ color: "#19C37D" }}>✉</span> accc@email.com
          </div>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: "14px",
            padding: "0.75rem 1rem",
            color: "#fff"
          }}>
            <strong style={{ color: "#19C37D" }}>Abuja</strong><br />
            Flat 8, Sunday Adewusi Housing Estate, Dakwa, Abuja<br />
            <span style={{ color: "#19C37D" }}>✆</span> 0703 4008 985<br />
            <span style={{ color: "#19C37D" }}>✉</span> accc@email.com
          </div>
        </div>
      </div>
      <div style={{
        borderTop: "1px solid #37ef99",
        marginTop: "2.3rem",
        paddingTop: "0.9rem",
        textAlign: "center",
        color: "#20cb81",
        fontSize: "1.01rem"
      }}>
        © {new Date().getFullYear()} Accentuate Integrated Services Limited. All rights reserved. &nbsp;|&nbsp; 
        <a href="/privacy" style={{ color: "#19C37D" }}>Privacy Policy</a> &nbsp;|&nbsp; 
        <a href="/terms" style={{ color: "#19C37D" }}>Terms & Conditions</a> &nbsp;|&nbsp;
        <a href="/sitemap" style={{ color: "#19C37D" }}>Sitemap</a>
      </div>
    </footer>
  );
}
