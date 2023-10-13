"use client"
import { useEffect, useState } from "react"

const Page = () => {
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [link, setLink] = useState("")
   const [level, setLevel] = useState("")

   useEffect(() => {}, [])

   const fetchLastCourseId = async () => {
      const response = await fetch("/api/courses/")
      const data = await response.json()
      const lastCourse = data[data.length - 1]
      return lastCourse.id
   }

   const handleCreate = async (e) => {
      e.preventDefault()
      console.log(title, description, link, level)

      const courseId = await fetchLastCourseId()
      console.log(courseId)

      const res = await fetch("/api/courses/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            id: courseId + 1, // Assuming ids are incremental
            title,
            description,
            link,
            level,
         }),
      })
      //   const course = await res.json()
      //   console.log(course)
      window.location.href = "/"
   }

   return (
      <>
         <div className="">
            <h1 className="card">Create New Course</h1>
            <div
               className="container"
               style={{ marginBottom: "50px", marginTop: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
               <input
                  className="input-text"
                  type="text"
                  placeholder="Course title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
               <input
                  className="input-text"
                  type="text"
                  placeholder="Course description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />
               <input className="input-text" type="text" placeholder="Course Link" value={link} onChange={(e) => setLink(e.target.value)} />
               <input
                  className="input-text"
                  type="text"
                  placeholder="Course Level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
               />
               <div style={{ marginTop: "25px" }}>
                  <button onClick={() => (window.location.href = "/")} className="search-button" type="button">
                     Cancel
                  </button>
                  <button onClick={handleCreate} className="search-button" type="submit">
                     Create
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Page
