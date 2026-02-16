import RestaurantMenu from "../src/components/RestaurantMenu";

const baseUrl = "https://corsproxy.io/?url=https://namastedev.com/api/v1/";
const constants = {
    restaurantsAPI: baseUrl + "listRestaurants",
    restaurantMenu: baseUrl + "listRestaurantMenu/"
};

export default constants;