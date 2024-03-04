import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Query {
    user {
      _id
      firstName
      lastName
      email
      bio
      profilePicUrl
      bannerUrl
    }
  }
`;

export const QUERY_USER_BY_ID = gql`
  query Query($userId: ID) {
    userById(userId: $userId) {
      _id
      firstName
      lastName
      bio
      profilePicUrl
      bannerUrl
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query Query {
    product {
      _id
      name
      description
      image
      price
      quantity
    }
  }
`;

export const QUERY_PRODUCT_BY_ID = gql`
  query Query($productId: ID) {
    productById(productId: $productId) {
      _id
      name
      description
      image
      price
      quantity
    }
  }
`;
