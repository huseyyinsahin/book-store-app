import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import image from "../assets/image/image.jpg";
import { useBasketContext } from "../context/BasketProvider";
import { AuthContext } from "../context/AuthProvider";
import { useAlertContext } from "../context/AlertProvider";

function BookCardDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});

  const { addBasket } = useBasketContext();
  const { showToast } = useAlertContext();
  const { user } = useContext(AuthContext);

  const getBook = async () => {
    try {
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyBCdjybTxD-LPf_ylEcke77ODhj6OUz0us`
      );
      setBook(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  const handleClick = (book) => {
    if (user) {
      addBasket(book);
    } else {
      showToast(
        "Sepetinize ürün ekleyebilmek için lütfen giriş yapınız!",
        "warning"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 pt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 w-full">
          <article className="mx-auto w-full lg:flex h-full shadow-lg border border-gray-200 rounded-lg transition-transform duration-300  hover:shadow-xl bg-white overflow-hidden">
            <div className="lg:w-1/3 bg-gray-50 p-6 lg:p-12 flex justify-center items-center">
              <img
                className="h-96 w-72 object-cover rounded-lg shadow-md"
                src={
                  book.volumeInfo?.imageLinks?.thumbnail
                    ? book.volumeInfo?.imageLinks?.thumbnail
                    : image
                }
                alt={book.volumeInfo?.title}
              />
            </div>
            <div className="lg:w-2/3 p-6 lg:p-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                {book.volumeInfo?.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{
                    __html: book.volumeInfo?.description,
                  }}
                />
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <span className="block text-gray-700">
                    <strong>Yazarı:</strong> {book.volumeInfo?.authors}
                  </span>
                  <span className="block text-gray-700">
                    <strong>Sayfa Sayısı:</strong> {book.volumeInfo?.pageCount}
                  </span>
                  <span className="block text-gray-700">
                    <strong>Fiyatı:</strong>{" "}
                    {book.saleInfo?.listPrice?.amount
                      ? `${Math.floor(book.saleInfo?.listPrice?.amount)} ₺`
                      : "Fiyat Belirlenmemiş"}
                  </span>
                </div>
                {book.saleInfo?.listPrice?.amount && (
                  <button
                    onClick={() => handleClick(book)}
                    className="mt-6 lg:mt-0 px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
                  >
                    Sepete Ekle
                  </button>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
                >
                  Geri Dön
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default BookCardDetail;
