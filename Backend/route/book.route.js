import express from "express";
import { getBook ,addBook} from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

// POST route to add a new book
router.post("/add", addBook);

export default router;