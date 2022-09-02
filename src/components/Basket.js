import React from "react";

export default function Basket(props, e) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.qty,
    0
  );
  const taxPrice = itemsPrice * 0.0775;
  const shippingPrice = itemsPrice > 1250 ? 0 : 49.95;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  console.log(props.cartItems.length);

  return (
    <aside className="block col-1 shodow">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div> Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"> Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Implement Checkout")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
