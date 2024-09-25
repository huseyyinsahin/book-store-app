import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("labirent");
  const [loading, setLoading] = useState(false);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=relevance&maxResults=18&printType=books&key=AIzaSyBCdjybTxD-LPf_ylEcke77ODhj6OUz0us`;

  const getBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setBooks(response.data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, [search]);

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">Kitaplarımız</h1>
        <p className="mt-3 text-gray-500">
          Okuyan biri ölmeden önce binlerce hayat yaşayabilir... Okumayan biri
          tek bir hayat yaşar.
        </p>
        <Search setSearch={setSearch} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {books?.map((book) => {
            return <BookCard key={book?.id} book={book} />;
          })}
        </div>
      )}
    </section>
  );
};

export default HomePage;
