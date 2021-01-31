/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItinerary = /* GraphQL */ `
  mutation CreateItinerary(
    $input: CreateItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    createItinerary(input: $input, condition: $condition) {
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
export const updateItinerary = /* GraphQL */ `
  mutation UpdateItinerary(
    $input: UpdateItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    updateItinerary(input: $input, condition: $condition) {
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
export const deleteItinerary = /* GraphQL */ `
  mutation DeleteItinerary(
    $input: DeleteItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    deleteItinerary(input: $input, condition: $condition) {
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
