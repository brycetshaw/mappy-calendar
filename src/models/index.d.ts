import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class TimeLocation {
  readonly time: string;
  readonly lat?: number;
  readonly long?: number;
  constructor(init: ModelInit<TimeLocation>);
}

export declare class Itinerary {
  readonly id: string;
  readonly title?: string;
  readonly parent?: Itinerary;
  readonly children?: (Itinerary | null)[];
  readonly description?: string;
  readonly start: TimeLocation;
  readonly end: TimeLocation;
  constructor(init: ModelInit<Itinerary>);
  static copyOf(source: Itinerary, mutator: (draft: MutableModel<Itinerary>) => MutableModel<Itinerary> | void): Itinerary;
}