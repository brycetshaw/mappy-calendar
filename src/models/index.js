// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Itinerary, TimeLocation } = initSchema(schema);

export {
  Itinerary,
  TimeLocation
};