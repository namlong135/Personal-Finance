import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  export enum UserStatus {
    ACTIVE
    INACTIVE
    PENDING
  }

  export enum UserType {
    ADMIN
    USER
    GUEST
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    status: UserStatus!
    type: UserType!
    createdAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      status: UserStatus
      type: UserType
    ): User!

    login(email: String!, password: String!): AuthPayload!
  }
`;
