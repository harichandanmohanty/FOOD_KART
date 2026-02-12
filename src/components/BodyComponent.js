import RestaurantComponent from "./RestaurantComponent";
//import data from "../../mockData";
import { useEffect } from "react";
import { useState } from "react";

const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants",
    )
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

  return (restaurants.length == 0 || !restaurants) ? (<div>Loading...</div>):(
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
          <RestaurantComponent
            key={restaurant.info.id}
            name={restaurant.info.name}
            description={restaurant.info.cuisines.join(", ")}
            avgRating={restaurant.info.avgRating}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
