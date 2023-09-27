import { NextResponse } from "next/server"
import courses from "../data.json"

export async function GET(request) {
   const { searchParams } = new URL(request.nextUrl)
   // console.log(request.url)
   // console.log(searchParams)
   // console.log(searchParams.get("query"))
   // console.log(searchParams.get("name"))

   // filter courses to the received query
   const query = searchParams.get("query")
   const filteredCourses = courses.filter((course) => {
      return course.title.toLowerCase().includes(query.toLowerCase())
   })

   return NextResponse.json(filteredCourses)
}
