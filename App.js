import React from "react";
import ReactDOM from "react-dom/client";

const data = {
  dataList: [
    {
      info: {
        id: "643832",
        name: "WeFit - Protein Bowls, Salads & Sandwiches",
        cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      },
    },
    {
      info: {
        id: "533773",
        name: "Third Wave Coffee",
        cuisines: ["Beverages", "Bakery", "Continental"],
      },
    },
    {
      info: {
        id: "681612",
        name: "LeanCrust Pizza- ThinCrust Experts",
        cuisines: ["Pizzas", "Italian", "Desserts"],
      },
    },
    {
      info: {
        id: "1201253",
        name: "1881 Dum House: Lucknow's Legacy",
        cuisines: ["North Indian", "Biryani", "Awadhi"],
      },
    },
    {
      info: {
        id: "426730",
        name: "Theobroma",
        cuisines: ["Desserts", "Bakery", "Beverages"],
      },
    },
  ],
};

const HeaderComponent = () => {
  return (
    <header>
      <h1>Welcome to Food Kart</h1>
      <nav>
        <a href="#home" className="nav-element">
          Home
        </a>
        <a href="#menu" className="nav-element">
          Menu
        </a>
        <a href="#contact" className="nav-element">
          Contact
        </a>
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
};

const BodyComponent = () => {
  return (
    <div>
      <h2>Our Restaurants</h2>
      <div className="restaurant-list" style={{ backgroundColor: "#d2d5c8" }}>
        {data.dataList.map((restaurant) => (
          <RestaurantComponent
            key={restaurant.info.id}
            name={restaurant.info.name}
            description={restaurant.info.cuisines.join(", ")}
          />
        ))}
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
