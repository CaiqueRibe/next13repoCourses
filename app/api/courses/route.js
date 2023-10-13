import courses from "./data.json"
import { NextResponse } from "next/server"
import { v4 as uuid } from "uuid"

import fs from "fs"
import path from "path"

const dataPath = "app/api/courses/data.json"

export async function GET(request) {
   // return NextResponse(courses) // this returns only a string of text
   return NextResponse.json(courses)
}
// installing UUID to create a new Random UUID
export async function POST(request) {
   // const course = await request.json()
   // const { title, description, level, link } = course

   const { title, description, level, link, id } = await request.json()

   const newCourse = {
      // id: uuid(),
      id: id || uuid(),
      title,
      description,
      level,
      link,
   }
   const rawData = fs.readFileSync(dataPath)
   const courses = JSON.parse(rawData)
   courses.push(newCourse)

   fs.writeFileSync(dataPath, JSON.stringify(courses))

   // courses.push(newCourse)
   console.log(title, description, level, link)
   return NextResponse.json({ ...courses, message: "Course created" })
   // return NextResponse.json(courses)
   // return NextResponse.json({ message: "Course created" })
}
