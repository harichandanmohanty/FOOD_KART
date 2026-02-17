import RestaurantComponent from "./RestaurantComponent";
import { useEffect } from "react";
import { useState } from "react";
import constants from "../../utils/constants";
import { Link } from "react-router-dom";
import restaurantWithPromotedLevel from "./RestaurantPromotedComponent";

const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantPromotedComponent =
    restaurantWithPromotedLevel(RestaurantComponent);

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

  function onClickFilterButton() {
    let filteredData = restaurants.filter((res) => res.info.avgRating >= 4.5);
    if (filteredRestaurant.length !== restaurants.length) {
      filteredData = [...restaurants];
    } else {
      filteredData = restaurants.filter((res) => res.info.avgRating >= 4.5);
    }
    console.log(filteredData);
    setFilteredRestaurant(filteredData);
  }

  return restaurants.length == 0 || !restaurants ? (
    <div id="loader">Loading...</div>
  ) : (
    <div className="res-body">
      <h2>Our Restaurants</h2>
      <button className="filter-button" onClick={onClickFilterButton}>
        {filteredRestaurant.length !== restaurants.length
          ? "All"
          : "Highly Rated > 4.5"}
      </button>
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/menu/" + restaurant.info.id}
            key={restaurant.info.id}
            className="restaurant-link"
          >
            {restaurant.info.veg ? (
              <RestaurantPromotedComponent
                name={restaurant.info.name}
                description={restaurant.info.cuisines.join(", ")}
                avgRating={restaurant.info.avgRating}
                slaTime={restaurant.info.sla.slaString}
                costForTwo={restaurant.info.costForTwo}
                imageId={restaurant.info.cloudinaryImageId}
              />
            ) : (
              <RestaurantComponent
                name={restaurant.info.name}
                description={restaurant.info.cuisines.join(", ")}
                avgRating={restaurant.info.avgRating}
                slaTime={restaurant.info.sla.slaString}
                costForTwo={restaurant.info.costForTwo}
                imageId={restaurant.info.cloudinaryImageId}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
