
export interface Book {
    name: string; 
    bookCategory: string; 
    author: string; 
    createdDate: string; 
    isdn: string; 
  }
  
  
  export interface Action {
    type: string;
    payload: any;
  }
  

  export const addBook = (book: Book) => ({
    type: 'ADD_BOOK',
    payload: book,
  });
  
  export const deleteBook = (id: string) => ({
    type: 'DELETE_BOOK',
    payload: id,
  });
  
  export const searchBook = (query: string) => ({
    type: 'SEARCH_BOOK',
    payload: query,
  });
  
  export const editBook = (book: Book) => ({
    type: 'EDIT_BOOK',
    payload: book,
  });
  