/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItinerary = /* GraphQL */ `
  subscription OnCreateItinerary($owner: String!) {
    onCreateItinerary(owner: $owner) {
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
export const onUpdateItinerary = /* GraphQL */ `
  subscription OnUpdateItinerary($owner: String!) {
    onUpdateItinerary(owner: $owner) {
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
export const onDeleteItinerary = /* GraphQL */ `
  subscription OnDeleteItinerary($owner: String!) {
    onDeleteItinerary(owner: $owner) {
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
