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

// book.controller.js



// Controller function to add a new book
export const addBook = async (req, res) => {
    try {
        const { name, price, category, image, title } = req.body; // Destructure fields from request body

        // Create a new instance of the Book model
        const newBook = new Book({
            name,
            price,
            category,
            image,
            title
        });

        // Save the new book to the database
        const savedBook = await newBook.save();

        res.status(201).json(savedBook); // Respond with the saved book object
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
};
