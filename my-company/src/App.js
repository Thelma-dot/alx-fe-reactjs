import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact"; // Import Contact Component

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> {/* Add Contact Link */}
        </ul>
      </nav>

      <Routes>
        <Route path="/contact" element={<Contact />} /> {/* Add Contact Route */}
      </Routes>
    </Router>
  );
}

export default App;
