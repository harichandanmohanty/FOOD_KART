import RestaurantComponent from "./RestaurantComponent";
import data from "../../mockData";

const BodyComponent = () => {
  return (
    <div>
      <h2>Our Restaurants</h2>
      <div className="restaurant-list" style={{ backgroundColor: "#d2d5c8" }}>
        {data.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map((restaurant) => (
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

export default BodyComponent;