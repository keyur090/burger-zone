import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../redux/slices/CartSlices";
import { useDispatch } from "react-redux";

const ItemCard = ({ id, title, price, image, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
    <Toaster
  position="top-right"
  reverseOrder={true}
/>
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, title, price, image, qty }));
          toast.success(`${title} Removed!`)
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={image} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{title}</h2>
        <div className="flex justify-between ">
          <span className="text-yellow-700 font-bold mt-1">${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7 mt-1">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ title })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-yellow-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ title })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-yellow-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
