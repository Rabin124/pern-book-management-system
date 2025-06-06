const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../controllers/book.controller")

const router = require("express").Router()


router.route("/books").get(fetchBooks).post(addBook)
router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)



module.exports = router