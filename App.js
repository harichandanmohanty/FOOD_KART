import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <header>
      <h1>Welcome to Food Kart</h1>
      <nav>
        <a href="#home" className="nav-element">Home</a>
        <a href="#menu" className="nav-element">Menu</a>
        <a href="#contact" className="nav-element">Contact</a>  
      </nav>
    </header>
  );
};

const RestaurantComponent = (props) => {
  return (
    <div className="restaurant-card">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}

const BodyComponent = () => {
  return (
    <div>
        <h2>Our Restaurants</h2>
        <div className="restaurant-list">
          <RestaurantComponent name="Pizza Palace" description="Best pizza in town with fresh ingredients." />
          <RestaurantComponent name="Sushi World" description="Authentic sushi made by expert chefs." />
          <RestaurantComponent name="Burger Barn" description="Juicy burgers with a variety of toppings." />
        </div>
    </div>
  );
};

const FooterComponent = () => {
  return (
  <footer>
    <p>&copy; 2024 Food Kart. All rights reserved.</p>
    <p>Contact us: info@foodkart.com</p>
    <p>Phone: (123) 456-7890</p>
    </footer>
);
};

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
