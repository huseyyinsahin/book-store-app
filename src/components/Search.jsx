import React, { useContext, useCallback } from "react";
import { BookContext } from "../context/BookProvider";
import { debounce } from "lodash";

function Search() {
  const { setSearch } = useContext(BookContext);

  const handleSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 500),
    [setSearch]
  );

  return (
    <div className="flex justify-center mt-8">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Kitap ara..."
        />
      </div>
    </div>
  );
}

export default Search;
