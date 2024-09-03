import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: 'idle',
  cart:[],
};

export const getProducts = createAsyncThunk('products/get', async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("called");
      console.log(action.payload.product);
      const { id } = action.payload.product;
      let isFound = false;
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === id) {
          isFound = true;
          break;
        }
      }
      if (!isFound) {
        state.cart.push(action.payload.product);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.product.id);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      console.log("fulfilled",action);
      state.products = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(getProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice;
