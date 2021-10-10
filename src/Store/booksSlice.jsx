import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    value: null,
  },
  reducers: {
    setBooks: (state, action) => {
      state.value = action.payload;
    },
    updatedBooks: (state, action) => {
      const updatedBooks = [...state.value];
      const id = action.payload.id;
      const index = updatedBooks.findIndex((element) => element.id === id);
      updatedBooks.splice(index, 1, action.payload);
      state.value = updatedBooks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooks, updatedBooks } = booksSlice.actions;

export default booksSlice.reducer;
