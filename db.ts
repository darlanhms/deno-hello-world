import { init, MongoClient } from './deps.ts'

await init();

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const db = client.database("deno-start");

export default db;