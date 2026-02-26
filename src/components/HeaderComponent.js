import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

  const cartItems = useSelector((store) => store.cart.items);

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
        <Link to="/cart" className="nav-element">
          Cart ({cartItems.length} items)
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;