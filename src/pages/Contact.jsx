export default function Contact() {
  const locations = [
    {
      title: "Port Harcourt (Head Office)",
      address: "6 Lolo Street, Ozuboko, Port Harcourt, Rivers State",
      phone: "+234 703 4008 985",
      email: "accentuate.integrated@gmail.com"
    },
    {
      title: "Lagos",
      address: "5 Kilo Street, Aguda Surulere, Lagos",
      phone: "+234 703 4008 985",
      email: "accentuate.integrated@gmail.com"
    },
    {
      title: "Abuja",
      address: "Flat 8, Sunday Adewusi Housing Estate, Dakwa, Abuja",
      phone: "+234 703 4008 985",
      email: "accentuate.integrated@gmail.com"
    }
  ];

  const highlights = [
    {
      title: "24/7 Support",
      desc: "Always available for urgent needs or project queries.",
      accent: "#19C37D"
    },
    {
      title: "National Reach",
      desc: "Strategic presence in major Nigerian cities and regions.",
      accent: "#6C36A9"
    },
    {
      title: "Professional Guidance",
      desc: "Help from trusted engineering and industry specialists.",
      accent: "#19C37D"
    },
    {
      title: "Fast Response",
      desc: "Quick turnarounds on quotes, questions, and mobilization.",
      accent: "#6C36A9"
    }
  ];

  return (
    <section className="themed-section" style={{
      minHeight: "100vh",
      background: "linear-gradient(110deg, #6C36A9 40%, #191f2b 100%)",
      padding: "0",
      fontFamily: "inherit"
    }}>
      <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "4rem 1rem 2rem 1rem" }}>
        <h1 className="section-intro-title"
          style={{
            color: "#fff",
            fontSize: "2.5rem",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: "1.2rem"
          }}>
          Contact Us
        </h1>
        <div className="section-intro-desc"
          style={{
            fontSize: "1.15rem",
            color: "#f4f3fa",
            textAlign: "center",
            maxWidth: "650px",
            margin: "0 auto 2rem auto"
          }}>
          Get in touch for project discussions, support, or to find out how Accentuate can deliver solutions for you—any time, anywhere.
        </div>

        {/* Office Locations grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.1rem",
          margin: "2.5rem 0"
        }}>
          {locations.map(loc => (
            <div key={loc.title}
              style={{
                background: "#fff",
                borderRadius: "17px",
                boxShadow: "0 2px 12px rgba(108,54,169,0.08)",
                padding: "1.45rem 1.3rem",
                color: "#101622"
              }}>
              <div style={{ fontWeight: 800, color: "#19C37D", fontSize: "1.08rem", marginBottom: ".7rem" }}>
                {loc.title}
              </div>
              <div style={{ marginBottom: ".5rem" }}>
                <span style={{ fontWeight: 700 }}>Address:</span> {loc.address}
              </div>
              <div style={{ marginBottom: ".5rem" }}>
                <span style={{ fontWeight: 700 }}>Phone:</span> {loc.phone}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Email:</span>{" "}
                <a href={`mailto:${loc.email}`} style={{ color: "#6C36A9", textDecoration: "underline" }}>
                  {loc.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us / Highlights */}
        <div style={{
          display: "flex",
          gap: "1.6rem",
          flexWrap: "wrap",
          margin: "3.1rem 0 1.7rem 0",
          justifyContent: "center"
        }}>
          {highlights.map(h => (
            <div key={h.title}
              style={{
                background: h.accent,
                color: h.accent === "#19C37D" ? "#191f2b" : "#fff",
                borderRadius: "14px",
                fontWeight: 700,
                padding: "1rem 1.08rem",
                minWidth: "205px",
                boxShadow: "0 2px 8px rgba(60,44,124,0.06)",
                textAlign: "center"
              }}>
              <div style={{ fontSize: "1.04rem", marginBottom: ".3rem" }}>{h.title}</div>
              <div style={{ fontWeight: 400, fontSize: ".98rem" }}>{h.desc}</div>
            </div>
          ))}
        </div>

        {/* Contact Quick Info */}
        <div style={{
          textAlign: "center",
          margin: "2.3rem auto 0 auto",
          fontWeight: 700,
          color: "#19C37D",
          fontSize: "1.14rem"
        }}>
          Available 24/7 for critical needs and project emergencies.<br />
          We reply to all inquiries within 1 business day.
        </div>
      </div>
    </section>
  );
}
