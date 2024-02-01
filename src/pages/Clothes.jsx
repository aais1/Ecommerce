import Loader from "../components/Loader";
import {Item,Container} from "../components";

import useFetch from "../hooks/useFetch";

const Clothes = () => {

  const {data,loading,error}=useFetch('https://api.escuelajs.co/api/v1/categories/1/products');

  return (
    <>
     {data ? (
        <Container>
          {data.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Clothes;
