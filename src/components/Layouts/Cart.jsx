import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div>
        <div
          className={`fixed right-0 top-20 w-full lg:w-[25vw] h-[528px] p-3 bg-white mb-3 ${
            activeCart ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 z-50`}
        >
          <div className="flex justify-between items-center my-3">
            <span className="text-xl font-bold text-gray-800">My Order</span>
            <IoMdClose
              onClick={() => setActiveCart(!activeCart)}
              className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
            />
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((cardData) => {
              return (
                <ItemCard
                  Key={cardData.id}
                  id={cardData.id}
                  title={cardData.title}
                  price={cardData.price}
                  image={cardData.image}
                  qty={cardData.qty}
                />
              );
            })
          ) : (
            <h2 className="text-center text-xl font-bold text-gray-800">
              Your cart is empty
            </h2>
          )}

          <div className="absolute bottom-0 ">
            <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
            <h3 className="font-semibold text-gray-800">
              Total Amount : ${totalPrice}
            </h3>
            <hr className="w-[90vw] lg:w-[23vw] my-2" />
            <button
              onClick={() => navigate("/success")}
              className="bg-yellow-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[23vw] mb-5"
            >
              Checkout
            </button>
          </div>
        </div>
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`rounded-full bg-yellow-500 shadow-md text-black  text-5xl p-3 fixed bottom-4 right-5 ${
            totalQty > 0 && "animate-bounce delay-500 transition-all"
          } `}
        />
      </div>
    </>
  );
};

export default Cart;
