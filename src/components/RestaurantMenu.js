import { useParams } from "react-router-dom";
import constants from "../../utils/constants";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
    const params = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        fetchMenu().then((menuList) => setRestaurantMenu(menuList));
    }, []);


    async function fetchMenu() {
        let menu = [];
        await fetch(constants.restaurantMenu +  params.restaurantId)
        .then((response) => response.json())
        .then((result) => {
            result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards?.forEach(element => {
                if(Object.keys(element).length !== 0) {
                    element.card.card.itemCards.forEach((card)=> {
                        menu.push({
                            id: card?.card?.info?.id,
                            name: card?.card?.info?.name

                        });
                    });
                }
            });
        })
        .catch((error) => console.error("Error fetching restaurant menu:", error));
        console.log(menu);
        return menu;
    }

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