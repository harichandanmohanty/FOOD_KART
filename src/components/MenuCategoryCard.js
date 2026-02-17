import { useState } from "react";

const MenuCategoryCard = ({ category }) => {
  const [categoryClicked, setCategoryClicked] = useState(false);

  function onClickCategory() {
    setCategoryClicked((prev) => !prev);
  }

  return (
    <div key={category.title}>
      <h3 className="category-title" onClick={onClickCategory}>{category.title}<span>{categoryClicked ? "-" : "+"}</span></h3>
      {categoryClicked &&  <div className="menu-items-container">
        {category.itemCards.length > 0 &&
          category.itemCards.map((itemCard) => (
            <div className="menu-item-card" key={itemCard.card.info.id}>
              <div className="item-details">
                <h3 className="item-name">{itemCard.card.info.name}</h3>
                <p className="item-price">₹{itemCard.card.info.price / 100}</p>
                <p className="item-description">
                  {itemCard.card.info.description}
                </p>
              </div>

              <div className="item-image-container">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemCard.card.info.imageId}`}
                  alt={itemCard.card.info.name}
                  className="item-image"
                />
                <button className="add-button">ADD</button>
              </div>
            </div>
          ))}
      </div>}
    </div>
  );
};

export default MenuCategoryCard;
