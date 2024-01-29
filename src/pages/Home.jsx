import  { useEffect} from "react";
import { Item, Container, Loader } from "../components";
import { useDispatch , useSelector } from "react-redux";
import {fetchProducts} from "../feature/product/productSlice";
import Carousel from "../components/Carousel";

const Home = () => {
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);
  return (
    <>
      <Carousel />
      <div className="flex">
        <h1 className="w-[90vw] mx-auto mt-4 text-2xl italic font-bold border-t pt-8">
          Popular Items in Store :
        </h1>
      </div>
      {items.length > 0 ? (
        <Container>
          {items.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
