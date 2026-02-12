import {Link} from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <h1>Welcome to Food Kart</h1>
      <nav>
        <Link to="/" className="nav-element">
          Home
        </Link>
        <Link to="/about" className="nav-element">
          About
        </Link>
        <Link to="/contact" className="nav-element">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;