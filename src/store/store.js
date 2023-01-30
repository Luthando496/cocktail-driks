import {createSlice,configureStore} from '@reduxjs/toolkit'



const productSlice = createSlice({
    name: 'product',
    initialState: {products: [] ,loading: false,err:null,singlePro:null,singleError:null},
    reducers:{
        fetchProducts(state,action){
            state.loading = true;
            state.products = action.payload;
            state.loading = false;
        },
        fetchProductsError(state,action){
            state.err = action.payload;
        },
        singleFetch(state,action){
            state.loading = true;
            state.singlePro = action.payload;
            state.loading = false;
            state.singleError = null;
        },
        singleFetchError(state,action){
            state.loading = true;
            state.singleError = action.payload;
            state.loading = false;
        }

    }
    
})

export const productActions = productSlice.actions




const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
})


export default store