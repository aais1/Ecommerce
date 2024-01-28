import React from "react";
import { Link } from "react-router-dom";
import FallbackImage from "../assets/fallback/fallback.png";

const Item = ({ id, item, title, description, images, price }) => {
  return (
    <Link to={`/product/${id}`} className="text-center">
      <div
        key={id}
        className="border p-2 md:p-4 hover:border-black hover:cursor-pointer rounded-lg min-h-[200px]  md:min-h-[400px] "
      >
        <span className="font-bold text-sm md:text-md mb-5 line-clamp-1">
          {title}
        </span>
        <h3
          className="text-sm md:text-md line-clamp-2 mt-2 md:mt-5
        "
        >
          {description}
        </h3>
        <div className=" flex justify-center items-center">
          <div className="w-[180px] h-[230px] md:w-[320px] md:h-[370px] overflow-hidden rounded-md mt-2 md:mt-6">
            <img
              src={images[0]}
              className="w-[100%] h-[100%] duration-200 rounded-md overflow-hidden hover:scale-110 "
              onError={(e) => {
                e.target.src = FallbackImage;
              }}
              alt={title}
            />
          </div>
        </div>
        <div className="mt-4 md:mt-8 grid grid-cols-2 gap-x-8 justify-center items-center">
          <span className=" text-sm md:text-lg text-red-500 font-bold underline underline-offset-2">
            Price {price}$
          </span>
          <button className="hidden md:block border md:py-2 md:px-4 rounded-md border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Item;
