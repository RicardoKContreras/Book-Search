//import the gql tagged template function
const {gql} = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks : [Book]
}

type Auth {
  token: ID
  user: User
}

type Book {
  _id: ID
  authors: [String]
  description: String
  bookId: ID
  image: Boolean
  link: String
  title: String

}

input saveBookInput {
  authors: [String!]
   description: String!, 
   bookId: ID!, 
   image: Boolean!,
    link: String!, 
    title: String!
}

type Query {
    me: User
    users : [User]
    user(username: String!): User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(input: saveBookInput): User
  removeBook(bookid: ID!): User
}
`;

//export the typeDefs
module.exports = typeDefs;