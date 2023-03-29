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
                imgUrl: newItem.imgUrl,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price
            })
         }
         else{
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
         }
         state.totalAmount = state.cartitems.reduce((total, item)=> total+ Number(item.price) * Number(item.quantity),0)
         console.log(state.totalQuantity)
         console.log(state.cartitems)
         console.log(newItem)
        
    },
    deleteItem: (state, action)=>{
      const id = action.payload
      const existingItem = state.cartitems.find(item => item.id === id)
   if(existingItem){
        state.cartitems = state.cartitems.filter(item=> item.id !== id)
        state.totalQuantity = state.totalQuantity - existingItem.quantity
   }
        state.totalAmount = state.cartitems.reduce((total, item)=> total+ Number(item.price) * Number(item.quantity),0);
     }
  }
  
});

export const cartActions = cardSlice.actions

export default cardSlice.reducer