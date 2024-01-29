import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { incrementItemQuantity , decrementItemQuantity , calculateTotalAmount } from '../feature/cart/cartSlice'

const Cart = () => {

  const dispatch = useDispatch()
  const {items , totalAmount } = useSelector(state => state.cart)


  useEffect(() => {
    dispatch(calculateTotalAmount())
  },[items])

  return (
    <>
    <div className='bg-zinc-300'>
    <div className='w-[90vw] mx-auto flex flex-col'>
      {
        items.length === 0 ? <h1 className='text-2xl text-center text-white'>No items in cart</h1> :
        items.map((item)=>{
          return(
            <div key={item.id} className='flex justify-between items-center py-4' >
              <div className='flex items-center'>
                <img className='w-[200px] h-[200px]' src={item.images[0]} alt={item.title}/>
                <div className='ml-4'>
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <p className='text-xl text-red-500'>${item.price}</p>
                </div>
              </div>
              <div className='flex items-center'>

                <button className='text-4xl font-bold text-black'
                onClick={()=>{
                  dispatch(decrementItemQuantity(item.id))
                }}
                >-</button>

                <span className='mx-4 text-xl'>{item.quantity}</span>

                <button className='text-4xl font-bold text-black'
                onClick={()=>{
                  dispatch(incrementItemQuantity(item.id))
                }}
                >+</button>
                
              </div>
              
            </div>
          )
        
        })
      }
    </div>
      <div className='w-[90vw] mx-auto text-3xl font-bold text-red-500 py-3 border-black border-t'> Total : {totalAmount}$</div>
      </div>
      <div className='w-[90vw] mx-auto'>
      <button className='text-yellow-500 font-bold text-xl border border-yellow-500 hover:text-white
      hover:bg-yellow-500 rounded-md py-2 px-2 my-6'>Checkout</button>
      </div>
      </>
  )
}

export default Cart