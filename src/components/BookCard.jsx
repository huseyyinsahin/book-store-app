import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image/image.jpg";

function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <article
      style={{ width: "250px" }}
      className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
    >
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/bookCardDetail/${book.id}`)}
      >
        <img
          src={
            book.volumeInfo?.imageLinks?.thumbnail
              ? book.volumeInfo?.imageLinks?.thumbnail
              : image
          }
          loading="lazy"
          alt={book.volumeInfo?.title}
          className="w-full h-48 rounded-t-md"
        />
        <div className="flex items-center justify-center mt-2 pt-3 ml-4 mr-2">
          <div>
            <span className="text-center block text-2xl text-gray-900">
              {book.volumeInfo?.title}
            </span>
          </div>
        </div>
        <div className=" text-center pt-3 mb-3">
          <h3 className="text-1xl text-gray-900">
            {book.volumeInfo?.authors?.length
              ? book.volumeInfo?.authors[0]
              : "Bilinmeyen Yazar"}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default BookCard;
