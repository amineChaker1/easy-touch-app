import React, { useEffect, useState } from "react";
import Checkout from "../Checkout";

const CartItems = ({ cartProduct }) => {
  if (cartProduct.length == 0) {
    return <div> no cart products </div>;
  }
  const [showCheckout, setShowCheckout] = useState(false);
  const productsNames = cartProduct.map((one) => one.title);

  return (
    <>
      {cartProduct.map((product) => (
        <div className="flex gap-2 border-2 border-primary rounded-lg p-2 mb-2">
          {" "}
          <img className="w-20 " src={product.image} alt="" />{" "}
          <div className="info flex flex-col justify-between">
            <div>
              <p> {product.title} </p>
              <p> {product.price} </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
      {cartProduct.length !== 0 && (
        <div className="flex items-center  mt-8 justify-between">
          <p>
            Your Total is{" "}
            <span className="font-extrabold text-primary">
              {" "}
              {cartProduct.reduce((a, c) => a + c.price, 0)}{" "}
            </span>{" "}
          </p>
          <button
            onClick={() => setShowCheckout(true)}
            className="bg-primary rounded-lg text-black py-1 px-2"
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      )}

      {showCheckout && <Checkout productsNames={productsNames} />}
    </>
  );
};

export default CartItems;
