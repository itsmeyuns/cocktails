import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <h1 className="logo">Cocktails</h1>
        <div className="nav-links">
          <Link className="nav-link" to="/cocktails">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
