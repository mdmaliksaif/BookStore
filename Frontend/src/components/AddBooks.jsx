import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const AddBooks = ({ setOpen,getBook }) => {


  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    title: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData)
  };


 

  const handleSubmit = async (event) => {
    event.preventDefault(); 

   


    try {
      const response = await axios.post('http://localhost:4001/book/addBook',formData);
      console.log('Book added successfully:', response.data);
      getBook();
      setOpen(false); 
    } catch (error) {
      console.error('Error adding book: ', error);
    }
  };



  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 overflow-auto z-50">
      <div className="relative mx-auto mt-40 p-4 bg-white rounded-lg shadow-xl">
        <h5 className="text-xl font-medium leading-tight mb-2 text-center">
          Add Your Book
        </h5>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Book Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="text-sm font-medium text-gray-700">
              Category:
            </label>
            <select
              id="category"
              name="category"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Free">Free</option>
              <option value="Sports">Sports</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="text-sm font-medium text-gray-700">
              Image URL:
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button 
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
