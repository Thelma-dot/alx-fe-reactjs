import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "navy",
      padding: "10px",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
      <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
