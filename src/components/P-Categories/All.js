/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { CartContext, ProductContext } from "../../App";

const All = () => {
  const { data } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <div className="md:container md:mx-auto">
        <div className="flex flex-wrap justify-center -mx-2">
          {data.map((d, i) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
              key={i}
            >
              <div className="bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2 h-full">
                <img
                  className="rounded-t-md w-full h-40 object-cover object-center"
                  src={d.image}
                  alt=""
                />
                <div className="p-2 h-full">
                  <h5 className="mb-1 text-base font-semibold tracking-tight text-gray-900 dark:text-black">
                    {d.name}
                  </h5>
                  <p className="mb-2 text-xs text-gray-700 dark:text-gray-400">
                    {d.description}
                  </p>
                  <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    ${d.price}
                  </p>
                  <a
                    onClick={() => handleAddToCart(d)}
                    className="inline-block px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default All;
