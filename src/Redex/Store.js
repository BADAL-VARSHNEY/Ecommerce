import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slices/CardSlice'
const store = configureStore({
    reducer: {
       cart: cartSlice,
    }
})

export default store;