import { gql } from '@apollo/client';

export const QUERY_LISTINGS = gql`
  query listings($username: String) {
    listings(username: $username) {
      _id
      description
      createdAt
      username
      recommendationCount
      recommendations {
        _id
        createdAt
        username
        recommendationBody
      }
    }
  }
`;

export const QUERY_LISTING = gql`
  query listing($id: ID!) {
    listing(_id: $id) {
      _id
      description
      createdAt
      username
      recommendationCount
      recommendations {
        _id
        createdAt
        username
        recommendationBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      listings {
        _id
        description
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      listings {
        _id
        description
        createdAt
        recommendationCount
        recommendations {
          _id
          createdAt
          recommendationBody
          username
        }
      }
    }
  }
`;

// Do we need this (if no, change in Pages files)
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      listings {
        _id
        description
        createdAt
        username
        recommendationCount
        recommendations {
          _id
          createdAt
          username
          recommendationBody
        }
      }
    }
  }
`;
