const Book =require('../models/Book')
const Author =require('../models/Author')

const getMethods={
    getAllBooks:async()=> await Book.find(),
    getAllAuthors:async()=>await Author.find()
    // getOneBook:async()=>await Book.find({_id:a})
}
module.exports =getMethods