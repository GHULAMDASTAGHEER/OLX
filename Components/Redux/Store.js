import { configureStore } from "@reduxjs/toolkit";
import  Postreducer  from "./PostSlice";
import WishListreducer from "./WishListSlice";
// import { removeToWishlist } from "./WishListSlice";
export const store = configureStore({
    reducer :{
        post :Postreducer,
        wishList : WishListreducer
    },
});