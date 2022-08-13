import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      BookName: "JavaScript The Good Parts",
      id: 1,
      author: "Douglas Crockford",
      publish: 2008,
    },
    {
      BookName: "JavaScript The Definitive Guide",
      id: 2,
      author: "David Flanagan",
      publish: 2002,
    },
    {
      BookName: "Programming JavaScript",
      id: 3,
      author: "Eric Elliott",
      publish: 2006,
    },
  ],
};

export const bookSlice = createSlice({
  name: "book",
  initialState: initialBooks,
  reducers: {
    showbooks: (state) => state,
    addbooks: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBooks: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBooks: (state, action) => {
      const { id, author, BookName } = action.payload;
      const isexistBook = state.books.filter((book) => book.id === id);

      if (isexistBook) {
        isexistBook[0].BookName = BookName;
        isexistBook[0].author = author;
      }
    },
  },
});

export const { showbooks, addbooks, updateBooks, deleteBooks } =
  bookSlice.actions;

export default bookSlice.reducer;
