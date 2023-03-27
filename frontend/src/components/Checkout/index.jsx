import React from "react";

const Checkout = () => {
  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            class="shadow-sm outline-secondary my-4 bg-black outline-primary text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary "
            placeholder="Votre Nom"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            class="shadow-sm outline-secondary my-4 bg-black  outline-primary text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
            placeholder="Address de Maison"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            class="shadow-sm outline-secondary my-4 bg-black  outline-primary text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
            placeholder="Numero de Telephone"
            required
          />
        </div>

        <button
          type="submit"
          class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-primary  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        >
          Order Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
