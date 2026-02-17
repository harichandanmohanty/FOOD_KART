import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
import MenuCategoryCard from "./MenuCategoryCard";
import { useState } from "react";

const RestaurantMenu = () => {
  const params = useParams();
  const listOfItemCategory = useRestaurantMenu(params.restaurantId);

  const [selectedIndex, setSelectedIndex] = useState();

  function onClickCategory(index) {
    if (selectedIndex === index) {
      setSelectedIndex(undefined);
    } else {
      setSelectedIndex(index);
    }
  }

  return (
    <div className="restaurant-menu">
      <h2 className="res-menu-header">Menu</h2>
      {!listOfItemCategory.length ? (
        <p>Loading</p>
      ) : (
        <div>
          {listOfItemCategory.map((category, index) => {
            return <MenuCategoryCard category={category} isCategorySelected={selectedIndex === index} onClickCategory={() => onClickCategory(index)} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
