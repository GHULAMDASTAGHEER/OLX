import { createSlice } from "@reduxjs/toolkit";

export const WishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    
    data: [],
  },
  reducers: {
    addToWishlist(state, action) {
      state.data.push(action.payload);
    },
    removeToWishlist: (state, action) => {
      const itemIdToRemove = action.payload;
      state.data = state.data.filter(index => index.index !== itemIdToRemove);
    },
  },
});

export const { addToWishlist, removeToWishlist } = WishListSlice.actions;
export default WishListSlice.reducer;
