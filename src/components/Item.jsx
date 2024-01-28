import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({id,item,title,description,images,price}) => {
  return (
    <Link to={`/product/${id}`} className='text-center'>
    <div key={id} className='border p-4 hover:border-black hover:cursor-pointer rounded-lg  min-h-[400px] '>
        <span className='font-bold text-md mb-5 line-clamp-1' >{title}</span>
        <h3 className='text-md line-clamp-2 mt-5
        '>{description}</h3>
        <div className=' flex justify-center items-center'>
          <div className='w-[200px] h-[250px] overflow-hidden rounded-md mt-6 bg-black'>
            <img src={images[0]} className='w-[100%] h-[100%] duration-200 rounded-md overflow-hidden hover:scale-110 '
            alt={title} />
          </div>
        </div>
        <div className=' mt-8 grid grid-cols-2 justify-center items-center'>
        <span className='text-2xl text-red-500 font-bold'>Price {price}$</span>
          <button className=' border py-2 px-4 rounded-md border-green-500 text-green-500 hover:bg-green-500 hover:text-white'>Add To Cart</button>
        </div>
    </div>
    </Link>
  )
}

export default Item