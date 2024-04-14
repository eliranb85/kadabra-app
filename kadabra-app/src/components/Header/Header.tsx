import React from 'react'
import Link from 'next/link'
import { FaUserCircle } from "react-icons/fa"
import { BsArrowRight  } from "react-icons/bs";

const Header = () => {
  return (
     <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
              <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-tertiary-dark">
          KADABRA
        </Link>
        <ul className="flex items-center space-x-4 ml-4">
            <li className="flex items-center">
            <Link href="/auth">
                <FaUserCircle className="curser-pointer"/>
            </Link>
            </li>
            <li className="ml-2">
            </li>
        </ul>
      </div>
      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:translate-y-2 duration-500 transition-all">
            <Link href="/">
                Home
            </Link>
        </li>
        <li className="hover:translate-y-2 duration-500 transition-all">
            <Link href="/components/dashboard">
                Dashboard
            </Link>
        </li>
        <li className="hover:translate-y-2 duration-500 transition-all">
            <Link href="/contact">
                Contact
            </Link>
        </li>
        <li className="hover:translate-y-2 duration-500 transition-all">
        
            <Link href="/login">

            <span className="flex items-center">Log in  <BsArrowRight /></span> 
            
            </Link>
           
        </li>
      </ul>
        </header>
  )
}

export default Header