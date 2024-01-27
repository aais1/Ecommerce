const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart(state,action){},
        removeItemFromCart(state,action){},
        clearCart(state,action){},
        incrementItemQuantity(state,action){},
        decrementItemQuantity(state,action){},
        purchase(state,action){}    
    }
})

export const {addItemToCart,removeItemFromCart,clearCart,incrementItemQuantity,decrementItemQuantity,purchase} = cartSlice.actions

export default cartSlice.reducer