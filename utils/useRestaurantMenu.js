import { useEffect, useState } from "react";
import constants from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchMenu().then((menuList) => setRestaurantMenu(menuList));
  }, []);

  async function fetchMenu() {
    let listOfItemCategory = [];
    await fetch(constants.restaurantMenu + restaurantId)
      .then((response) => response.json())
      .then((result) => {
        result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards?.forEach(
          (element) => {
            if (Object.keys(element).length !== 0 && element.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                listOfItemCategory.push(element.card.card);
            }
          },
        );
      })
      .catch((error) =>
        console.error("Error fetching restaurant menu:", error),
      );
    console.log(listOfItemCategory);
    return listOfItemCategory;
  }

  return restaurantMenu;
};

export { useRestaurantMenu };