import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface singleData {
    id : number,
    name : string,
    image : string, 
    price : number,
    quantity : number,
    customizable : boolean,
}



interface InitialType {
    cartItems : singleData[],
    
}
// typeof window !=='undefined' && localStorage!.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) :
const initial_data : InitialType = {
    cartItems  : [],    
}

export const cartSlice = createSlice({
    initialState : initial_data,
    name : 'cart',
    reducers : {
        addToCart : (state, action : PayloadAction<singleData>) => {
            const info  = action.payload;
            const existingItem = state.cartItems.find((item) => item.name === info.name);
            if(existingItem){
                existingItem.quantity += 1;
            }
            else {
                state.cartItems.push(info);
            }
            //localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        increaseHandler : (state, action : PayloadAction<{name : string}>) => {
            const {name} = action.payload;
            const existingItem = state.cartItems.find((item) => item.name === name)
            existingItem!.quantity += 1;
            //localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        minusHandler : (state, action : PayloadAction<{name : string}>) => {
            const {name} = action.payload;
            const existingItem = state.cartItems.find((item) => item.name === name);
            if(existingItem!.quantity == 1){
                const removedItem = state.cartItems.filter((item) => item !== existingItem);
                state.cartItems = removedItem;
            }
            else {
                existingItem!.quantity -= 1;
            }
            //localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        deleteHandler : (state, action : PayloadAction<{name : string}>) => {
            const {name} = action.payload;
            const removedItem = state.cartItems.filter((item) => item.name !== name);
            state.cartItems = removedItem;
            //localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
    }
})

export const {addToCart, increaseHandler, minusHandler, deleteHandler} = cartSlice.actions;
export default cartSlice.reducer;