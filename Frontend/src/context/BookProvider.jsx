import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
export const BookContext = createContext();

export default function BookProvider({ children }) {
    
    const [book, setBook] = useState([]);

    const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book");
          const storedTitle = localStorage.getItem("searchValue");
          const filteredBooks = res.data.filter(item => item.name.toLowerCase().includes(storedTitle.toLowerCase()));
          setBook(filteredBooks);
        } catch (error) {
          console.log(error);
        }}
  
    useEffect(() => {
      
      getBook();
    }, []);
  return (
    <BookContext.Provider value={[book,setBook,getBook]}>
      {children}
    </BookContext.Provider>
  );
}
export const useBook = () => useContext(BookContext);
