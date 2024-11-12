import Link from "next/link"

export default function Navbar () {
    return(
        
      <nav className="flex w-full bg-transparent h-15 items-center   ">
            <br />
            <br />
            <br />
        
        <div>
           <Link href="http://localhost:3000" className="my-5 text-2xl text-blue-700 align-middle bg-transparent h-10 w-44 text-end ml-5 " >Home</Link>
        </div>

        <div className="flex justify-end w-4/5 items-center ">
          <div className=" flex  justify-end items-center my-1">
             <Link href="/components/crypto-news" className=" align-middle bg-transparent h-7 w-44 text-center  text-blue-700">Crypto</Link>
          </div>
          
          <div className="flex justify-center items-center my-1"> 
            <Link href="/components/sports-news" className=" align-middle bg-transparent h-7 w-44 text-center  text-blue-700">Sports</Link>
          </div>
         
        </div>
      
      </nav>
           
      
    )
 }