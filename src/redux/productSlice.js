import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});
export const getCategoryProducts = createAsyncThunk(
  "getcategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);
export const getDetailProducts = createAsyncThunk("getproduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productStatus = STATUS.LOADİNG;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productStatus = STATUS.FAIL;
      })
      .addCase(getDetailProducts.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADİNG;
      })
      .addCase(getDetailProducts.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProducts.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productStatus = STATUS.LOADİNG;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
