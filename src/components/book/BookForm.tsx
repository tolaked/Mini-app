import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook, Book, editBook } from "../../redux/actions/books";
import { v4 as uuidv4 } from "uuid";

interface BookFormProps {
  closeModal: () => void;
  bookToEdit?: Book | null;
}

const BookForm: React.FC<BookFormProps> = ({ closeModal, bookToEdit }) => {
  const dispatch = useDispatch();
  const [book, setBook] = useState<Book>({
    name: bookToEdit?.name || "",
    bookCategory: bookToEdit?.bookCategory || "",
    author: bookToEdit?.author || "",
    createdDate: bookToEdit?.createdDate || new Date().toISOString(),
    isdn: bookToEdit?.isdn || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = {
      ...book,
      isdn: uuidv4(),
      createdDate: new Date().toISOString(),
    };

    //This is to check if its an existing book
    if (book?.isdn) {
      dispatch(editBook(book));
    } else {
      dispatch(addBook(newBook));
    }

    closeModal();
  };

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">
            {bookToEdit ? "Edit Book" : "Add Book"}
          </h2>
          <div
            className="text-xl font-semibold cursor-pointer"
            onClick={closeModal}
          >
            X
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={book.name}
              onChange={(e) => setBook({ ...book, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={book.bookCategory}
              onChange={(e) =>
                setBook({ ...book, bookCategory: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Author</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={book.author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="mr-2 bg-gray-300 text-black px-4 py-2 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
