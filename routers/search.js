const express = require('express');
const router = express.Router();
const Book = require('../services/book');


router.get('/search', async (req, res, next) => {
  try {
    let books = await Book.search(req.query.q);
    res.json(books);
  } catch(e) {
    next(e);
  }
});


router.get('/books/:id', async (req, res, next) => {
  try {
    let book = await Book.find(req.params.id);
    res.json(book);
  } catch(e) {
    next(e);
  }
});


module.exports = router;




