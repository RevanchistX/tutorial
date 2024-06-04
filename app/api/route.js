import {NextResponse} from "next/server";
import clientPromise from "../../db/mongodb";

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db("admin");
        const log = await db.collection("system.users").find({}).toArray();
        return NextResponse.json(log, {status: 200});
    } catch (e) {
        console.log("error fetching from db", e)
    }
}

export async function POST(request) {
    return NextResponse.json({message: "Hello World"}, {status: 200});
}

