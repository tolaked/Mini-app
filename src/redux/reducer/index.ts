import { Action } from "../actions/books";
import { bookReducer } from "./books";

export const rootReducer = (state: any = {}, action: Action) => ({
    books: bookReducer(state.books, action),
  });
  