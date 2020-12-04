// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Code = {
  "FIXED": "FIXED",
  "FLEXIBLE": "FLEXIBLE",
  "TRANSIT": "TRANSIT"
};

const { Itinerary, TimeLocation } = initSchema(schema);

export {
  Itinerary,
  Code,
  TimeLocation
};