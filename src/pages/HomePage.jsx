import { useContext } from "react";
import Search from "../components/Search";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import { BookContext } from "../context/BookProvider";

const HomePage = () => {
  const { books, loading } = useContext(BookContext);

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">Kitaplarımız</h1>
        <p className="mt-3 text-gray-500">
          Okuyan biri ölmeden önce binlerce hayat yaşayabilir... Okumayan biri
          tek bir hayat yaşar.
        </p>
        <Search />
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
