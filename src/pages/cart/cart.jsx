import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  console.log(cartItems);

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cartItem">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={index} data={product} />;
          }
        })}
        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button> Checkout </button>
          </div>
        ) : (
          <h1> Your Cart is Empty </h1>
        )}
      </div>
    </div>
  );
};
