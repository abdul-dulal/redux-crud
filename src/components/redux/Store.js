import { bookSlice } from "./Bookslice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    bookSlice: bookSlice.reducer,
  },
});

export default store;
