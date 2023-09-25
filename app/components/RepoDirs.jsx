import Link from "next/link"

async function fetchRepoContents(name) {
   await new Promise((resolve) => setTimeout(resolve, 3000))

   const res = await fetch(
      `https://api.github.com/repos/CaiqueRibe/${name}/contents`,
      {
         next: {
            revalidate: 60,
         },
      }
   )
   const json = await res.json()
   return json
}

const RepoDirs = async ({ name }) => {
   const contents = await fetchRepoContents(name)
   const dirs = contents.filter((item) => item.type === "dir")

   return (
      <>
         <h3>Directories</h3>
         <ul>
            {dirs.map((dir) => (
               <li key={dir.path}>
                  <Link href={`/code/repos/${name}/${dir.path}`}>
                     {dir.name}
                  </Link>
               </li>
            ))}
         </ul>
      </>
   )
}

export default RepoDirs
