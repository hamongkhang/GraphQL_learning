const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Book {
    id: ID
    name:String
    genre:String
}
type Author{
    id:ID!
    name:String
    age:Int

}
type Query{
    books:[Book]
    authors:[Author]
    book(id:ID!):Book
    author(id:ID!):Author
}
`
module.exports=typeDefs