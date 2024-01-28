import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ID = useParams().id;

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${ID}`);
        if (!resp.ok) {
          throw new Error(`Failed to fetch data (status ${resp.status})`);
        }
        const data = await resp.json();
        setData(data);
      } catch (error) {
        setError(error.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [ID]);

  if (loading) {
    return (
      <>
        <div className='w-[80vw] mx-auto my-8 p-12 border'>
          <span><Skeleton /></span>
          <h3><Skeleton /></h3>
          <div>
            {
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-14'>
                <Skeleton count={3} width={300} height={300} />
                <Skeleton count={3} width={300} height={300} />
                <Skeleton count={3} width={300} height={300} />
              </div>
            }
          </div>
        </div>
      </>
    );
  }
  

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='md:border md:p-12  w-[80vw] mx-auto my-8  min-h-[400px]'>
      <div className='flex justify-between'>
        <span className='font-bold text-xl md:text-3xl mb-5 p-2 '>{data.title}</span>
        <span className='text-2xl text-red-500 font-bold'>Price {data.price}$</span>
      </div>
    
    <h3 className='text-md p-2 '>{data.description}</h3>
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-14'>
          {
              data.images.map((image)=>{
                   return (
                    <div className='w-[280px] h-[320] md:w-[300px] md:h-[350px] rounded-md mt-6 overflow-hidden' key={image}>
                    <img  src={image} className='w-[100%] h-[100%] rounded-md overflow-hidden duration-200 hover:scale-110' alt={data.title} />
                    </div>
                  )
              })
          }
      </div>
      
    </div>
    <div className='mt-8 grid grid-cols-2 items-end'>
      {/* <button>Place your button content here</button> */}
    </div>
  </div>
  );
};

export default Product;
