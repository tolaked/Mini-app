import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Book from "./Book";
import { Book as BookProp } from "../../redux/actions/books";
import BookForm from "./BookForm";

const BookList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [bookToEdit, setBookToEdit] = useState<BookProp | null>(null);

  const books = useSelector((state: RootState) => state.books);

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortedBooks = filteredBooks.sort(
    (a, b) =>
      new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
  );

  const handleEditClick = (book: BookProp) => {
    setBookToEdit(book);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-grow flex justify-center">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by book name"
            className="outline-none p-2 border border-gray-300 rounded w-full max-w-md"
          />
        </div>

        <button
          className="text-white bg-blue-500  px-4 py-2 rounded ml-4"
          onClick={() => setShowModal(true)}
        >
          Create Book
        </button>
      </div>

      {sortedBooks?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedBooks.map((book) => (
            <Book key={book.isdn} book={book} handleEdit={handleEditClick} />
          ))}
        </div>
      ) : (
        <h2 className="text-xl text-center font-semibold mb-4">
          No books found
        </h2>
      )}

      {showModal && (
        <BookForm
          closeModal={() => {
            setBookToEdit(null);
            setShowModal(false);
          }}
          bookToEdit={bookToEdit}
        />
      )}
    </div>
  );
};

export default BookList;
