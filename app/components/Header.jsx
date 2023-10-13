import Link from "next/link"

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="logo">
               <h1>Traversy Media</h1>
            </div>
            <div className="links">
               <Link href={"/"}>Home</Link>
               <Link href="/create ">Create</Link>
               <Link href="/code/repos ">Code</Link>
               <Link href="/about ">About</Link>
               <Link href="/about/team ">Our Team</Link>
            </div>
         </div>
      </header>
   )
}
export default Header
