"use client"

import Link from "next/link"
import Courses from "./components/Courses"
import { useState, useEffect } from "react"
import LoadingPage from "./loading"
import CourseSearch from "./components/CourseSearch"

const HomePage = () => {
   const [courses, setCourses] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchCourses = async () => {
         const res = await fetch("/api/courses")
         const courses = await res.json()
         setCourses(courses)
         setLoading(false)
      }
      fetchCourses()
   }, [])

   if (loading) {
      return <LoadingPage />
   }
   return (
      <div>
         <h1>Welcome to Traversy Media</h1>
         <CourseSearch getSearchResults={(results) => setCourses(results)} />
         <Courses courses={courses} />
      </div>
   )
}

export default HomePage
