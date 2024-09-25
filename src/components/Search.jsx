import React from "react";

function Search({ setSearch }) {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Kitap ara..."
        />
      </div>
    </div>
  );
}

export default Search;
