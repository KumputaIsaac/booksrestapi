const express = require("express");
const router = express.Router();
const Book = require("../models/books");

// post: create a new book
router.post("/", (req, res) => {
	book = new Book({
		name: req.body.bookname,
		author: {
			name: req.body.authorname,
			age: req.body.authorage,
		},
		genre: req.body.genre,
	});

	book
		.save()
		.then((book) => {
			res.send(book);
		})
		.catch((error) => {
			res.status(500).send("book was not stored in db");
		});
});

module.exports = router;
