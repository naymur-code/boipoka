import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-5">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
    </div>
  );
};

export default Books;
