import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const params = useParams();
    const restaurantMenu = useRestaurantMenu(params.restaurantId);

    return (
    <div>
        <h2>Restaurant Menu</h2>
        {(!restaurantMenu.length) ? (<p>Loading</p>): 
        (<ul>
            {restaurantMenu.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>)}
    </div>
    );
};

export default RestaurantMenu;