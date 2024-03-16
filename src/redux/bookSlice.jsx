import fakeAPI from "../fakeAPI";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//AsyncThunk action for fetching books 
//will be dispatched in BookList component
export const fetchBooks = createAsyncThunk('books/fetchBooks', async()=> {
    try {
        const data = await fakeAPI.fetchBooks();
        // console.log('data',data);
        return data
    } catch (error) {
        console.error('Failed to fetch books:', error)
    }
})

const bookSlice = createSlice ({
    name:'books',
    initialState:[],
    reducers: {
        addBook: (state, action) => {
            state.push({id:Date.now(), ...action.payload})
        },
        deleteBook: (state, action) => {
            return state.filter( book => book.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.
        //handel the fulfilled action by replacing the entire state with the fetched books
        addCase(fetchBooks.fulfilled, (state, action) => {
            return [...action.payload]
        })
        //handel the rejected action by keeping the current state unchanged
        .addCase(fetchBooks.rejected, (state, action) => {
            console.error('Failed to fetch books:', action.error)
        })
    }
    
})

export const {addBook, deleteBook} = bookSlice.actions;
export default bookSlice.reducer;