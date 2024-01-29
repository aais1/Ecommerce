import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";

  const initialState    = {
    items: [],
    isLoading:false
  };

  const productSlice = createSlice({
    name:"product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          console.error(action.error.message);
          state.isLoading = false;
        })
        .addCase(fetchProducts.pending, (state, action) => {
          state.isLoading = true;
        });
      }  
  })

  export const fetchProducts = createAsyncThunk('cart/fetchItems',
  async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();
    console.log(data);
    return data;
  }
  )

  export default productSlice.reducer;
  