import React from 'react'

const Container = ({children}) => {
  return (
      <div className='w-[95vw] md:w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 my-4 gap-y-8'>
          {children}
      </div>
  )
}

export default Container