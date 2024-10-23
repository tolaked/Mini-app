import { Action, Book } from "../actions/books";

const initialState: Book[] = JSON.parse(localStorage.getItem("books") || "[]");

export const bookReducer = (state = initialState, action: Action): Book[] => {
  switch (action.type) {
    case "ADD_BOOK":
      const updatedBooks = [...state, action.payload];
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      return updatedBooks;

    case "DELETE_BOOK":
      const filteredBooks = state.filter(
        (book) => book.isdn !== action.payload
      );
      localStorage.setItem("books", JSON.stringify(filteredBooks));
      return filteredBooks;

    case "EDIT_BOOK":
      const editedBooks = state.map((book) =>
        book.isdn === action.payload.isdn ? action.payload : book
      );
      localStorage.setItem("books", JSON.stringify(editedBooks));
      return editedBooks;

    case "SEARCH_BOOK":
      return state.filter((book) =>
        book.name.toLowerCase().includes(action.payload.toLowerCase())
      );

    default:
      return state;
  }
};
