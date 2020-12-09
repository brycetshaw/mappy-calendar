import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Code {
  FIXED = "FIXED",
  FLEXIBLE = "FLEXIBLE",
  TRANSIT = "TRANSIT"
}

export declare class TimeLocation {
  readonly time: string;
  readonly lat?: number;
  readonly long?: number;
  constructor(init: ModelInit<TimeLocation>);
}

export declare class Itinerary {
  readonly id: string;
  readonly isRoot: boolean;
  readonly name: string;
  readonly description?: string;
  readonly start: TimeLocation;
  readonly end: TimeLocation;
  readonly code?: Code | keyof typeof Code;
  readonly parent?: Itinerary;
  constructor(init: ModelInit<Itinerary>);
  static copyOf(source: Itinerary, mutator: (draft: MutableModel<Itinerary>) => MutableModel<Itinerary> | void): Itinerary;
}