import RestaurantComponent from "./RestaurantComponent";
import { useEffect } from "react";
import { useState } from "react";
import constants from "../../utils/constants";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(constants.restaurantsAPI)
      .then((response) => response.json())
      .then((result) => {
        console.log("Fetched Restaurant Data:", result);
        setRestaurants(
          result?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            .restaurants,
        );
        setFilteredRestaurant(
          result?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            .restaurants,
        );
      })
      .catch((error) => {
        console.error("Error fetching restaurant data:", error);
      });
  }

  return restaurants.length == 0 || !restaurants ? (
    <div id="loader">Loading...</div>
  ) : (
    <div>
      <h2>Our Restaurants</h2>
      <button
        onClick={() => {
          let filteredData = restaurants.filter(
            (res) => res.info.avgRating >= 4.5,
          );
          if (filteredRestaurant.length !== restaurants.length) {
            filteredData = [...restaurants];
          } else {
            filteredData = restaurants.filter(
              (res) => res.info.avgRating >= 4.5,
            );
          }
          console.log(filteredData);
          setFilteredRestaurant(filteredData);
        }}
      >
        {filteredRestaurant.length !== restaurants.length
          ? "All"
          : "Highly Rated > 4.5"}
      </button>
      <div className="restaurant-list" style={{ backgroundColor: "#d2d5c8" }}>
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/menu/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantComponent
              name={restaurant.info.name}
              description={restaurant.info.cuisines.join(", ")}
              avgRating={restaurant.info.avgRating}
              slaTime={restaurant.info.sla.slaString}
              costForTwo={restaurant.info.costForTwo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
