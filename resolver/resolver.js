const {books,authors} =require('../data/static')
const resolvers={
    Query:{
        books:()=>books,
        authors:()=>authors
    },
}
module.exports=resolvers