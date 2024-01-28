import React, { useEffect, useState } from "react";
import { Item, Container, Loader } from "../components";
import { FaCartShopping } from "react-icons/fa6";

import Carousel from "../components/Carousel";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("https://api.escuelajs.co/api/v1/products");
        const jsonData = await resp.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  return (
    <>
      <Carousel />
      <div className="flex">
        <h1 className="w-[90vw] mx-auto mt-4 text-2xl italic font-bold border-t pt-8">
          Popular Items in Store :
        </h1>
      </div>
      {data.length > 0 ? (
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
};

export default Home;
