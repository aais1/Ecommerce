import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import FallbackImage from "../assets/fallback/fallback.png";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../feature/cart/cartSlice";
import useFetch from "../hooks/useFetch";

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch();

  const {data,loading,error}=useFetch(`https://api.escuelajs.co/api/v1/products/${id}`)

  if (loading) {
    return (
      <>
        <div className="w-[90vw] mx-auto my-8 p-12 border-t border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className=" flex flex-col">
              <span className="mb-5 p-1">
                <Skeleton />
              </span>
              <h3 className="p-1">
                <Skeleton count={14} />
              </h3>
            </div>
            <div>
              {
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <Skeleton count={1} width={300} height={300} />
                  <Skeleton count={1} width={290} height={300} />
                  <Skeleton count={1} width={300} height={300} />
                </div>
              }
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="md:border-y md:p-12 w-[90vw] mx-auto my-8  min-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className=" flex flex-col">
          <span className="font-bold text-xl md:text-3xl mb-5 p-2 ">
            {data.title}
          </span>
          <span className="md:text-2xl text-xl text-red-500 font-bold p-2">
            Price: {data.price}$
          </span>
          <h3 className="text-md p-2 ">{data.description}</h3>
          <button
          className=" w-[50%] mx-auto text-sm md:text-md md:px-2 py-2 my-4 border border-green-500 text-green-500 hover:bg-green-500 duration-75 hover:text-white"
          onClick={()=>dispatch(addItemToCart(data))}
        >
          Add To Cart
        </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 w-[100%] gap-2 md:gap-4">
            {data.images.map((image) => {
              return (
                <div
                  className="w-[100%] h-[260px] md:w-[280px] md:h-[300px] rounded-md  overflow-hidden"
                  key={image}
                >
                  <img
                    src={image}
                    className="w-[100%] h-[100%] rounded-md overflow-hidden duration-200 hover:scale-110"
                    onError={(e) => {
                      e.target.src = FallbackImage;
                    }}
                    alt={data.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
