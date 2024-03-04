import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $image: String
    $price: Float!
    $quantity: Int!
  ) {
    addProduct(
      name: $name
      description: $description
      image: $image
      price: $price
      quantity: $quantity
    ) {
      _id
      name
      description
      image
      price
      quantity
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $name: String
    $description: String
    $image: String
    $price: Float
    $quantity: Int
  ) {
    updateProduct(
      name: $name
      description: $description
      image: $image
      price: $price
      quantity: $quantity
    ) {
      _id
      name
      description
      image
      price
      quantity
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID!) {
    deleteProduct(productId: $productId) {
      _id
    }
  }
`
