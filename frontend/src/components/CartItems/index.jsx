import React from "react";

const CartItems = ({ cartProduct }) => {
  if (cartProduct.length == 0) {
    return <div> no cart products </div>;
  }

  return (
    <>
      {cartProduct.map((product) => (
        <div className="flex justify-between border-2 border-primary rounded-lg p-2 mb-2">
          {" "}
          <img className="w-20 " src={product.image} alt="" />{" "}
          <div className="info">
            <p> {product.title} </p>
            <p> {product.price} </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;
