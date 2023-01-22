import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Product from '../../app/models/Product';
import { RootState } from '../../app/store';
import {getProducts,addProduct,delProduct,updProduct } from './productAPI';

export interface ProductState {
  products:Product[]
  update:boolean

}

const initialState: ProductState = {
  products:[],
  update:false

};


export const getProductsAsync = createAsyncThunk(
  'Product/getProducts',
  async () => {
   
    const response = await getProducts();
   
    return response;
  }
);

export const addProductAsync = createAsyncThunk(
  'Product/addProduct',
  async (prod:Product) => {
   
    const response = await addProduct(prod);
   
    return response;
  }
);

export const delProductAsync = createAsyncThunk(
  'Product/delProduct',
  async (id:number) => {
   
    const response = await delProduct(id);
   
    return response;
  }
);

export const updProductAsync = createAsyncThunk(
  'Product/updProduct',
  async (prod:Product) => {
   
    const response = await updProduct(prod);
   
    return response;
  }
);

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    
  },
  
  extraReducers: (builder) => {
    builder
     
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload.data
      }).addCase(addProductAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.products.push(action.payload.data)
      }).addCase(delProductAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.products= state.products.filter(x => x.pid !== action.payload)
      }).addCase(updProductAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.update =! state.update
    
      })
  },
});

// export const {  } = StudentSlice.actions;

export const selectProducts = (state: RootState) => state.Product.products;
export const selectUpdate = (state:RootState) => state.Product.update;
export default ProductSlice.reducer;
