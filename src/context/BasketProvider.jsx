import React, { createContext, useContext, useEffect, useState } from "react";
import { useAlertContext } from "./AlertProvider";

const BasketContext = createContext();

export const useBasketContext = () => {
  return useContext(BasketContext);
};

function BasketProvider({ children }) {
  const { showToast } = useAlertContext();
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const [total, setTotal] = useState("");

  const addBasket = (book) => {
    const bookExists = basket.some((item) => item.id === book.id);

    if (bookExists) {
      showToast("Bu kitap daha önce eklenmiş!", "warning");
    } else {
      const updatedBasket = [...basket, book];
      setBasket(updatedBasket);
      showToast("Ürün sepetinize eklendi", "success");
    }
  };

  const removeBasket = () => {
    localStorage.removeItem("basket");
    setBasket([]);
    showToast("Tüm ürünler kaldırıldı!", "success");
  };

  const removeBasketBook = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);
    setBasket(newBasket);
    showToast("Ürün kaldırıldı!", "success");
  };

  const totalPrice = () => {
    const price = basket.reduce(
      (acc, item) => acc + (item.saleInfo?.listPrice?.amount || 0),
      0
    );
    setTotal(price);
  };

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    totalPrice();
  }, [basket]);

  return (
    <BasketContext.Provider
      value={{
        basket,
        addBasket,
        removeBasket,
        total,
        removeBasketBook,
        setTotal,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
