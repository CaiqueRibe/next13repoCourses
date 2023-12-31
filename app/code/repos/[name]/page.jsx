import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import Link from "next/link"
import { Suspense } from "react"

const RepoPage = ({ params: { name } }) => {
   return (
      <>
         <div className="card">
            <Link href="/code/repos" className="btn btn-back">
               Back To Repositories
            </Link>
            <Suspense fallback={<p>Loading...</p>}>
               <Repo name={name} />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
               <RepoDirs name={name} />
            </Suspense>
         </div>
      </>
   )
}

export default RepoPage
