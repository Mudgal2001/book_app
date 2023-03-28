
const router = require("express").Router();
const Book = require("../models/Book");

//creating a book
router.post("/", async (req, res) => {
    const newBook = new Book(req.body);
    try {
      const savedBook = await newBook.save();
      res.status(200).json(savedBook);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;