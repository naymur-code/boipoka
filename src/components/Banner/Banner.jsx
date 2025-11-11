import React from "react";
import books from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={books} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
