export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#e58ce9",
      color: "white",
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem"
    }}>
      <p>© {new Date().getFullYear()} Accentuate Integrated Services Limited</p>
      <p>6 Lolo Street, Ozuboko, Port Harcourt | accentuate.integrated@gmail.com</p>
    </footer>
  );
}
