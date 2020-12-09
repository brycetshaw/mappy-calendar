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
      isRoot
      name
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
      code
      parentID
      parent {
        id
        isRoot
        name
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
        code
        parentID
        parent {
          id
          isRoot
          name
          description
          code
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      isRoot
      name
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
      code
      parentID
      parent {
        id
        isRoot
        name
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
        code
        parentID
        parent {
          id
          isRoot
          name
          description
          code
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      isRoot
      name
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
      code
      parentID
      parent {
        id
        isRoot
        name
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
        code
        parentID
        parent {
          id
          isRoot
          name
          description
          code
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
