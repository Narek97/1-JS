import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      username
      age
    }
  }
`;

export const GET_CURRENT_USERS = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;