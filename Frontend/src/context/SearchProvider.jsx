import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext();
export default function SearchProvider({ children }) {
    const[search,setSearch]=("");
  const SearchBook = localStorage.getItem("searchValue");
  setSearch(SearchBook);
  return (
    <SearchContext.Provider value={[search,setSearch]}>
      {children}
    </SearchContext.Provider>
  );
}
export const useSearch = () => useContext(SearchContext);
