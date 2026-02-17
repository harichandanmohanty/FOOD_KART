const restaurantWithPromotedLevel = (RestaurantComponent) => {
  return (props) => (
    <div className="restaurant-promoted-component">
      <div className="res-promoted-badge">Veg</div>
      <RestaurantComponent {...props} />
    </div>
  );
}

export default restaurantWithPromotedLevel;