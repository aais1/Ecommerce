import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { incrementItemQuantity , decrementItemQuantity , calculateTotalAmount ,removeItemFromCart } from '../feature/cart/cartSlice'

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
        items.length === 0 ?<div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold text-center text-black p-4'>No items in cart</h1>
          <img src="https://www.pinclipart.com/picdir/big/526-5269456_sad-face-cartoon-characters-clipart.png" 
          className='w-[50%] h-[50%] md:w-[30%] md:h-[30%] my-4 border border-black border-dotted'
          alt="😢" /> </div>:
        items.map((item)=>{
          return(
            <div key={item.id} className='flex justify-between items-center py-4' >
              <div className='flex items-center'>
                <img className='w-[150px] h-[150px] md:w-[200px] md:h-[200px]' src={item.images[0]} alt={item.title}/>
                <div className='ml-4'>
                  <h3 className=' text-md md:text-xl font-bold'>{item.title}</h3>
                  <p className=' text-md md:text-xl text-red-500'>${item.price}</p>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-center mb-2 '>
                <button className='text-4xl font-bold text-black'
                onClick={()=>{
                  dispatch(decrementItemQuantity(item.id))
                }}
                >-</button>

                <span className='mx-2 md:mx-4 text-xl'>{item.quantity}</span>

                <button className='text-4xl font-bold text-black'
                onClick={()=>{
                  dispatch(incrementItemQuantity(item.id))
                }}
                >+</button>
                </div>
                <button className='px-2 py-[2px] border border-red-500 text-red-500 hover:text-white hover:bg-red-500 font-bold rounded-md'
                onClick={()=>dispatch(removeItemFromCart(item))}>Clear</button>
              </div>
            </div>
          )
        
        })
      }
    </div>
    
     { items.length === 0 ?  ` ` :
      <>
      <div className='w-[90vw] mx-auto text-xl md:text-3xl font-bold text-red-500 py-3 border-black border-t'> Total : {totalAmount}$</div>
      <div/>
      <div className='w-[90vw] mx-auto'>
      <button className='text-yellow-500 font-bold text-xl border border-yellow-500 hover:text-white
      hover:bg-yellow-500 rounded-md py-2 px-2 my-6'>Checkout</button>
      </div>
      </>
    }
        </div>
      </>
  )
}

export default Cart