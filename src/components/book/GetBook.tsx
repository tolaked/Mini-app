import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Book from "./Book";
import BookForm from "./BookForm";

const GetBook: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { isdn } = useParams<{ isdn: string }>();

  const book = useSelector((state: RootState) =>
    state.books.find((b) => b.isdn === isdn)
  );

  return (
    <div className="container mx-auto p-4">
      {book?.isdn ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Book book={book} handleEdit={() => setShowModal(true)} />
        </div>
      ) : (
        <h2 className="text-xl text-center font-semibold mb-4">
          No book found
        </h2>
      )}

      {showModal && (
        <BookForm
          closeModal={() => {
            setShowModal(false);
          }}
          bookToEdit={book}
        />
      )}
    </div>
  );
};

export default GetBook;
