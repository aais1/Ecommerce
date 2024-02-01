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
