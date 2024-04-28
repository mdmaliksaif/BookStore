import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AddBooks from "./AddBooks";
import { useAuth } from "../context/AuthProvider";
import { useBook } from "../context/BookProvider";
// import { useSearch } from "../context/SearchProvider";
function Course() {
  const [open, setOpen] = useState(false);

  // const [book, setBook] = useState([]);
  

  // const getBook = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:4001/book");
  //     console.log(res.data);
  //     setBook(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
    
  //   getBook();
  // }, []);

  const [book,setBook,getBook] = useBook();

  useEffect(() => {
    getBook();
  }, [localStorage.getItem("searchValue")]);

  const [authUser, setAuthUser] = useAuth();
  const isSimilarEmail = authUser.email.toLowerCase().includes("saifmalik10786@gmail.com");

const AddBook=()=>
{
  isSimilarEmail
  ? toast.success("Hello Admin")
  : toast.error("You Are Not Admin");
  setOpen(true);
}



  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          {
          <button onClick={ AddBook} className="md:-mt-10  bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 float-right ">
            Add Books
          </button>
          }
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item,key) => (
            <Cards key={key} item={item} />
          ))}
        </div>
      </div>
      {open&&<AddBooks setOpen={setOpen} getBook={getBook}/>}
    </>
  );
}

export default Course;
