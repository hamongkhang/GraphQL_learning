const { argsToArgsConfig } = require('graphql/type/definition')
const {books,authors} =require('../data/static')
const resolvers={
    Query:{
        books:()=>books,
        authors:()=>authors,
        book:(parent,args)=>books.find(book=>book.id==args.id),
        author:(parent,args)=>authors.find(author=>author.id==args.id)
    },
}
module.exports=resolvers