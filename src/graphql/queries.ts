/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncItineraries = /* GraphQL */ `
  query SyncItineraries(
    $filter: ModelItineraryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItineraries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getItinerary = /* GraphQL */ `
  query GetItinerary($id: ID!) {
    getItinerary(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
