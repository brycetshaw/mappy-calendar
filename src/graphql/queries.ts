/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItinerary = /* GraphQL */ `
  query GetItinerary($id: ID!) {
    getItinerary(id: $id) {
      id
      isRoot
      name
      description
      start {
        time
        fixed
        lat
        long
        radius
      }
      end {
        time
        fixed
        lat
        long
        radius
      }
      code
      parentID
      parent {
        id
        isRoot
        name
        description
        start {
          time
          fixed
          lat
          long
          radius
        }
        end {
          time
          fixed
          lat
          long
          radius
        }
        code
        parentID
        parent {
          id
          isRoot
          name
          description
          code
          parentID
          createdAt
          updatedAt
          owner
        }
        children {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      children {
        items {
          id
          isRoot
          name
          description
          code
          parentID
          createdAt
          updatedAt
          owner
        }
        nextToken
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
        isRoot
        name
        description
        start {
          time
          fixed
          lat
          long
          radius
        }
        end {
          time
          fixed
          lat
          long
          radius
        }
        code
        parentID
        parent {
          id
          isRoot
          name
          description
          code
          parentID
          createdAt
          updatedAt
          owner
        }
        children {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
