import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartitems: [],
    totalAmount: 0,
    totalQuantity: 0
} 

const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    additem: (state, action)=>{
         const newItem = action.payload
         const existingItem = state.cartitems.find( 
            item=> item.id === newItem.id);   

         state.totalQuantity++

         if(!existingItem){
            state.cartitems.push({
                id: newItem.id,
                productName: newItem.productName,
                image: newItem.imgUrl,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price
            })
         }
         else{
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
         }
         state.totalAmount = state.cartitems.reduce((total, item)=> total+ Number(item.price) * Number(item.quantity))
         console.log(state.totalQuantity)
         console.log(state.cartitems)
         console.log(newItem)
        
    }
  }
});

export const cartActions = cardSlice.actions

export default cardSlice.reducer