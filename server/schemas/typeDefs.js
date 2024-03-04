const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    bio: String
    profilePicUrl: String
    bannerUrl: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    userById(userId: ID): User
    product: Product
    productById(productId: ID): Product
    products: [Product]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      bio: String
      profilePicUrl: String
      bannerUrl: String
    ): User
    login(email: String!, password: String!): Auth
    addProduct(
      name: String!
      description: String!
      image: String
      price: Float!
      quantity: Int!
    ): Product
    updateProduct(
      name: String
      description: String
      image: String
      price: Float
      quantity: Int
    ): Product
    deleteProduct(productId: ID!): Product
  }
`;

module.exports = typeDefs;
