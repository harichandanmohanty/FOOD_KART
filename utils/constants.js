import RestaurantMenu from "../src/components/RestaurantMenu";

const baseUrl = "https://corsproxy.io/?url=https://namastedev.com/api/v1/";
const constants = {
    restaurantsAPI: baseUrl + "listRestaurants",
    restaurantMenu: baseUrl + "listRestaurantMenu/",
    imageBaseUrl: "https://corsproxy.io/?url=https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
};

export default constants;