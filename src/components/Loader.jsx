import React from 'react'

const Loader = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center font-bold'>
    <div className='rounded-[50%] p-12 border-[8px] md:border-[14px] border-gray-500 border-t-blue-500 w-12 animate-spin mb-2 -z-50'></div>
    </div>
  )
}

export default Loader