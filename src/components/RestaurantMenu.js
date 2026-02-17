import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
import MenuCategoryCard from "./MenuCategoryCard";

const RestaurantMenu = () => {
  const params = useParams();
  const listOfItemCategory = useRestaurantMenu(params.restaurantId);

  return (
    <div className="restaurant-menu">
      <h2 className="res-menu-header">Menu</h2>
      {!listOfItemCategory.length ? (
        <p>Loading</p>
      ) : (
        <div>
          {listOfItemCategory.map((category) => {
            return <MenuCategoryCard category={category} key={category.title} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
