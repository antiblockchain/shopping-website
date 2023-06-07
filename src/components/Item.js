import { useState } from "react";
import "../";

const Item = ({ item, addItem, removeItem }) => {
  const handleClick = () => {
    addItem(item, quantity);
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <div className={item.inStock ? "item stocked" : "item not-stocked"}>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <form className="item-input">
        <div className="labels">
          <label>Amount</label>
          <button
            className="labels-text plus"
            onClick={(e) => {
              e.preventDefault();
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
          <button
            className="labels-text minus"
            onClick={(e) => {
              e.preventDefault();
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
        </div>
        <input
          type="text"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        ></input>
        <button
          className={item.inStock ? "stocked" : "not-stocked"}
          onClick={(e) => {
            e.preventDefault();
            if (item.inStock) {
              handleClick();
            }
          }}
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default Item;
