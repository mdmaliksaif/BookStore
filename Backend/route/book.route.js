import express from "express";
import { AddBook, getBook } from "../controller/book.controller.js";

const router =  express.Router();

router.get("/", getBook);
router.post("/addBook",AddBook) 

export default router;