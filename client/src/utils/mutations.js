import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_LISTING = gql`
  mutation addListing($title: String!, $description: String!) {
    addListing(title: $title, description: $description) {
      _id
      title
      description
      createdAt
      username
      recommendationCount
      recommendations {
        _id
      }
    }
  }
`;

export const ADD_RECOMMENDATION = gql`
  mutation addRecommendation($listingId: ID!, $recommendationBody: String!) {
    addRecommendation(listingId: $listingId, recommendationBody: $recommendationBody) {
      _id
      recommendationCount
      recommendations {
        _id
        recommendationBody
        createdAt
        username
      }
    }
  }
`;