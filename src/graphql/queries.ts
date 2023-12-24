import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query Edges {
    repositories {
      edges {
        node {
          fullName
          id
          language
          name
          ownerAvatarUrl
          reviewCount
          ratingAverage
          stargazersCount
          forksCount
          ownerName
          description
        }
      }
    }
  }
`

export const GET_LOGGED_IN_USER = gql`
  query Me {
    me {
      id
      username
    }
  }
`