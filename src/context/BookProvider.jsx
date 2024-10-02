import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [bookDetail, setBookDetail] = useState([]);
  const [search, setSearch] = useState("html");
  const [loading, setLoading] = useState(false);

  const getBook = async (id = null) => {
    setLoading(true);
    const baseUrl = `https://www.googleapis.com/books/v1/volumes`;
    const url = id
      ? `${baseUrl}/${id}?key=AIzaSyBCdjybTxD-LPf_ylEcke77ODhj6OUz0us`
      : `${baseUrl}?q=${search}&orderBy=relevance&maxResults=18&printType=books&key=AIzaSyBCdjybTxD-LPf_ylEcke77ODhj6OUz0us`;
    try {
      const response = await axios(url);
      if (id) {
        setBookDetail(response.data);
      } else {
        setBooks(response.data.items);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBook();
  }, [search]);

  return (
    <BookContext.Provider
      value={{ getBook, setSearch, loading, search, books, bookDetail }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;
