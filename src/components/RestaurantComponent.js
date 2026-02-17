import constants from "../../utils/constants";

const RestaurantComponent = (props) => {
  return (
    <div className="restaurant-card">
      <img
        src={
          props.imageId
            ? constants.imageBaseUrl + props.imageId
            : "https://corsproxy.io/?url=https://loremflickr.com/400/300/restaurant"
        }
        alt={props.name}
        className="restaurant-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://corsproxy.io/?url=https://loremflickr.com/400/300/restaurant";
        }}
      />
      <div className="res-info">
        <h3 className="res-name">{props.name}</h3>
        <p className="res-description">{props.description}</p>
        <div className="res-meta">
          <p className="res-cost">{props.costForTwo}</p>
          <p className="res-rating">
            <span>★</span>
            {props.avgRating}
          </p>
        </div>
        <p className="res-sla-time">{props.slaTime}</p>
      </div>
    </div>
  );
};

export default RestaurantComponent;
