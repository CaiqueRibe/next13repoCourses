import courses from "./data.json"
import { NextResponse } from "next/server"
import { v4 as uuid } from "uuid"

export async function GET(request) {
   // return NextResponse(courses) // this returns only a string of text
   return NextResponse.json(courses)
}

// installing UUID to create a new Random UUID

export async function POST(request) {
   // const course = await request.json()
   // const { title, description, level, link } = course

   const { title, description, level, link } = await request.json()
   const newCourse = {
      id: uuid(),
      title,
      description,
      level,
      link,
   }

   courses.push(newCourse)

   console.log(title, description, level, link)

   return NextResponse.json({ ...courses, message: "Course created" })

   // return NextResponse.json(courses)
   // return NextResponse.json({ message: "Course created" })

   // return NextResponse.json(course)
}
