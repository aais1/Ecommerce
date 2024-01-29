import { Link } from "react-router-dom";
import FallbackImage from "../assets/fallback/fallback.png";

const Item = ({ id, title, description, images, price }) => {
  
  return (
    <Link to={`/product/${id}`} className="border hover:border-black hover:cursor-pointer min-h-[200px]
     p-[2px]">
      <div className="w-[100%] h-[280px] md:h-[320px] overflow-hidden">
        <img
          src={images[0]}
          className="w-[100%] h-[100%] duration-200 overflow-hidden hover:scale-110"
          onError={(e) => {
            e.target.src = FallbackImage;
          }}
          alt={title}
        />
      </div>
      <span className="font-bold text-md  md:text-md mt-2 mb-2 line-clamp-1">
        {title}
      </span>
      <div className="flex flex-col">
        <span className="text-sm md:text-lg text-red-500 font-bold underline underline-offset-2 mb-2">
          Price {price}$
        </span>
      </div>
    </Link>
  );
};

export default Item;
