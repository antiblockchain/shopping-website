import React, { useState } from "react";
import "./index.css";
import Item from "./components/Item";

const Shop = () => {
  const items = [
    { name: "Item one", id: "1", price: 10, inStock: true },
    { name: "Item two", id: "2", price: 40, inStock: true },
    { name: "Item three", id: "3", price: 15, inStock: false },
    { name: "Item four", id: "4", price: 25, inStock: true },
    { name: "Item five", id: "5", price: 150, inStock: true },
  ];

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    for (let i = 0; i < quantity; i++) {
      if (cart === []) {
        setCart([item]);
      } else {
        setCart((cart) => [...cart, item]);
      }
    }

    showCart();
    console.log(cart.price);
  };

  const removeItem = (item) => {
    for (let cartItems of cart) {
      if (cartItems === item) {
        setCart((cart) => [...cart.splice(item, 1)]);
        showCart();
      }
    }
  };
  const [isShown, setIsShown] = useState(0);

  const [cartView, setCartView] = useState();

  const [orderTotal, setOrderTotal] = useState(0);

  const toggleShowCart = () => {
    if (isShown === 1) {
      setIsShown(0);
      showCart();
    } else {
      setIsShown(1);
      showCart();
    }
  };

  const updateTotal = () => {
    setOrderTotal(0);
    let newTotal = 0;
    for (let cartItems of cart) {
      newTotal = newTotal + cartItems.price;
      setOrderTotal(newTotal);
    }
  };

  const showCart = () => {
    updateTotal();
    if (isShown === 1) {
      setCartView(
        <div className="items-view">
          {cart.map((cartitem) => (
            <>
              <p key={cartitem.id}>
                {cartitem.name} ${cartitem.price}
              </p>
              {/* <button onClick={removeItem(cartitem)}>Remove Item</button> */}
            </>
          ))}
          <p>Total: ${orderTotal}</p>
        </div>
      );
    } else if (isShown === 0) {
      setCartView(<div></div>);
    }
  };

  return (
    <>
      <div className="bg"></div>
      <div className="shop-container">
        <div className="nav">
          <a href="/">Home</a>
          <a href="#">Shop</a>
        </div>
        <div className="cart-info">
          <h3>{cart.length} items in cart.</h3>
          <button onClick={toggleShowCart}>View Items</button>
          {cartView}
        </div>
        <div className="items-container">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              addItem={addItem}
              removeItem={removeItem}
            ></Item>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
