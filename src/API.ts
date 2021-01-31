/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateItineraryInput = {
  id?: string | null,
  parentID: string,
  title?: string | null,
  description?: string | null,
  start: TimeLocationInput,
  end: TimeLocationInput,
};

export type TimeLocationInput = {
  time: string,
  lat?: number | null,
  long?: number | null,
};

export type ModelItineraryConditionInput = {
  parentID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelItineraryConditionInput | null > | null,
  or?: Array< ModelItineraryConditionInput | null > | null,
  not?: ModelItineraryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateItineraryInput = {
  id: string,
  parentID?: string | null,
  title?: string | null,
  description?: string | null,
  start?: TimeLocationInput | null,
  end?: TimeLocationInput | null,
};

export type DeleteItineraryInput = {
  id?: string | null,
};

export type ModelItineraryFilterInput = {
  id?: ModelIDInput | null,
  parentID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelItineraryFilterInput | null > | null,
  or?: Array< ModelItineraryFilterInput | null > | null,
  not?: ModelItineraryFilterInput | null,
};

export type CreateItineraryMutationVariables = {
  input: CreateItineraryInput,
  condition?: ModelItineraryConditionInput | null,
};

export type CreateItineraryMutation = {
  createItinerary:  {
    __typename: "Itinerary",
    id: string,
    parentID: string,
    title: string | null,
    parent:  {
      __typename: "Itinerary",
      id: string,
      parentID: string,
      title: string | null,
      parent:  {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      children:  {
        __typename: "ModelItineraryConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      start:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      end:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    children:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    description: string | null,
    start:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    end:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateItineraryMutationVariables = {
  input: UpdateItineraryInput,
  condition?: ModelItineraryConditionInput | null,
};

export type UpdateItineraryMutation = {
  updateItinerary:  {
    __typename: "Itinerary",
    id: string,
    parentID: string,
    title: string | null,
    parent:  {
      __typename: "Itinerary",
      id: string,
      parentID: string,
      title: string | null,
      parent:  {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      children:  {
        __typename: "ModelItineraryConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      start:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      end:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    children:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    description: string | null,
    start:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    end:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteItineraryMutationVariables = {
  input: DeleteItineraryInput,
  condition?: ModelItineraryConditionInput | null,
};

export type DeleteItineraryMutation = {
  deleteItinerary:  {
    __typename: "Itinerary",
    id: string,
    parentID: string,
    title: string | null,
    parent:  {
      __typename: "Itinerary",
      id: string,
      parentID: string,
      title: string | null,
      parent:  {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      children:  {
        __typename: "ModelItineraryConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      start:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      end:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    children:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    description: string | null,
    start:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    end:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetItineraryQueryVariables = {
  id: string,
};

export type GetItineraryQuery = {
  getItinerary:  {
    __typename: "Itinerary",
    id: string,
    parentID: string,
    title: string | null,
    parent:  {
      __typename: "Itinerary",
      id: string,
      parentID: string,
      title: string | null,
      parent:  {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      children:  {
        __typename: "ModelItineraryConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      start:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      end:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    children:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    description: string | null,
    start:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    end:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListItinerarysQueryVariables = {
  filter?: ModelItineraryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItinerarysQuery = {
  listItinerarys:  {
    __typename: "ModelItineraryConnection",
    items:  Array< {
      __typename: "Itinerary",
      id: string,
      parentID: string,
      title: string | null,
      parent:  {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      children:  {
        __typename: "ModelItineraryConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      start:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      end:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateItinerarySubscriptionVariables = {
  owner: string,
};

export type OnCreateItinerarySubscription = {
  onCreateItinerary:  {
    __typename: "Itinerary",
    id: string,
    parentID: string,
    title: string | null,
    parent:  {
      __typename: "Itinerary",
      id: string,
      parentID: string,
      title: string | null,
      parent:  {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      children:  {
        __typename: "ModelItineraryConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      start:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      end:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    children:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    description: string | null,
    start:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    end:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateItinerarySubscriptionVariables = {
  owner: string,
};

export type OnUpdateItinerarySubscription = {
  onUpdateItinerary:  {
    __typename: "Itinerary",
    id: string,
    parentID: string,
    title: string | null,
    parent:  {
      __typename: "Itinerary",
      id: string,
      parentID: string,
      title: string | null,
      parent:  {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      children:  {
        __typename: "ModelItineraryConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      start:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      end:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    children:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    description: string | null,
    start:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    end:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteItinerarySubscriptionVariables = {
  owner: string,
};

export type OnDeleteItinerarySubscription = {
  onDeleteItinerary:  {
    __typename: "Itinerary",
    id: string,
    parentID: string,
    title: string | null,
    parent:  {
      __typename: "Itinerary",
      id: string,
      parentID: string,
      title: string | null,
      parent:  {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      children:  {
        __typename: "ModelItineraryConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      start:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      end:  {
        __typename: "TimeLocation",
        time: string,
        lat: number | null,
        long: number | null,
      },
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    children:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        parentID: string,
        title: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    description: string | null,
    start:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    end:  {
      __typename: "TimeLocation",
      time: string,
      lat: number | null,
      long: number | null,
    },
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
