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
    updateBook: (state, action) => {
      const updatedBooks = [...state.value];
      const id = action.payload.id;
      const index = updateBook.findIndex((element) => element.id === id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooks, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
