import React from "react";

import Product from "./Product";
import { useGlobalContext } from "./context";

const CartContent = () => {
  const { cart, total, amount, shipping } = useGlobalContext();

  return (
    <div className="cart-content">
      <h1 className="title">Your Bags</h1>
      <div className="content">
        <div className="products">
          <div className="table-header-group">
            <div className="table-cell">Product</div>
            <div className="table-cell">Description</div>
            <div className="table-cell">Quantity</div>
            <div className="table-cell">Price</div>
            <div className="table-cell">Delete</div>
          </div>
          <div className="table-row-group">
            {cart.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
            {amount === 0 && (
          <div className="cart-content-empty">
                <h1 className="empty">Your Bag is Empty</h1>
              </div>
            )}
          </div>
        </div>
        <div className="summary">
          <div className="subtitle">order summary</div>
          <div className="summary-content-group">
            <div className="summary-content">
              <div className="summary-product">{amount} Products</div>
              <div className="summary-price">${total}</div>
            </div>
            <div className="summary-content">
              <div className="summary-shipping">Shipping</div>
              <div className="summary-shipping-price">
                $<span>{shipping}</span>
              </div>
            </div>
          </div>
          <div className="total">
            <div className="total-text">Total</div>
            <div className="total-price">${(total + shipping).toFixed(2)}</div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
