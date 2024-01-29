import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items:  [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading:false
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action){
      const id=action.payload.id;
      const alreadyExist = state.items.find((item) => item.id === id);
      if(alreadyExist){
      alreadyExist.quantity=alreadyExist.quantity+1;
      state.totalQuantity=state.totalQuantity+1;
      }else{
        state.items.push({...action.payload,quantity:1});
        state.totalQuantity=state.totalQuantity+1;
      }
    },
    clearCart(state, action) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    incrementItemQuantity(state, action) {
      const id=action.payload;
      state.items.map((item)=>{
        if(item.id===id){
          item.quantity=item.quantity+1;
          state.totalQuantity=state.totalQuantity+1;
        }
      })
    },
    decrementItemQuantity(state, action) {
      const id = action.payload;
    
      state.items.forEach((item, index) => {
        if (item.quantity <= 1) {
          console.log('removing');
          
          const removeIndex = state.items.findIndex((item) => item.id === id);
          if (removeIndex !== -1) {
            state.items.splice(removeIndex, 1);
            state.totalQuantity = state.totalQuantity - 1;
          }
        } else if (item.id === id) {
          item.quantity = item.quantity - 1;
          state.totalQuantity = state.totalQuantity - 1;
        }
      });
    },
    calculateTotalAmount(state, action) {
      let total = 0;
      state.items.forEach((item) => {
        total = total + item.price * item.quantity;
      });
      state.totalAmount = total;
    },
    removeItemFromCart(state,action){
      const id=action.payload.id;
      const removeIndex = state.items.findIndex((item) => item.id === id);
        state.items.splice(removeIndex,1);
        state.totalQuantity=state.totalQuantity-1;
    }
  }
});

export const {
  addItemToCart,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
  calculateTotalAmount,
  removeItemFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
