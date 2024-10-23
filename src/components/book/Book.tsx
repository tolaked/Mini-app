import React from "react";
import { useDispatch } from "react-redux";
import { Book as BookProp, deleteBook } from "../../redux/actions/books";
import BookImage from "../../assets/book-image.avif";
import Pencil from "../../assets/pencil.png";
import Delete from "../../assets/delete.png";

interface BookItemProps {
  book: BookProp;
  handleEdit: (book: BookProp) => void;
}

const Book: React.FC<BookItemProps> = ({ book, handleEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(book.isdn));
  };

  return (
    <div className=" shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <div className="flex justify-between">
        <img src={BookImage} alt="bookss" className="w-[120px] h-[120px]" />
        <div className="flex flex-col pl-4">
          <h2 className="text-lg font-semibold">{book.name}</h2>
          <p className="text-sm text-gray-600">
            <span className="font-bold">Category:</span> {book.bookCategory}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-bold">Author:</span> {book.author}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <img
          src={Delete}
          alt="bookss"
          className="w-[30px] h-[35px] cursor-pointer"
          onClick={handleDelete}
        />
        <img
          src={Pencil}
          alt="bookss"
          className="w-[35px] h-[35px] cursor-pointer"
          onClick={() => handleEdit(book)}
        />
      </div>
    </div>
  );
};

export default Book;
