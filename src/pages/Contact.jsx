export default function Contact() {
  return (
    <section className="themed-section" style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 style={{ color: "#003366", fontSize: "2rem", fontWeight: "bold" }}>
        Contact Us
      </h1>
      <div style={{ marginTop: "2rem" }}>
        <p>
          📍 <strong>6 Lolo Street, Ozuboko, Port Harcourt</strong>
        </p>
        <p>
          📍 <strong>5 Kilo Street, Aguda Surulere, Lagos</strong>
        </p>
        <p>
          📍 <strong>Flat 8, Sunday Adewusi Housing Estate, Dakwa, Abuja</strong>
        </p>
        <p style={{ marginTop: "1rem" }}>
          📧 <a href="mailto:accentuate.integrated@gmail.com" style={{ textDecoration: "underline" }}>
            accentuate.integrated@gmail.com
          </a>
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          📞 <strong>+234 703 4008 985</strong>
        </p>
      </div>
    </section>
  );
}
