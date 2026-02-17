import { useEffect, useState } from "react";
import constants from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchMenu().then((menuList) => setRestaurantMenu(menuList));
  }, []);

  async function fetchMenu() {
    let menu = [];
    await fetch(constants.restaurantMenu + restaurantId)
      .then((response) => response.json())
      .then((result) => {
        result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards?.forEach(
          (element) => {
            if (Object.keys(element).length !== 0) {
              element.card.card.itemCards.forEach((card) => {
                menu.push({
                  id: card?.card?.info?.id,
                  name: card?.card?.info?.name,
                });
              });
            }
          },
        );
      })
      .catch((error) =>
        console.error("Error fetching restaurant menu:", error),
      );
    console.log(menu);
    return menu;
  }

  return restaurantMenu;
};

export { useRestaurantMenu };