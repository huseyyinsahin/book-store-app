import React, { useState } from "react";
import { useBasketContext } from "../context/BasketProvider";
import { MdDeleteForever } from "react-icons/md";

function BasketCard({ book }) {
  const { removeBasketBook, setTotal, total } = useBasketContext();

  const [bookTotal, setBookTotal] = useState(1);

  const handleMinus = (price) => {
    if (bookTotal === 1) {
      return;
    }
    setBookTotal(bookTotal - 1);
    const newTotal = total - price;
    setTotal(newTotal);
  };

  const handlePlus = (price) => {
    setBookTotal(bookTotal + 1);
    const newTotal = total + price;
    setTotal(newTotal);
  };

  return (
    <div>
      <li className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={book.volumeInfo?.imageLinks?.thumbnail}
          loading="lazy"
          alt={book.volumeInfo?.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold text-gray-900">
            {book.volumeInfo?.title}
          </h3>
          <p className="text-gray-600">
            {book.volumeInfo?.authors?.[0] || "Bilinmeyen Yazar"}
          </p>
          <p className="text-gray-900 mt-2">
            <strong>Fiyat:</strong>{" "}
            {Math.floor(book.saleInfo?.listPrice?.amount)}₺
          </p>
          <div>
            <span
              onClick={() =>
                handleMinus(Math.floor(book.saleInfo?.listPrice?.amount))
              }
              className="text-3xl cursor-pointer"
            >
              -
            </span>
            <span className="text-2xl mx-6">{bookTotal}</span>
            <span
              onClick={() =>
                handlePlus(Math.floor(book.saleInfo?.listPrice?.amount))
              }
              className="text-3xl cursor-pointer"
            >
              +
            </span>
          </div>

          <MdDeleteForever
            className="text-4xl text-red-500 mt-3 cursor-pointer hover:text-red-700 transition duration-300"
            onClick={() => removeBasketBook(book.id)}
          />
        </div>
      </li>
    </div>
  );
}

export default BasketCard;
