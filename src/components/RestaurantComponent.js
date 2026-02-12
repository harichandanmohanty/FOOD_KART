const RestaurantComponent = (props) => {
  return (
    <div className="restaurant-card">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.avgRating}</p>
      <p>{props.slaTime}</p>
      <p>{props.costForTwo}</p>
    </div>
  );
};

export default RestaurantComponent;