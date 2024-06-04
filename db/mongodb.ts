import {MongoClient} from "mongodb";

const dbUrl = "mongodb://root:example@localhost:27017/";
let client = new MongoClient(dbUrl)
let clientPromise = client.connect()
export default clientPromise;

