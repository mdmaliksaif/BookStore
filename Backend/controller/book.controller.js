import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};


export const AddBook = async (req, res) => {
    const { name, price, category, image, title } = req.body;
  
    try {
      const newBook = new Book({ name, price, category, image, title });
      await newBook.save();
      res.status(201).json({ message: 'Book added successfully!' });
    } catch (error) {
      console.error('Error adding book:', error);
      res.status(500).json({ message: 'Error adding book' }); // Handle errors appropriately
    }
  };