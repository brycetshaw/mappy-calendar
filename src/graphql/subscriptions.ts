/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItinerary = /* GraphQL */ `
  subscription OnCreateItinerary($owner: String!) {
    onCreateItinerary(owner: $owner) {
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
export const onUpdateItinerary = /* GraphQL */ `
  subscription OnUpdateItinerary($owner: String!) {
    onUpdateItinerary(owner: $owner) {
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
export const onDeleteItinerary = /* GraphQL */ `
  subscription OnDeleteItinerary($owner: String!) {
    onDeleteItinerary(owner: $owner) {
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
