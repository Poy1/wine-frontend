import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import "react-toastify/dist/ReactToastify.css";

export const getAllProducts = createAsyncThunk(
    "product/get",
    async (_, thunkAPI) => { // Remove the userData parameter
      try {
        return await productService.getProducts(); // Call getProducts without parameters
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

const productState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.error;
        });
    },
});

export default productSlice.reducer;