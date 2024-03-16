import bookReducer from "./bookSlice";
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore ({
    reducer: {
        books: bookReducer
    }
}) 

export default store;