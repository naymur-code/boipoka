import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLs } from "../../utility/addToDB";

const BookDetails = () => {
  const handleBack = () => {
    window.history.go(-1);
  };
  const addToWistList = (id) => {
    // addToWistList();
    addToLs(id)
    console.log(54);
  };
  const id = useParams().id;
  const books = useLoaderData();
  const selectBook = books.find((book) => book.bookId == id);
  const { bookName, image, bookId } = selectBook;
  return (
    <div className="my-8">
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Movie" style={{ width: "200px" }} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-outline">Read</button>
            <button
              className="btn btn-primary btn-outline"
              onClick={handleBack}
            >
              back
            </button>
            <button
              className="btn btn-primary"
              onClick={() => addToWistList(bookId)}
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
