import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../utils/cartSlice";

const Store = () => {
    const storeItemList = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function handleRemoveItem(itemId) {
    dispatch(removeItem(itemId));
  }

  return storeItemList.length === 0 ? (<div className="no-item-cart">
    Please add some items to cart
  </div>):(<div>
    {storeItemList.map((itemCard) => (
    <div className="menu-item-card" key={itemCard.card.info.id}>
      <div className="item-details">
        <h3 className="item-name">{itemCard.card.info.name}</h3>
        <p className="item-price">₹{itemCard.card.info.price / 100}</p>
        <p className="item-description">{itemCard.card.info.description}</p>
      </div>

      <div className="item-image-container">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemCard.card.info.imageId}`}
          alt={itemCard.card.info.name}
          className="item-image"
        />
        <button
          className="add-button"
          onClick={() => handleRemoveItem(itemCard.card.info.id)}
        >
          Remove
        </button>
      </div>
    </div>
  ))}
  </div>);
};

export default Store;
