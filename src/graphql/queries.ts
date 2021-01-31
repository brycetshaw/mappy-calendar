/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItinerary = /* GraphQL */ `
  query GetItinerary($id: ID!) {
    getItinerary(id: $id) {
      id
      parentID
      title
      parent {
        id
        parentID
        title
        parent {
          id
          parentID
          title
          description
          createdAt
          updatedAt
          owner
        }
        children {
          nextToken
        }
        description
        start {
          time
          lat
          long
        }
        end {
          time
          lat
          long
        }
        createdAt
        updatedAt
        owner
      }
      children {
        items {
          id
          parentID
          title
          description
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      description
      start {
        time
        lat
        long
      }
      end {
        time
        lat
        long
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listItinerarys = /* GraphQL */ `
  query ListItinerarys(
    $filter: ModelItineraryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItinerarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parentID
        title
        parent {
          id
          parentID
          title
          description
          createdAt
          updatedAt
          owner
        }
        children {
          nextToken
        }
        description
        start {
          time
          lat
          long
        }
        end {
          time
          lat
          long
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
