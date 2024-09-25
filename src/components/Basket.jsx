import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useBasketContext } from "../context/BasketProvider";
import { IoIosCloseCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import BasketCard from "./BasketCard";

function Basket() {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useContext(AuthContext);
  const { basket, total, removeBasket } = useBasketContext();

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleOffCanvas}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
      >
        Sepetim
      </button>

      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 z-10 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleOffCanvas}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-20 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 h-full flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">Sepetim</h2>
            <IoIosCloseCircle
              className="text-4xl text-red-600 cursor-pointer hover:text-red-800 transition duration-300"
              onClick={toggleOffCanvas}
            />
          </div>

          <p className="text-xl text-center mb-4">
            {user && basket[0] && (
              <>
                Toplam Fiyat: <strong>{Math.floor(total)}₺</strong>
              </>
            )}
          </p>

          <ul className="space-y-4 overflow-y-auto flex-grow">
            {basket[0] ? (
              user ? (
                <>
                  {basket.map((book) => (
                    <BasketCard key={book.id} book={book} />
                  ))}
                </>
              ) : (
                <li className="text-center text-gray-700">
                  Sepeti Kullanabilmek İçin Lütfen Giriş Yapınız!
                </li>
              )
            ) : (
              <li className="text-center text-gray-700">Sepetiniz boş 😔</li>
            )}
          </ul>

          {user && basket[0] && (
            <>
              <button className="w-full bg-yellow-600 text-white py-1 rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 mt-4">
                Satın Al
              </button>
              <button
                onClick={removeBasket}
                className="w-full bg-red-600 text-white py-1 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 mt-4"
              >
                Hepsini Kaldır
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
