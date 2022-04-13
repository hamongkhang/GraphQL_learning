const { argsToArgsConfig } = require('graphql/type/definition')
const {books,authors} =require('../data/static')
const Author =require('../models/Author')
const Book =require('../models/Book')
const resolvers={
    Query:{
        books:()=>books,
        authors:()=>authors,
        book:(parent,args)=>books.find(book=>book.id==args.id),
        author:(parent,args)=>authors.find(author=>author.id==args.id),
    },
    Book:{
        author:(parent,args)=>authors.find(author=>parent.authorId==author.id)
    },
    Author:{
        books:(parent,args)=>books.filter(book=>book.authorId==parent.id)
    },
    Mutation:{
        createAuthor: async(parent,args)=>{
            const newAuthor=new Author(args)
            return await newAuthor.save()
        },
        createBook:async(parent,args)=>{
            const newBook=new Book(args)
            return await newBook.save()
        }
    }
}
module.exports=resolvers