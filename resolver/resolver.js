const { argsToArgsConfig } = require('graphql/type/definition')
const {books,authors} =require('../data/static')
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
        createAuthor:(parent,args)=>args,
        createBook:(parent,args)=>args
    }
}
module.exports=resolvers