const RestaurantComponent = (props) => {
  return (
    <div className="restaurant-card">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default RestaurantComponent;