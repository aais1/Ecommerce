import React from 'react'

const Container = ({children}) => {
  return (
      <div className='w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 my-4 gap-y-4'>
          {children}
      </div>
  )
}

export default Container