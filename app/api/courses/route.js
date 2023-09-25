import courses from "./data.json"
import { NextResponse } from "next/server"

export async function GET(request) {
   // return NextResponse(courses) // this returns only a string of text
   return NextResponse.json(courses)
}
