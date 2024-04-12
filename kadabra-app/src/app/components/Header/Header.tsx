"use client";
import Image from "next/image";

import Link from "next/link"
import { FaUserCircle } from "react-icons/fa"
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"
import { useContext } from "react"
import ThemeContext from "@/app/context/themeContext"
const Header = () => {
  const {darkTheme,setDarkTheme} = useContext(ThemeContext)
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-tertiary-dark">
          KADABRA
        </Link>
        <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/kadabra.svg"
              alt="kadabra Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        <ul className="flex items-center space-x-4 ml-4">
            <li className="flex items-center">
            <Link href="/auth">
                <FaUserCircle className="curser-pointer"/>
            </Link>
            </li>
            <li className="ml-2">
              {darkTheme?(
                <MdOutlineLightMode className="curser-pointer" 
onClick={()=>{
 setDarkTheme(false); 
 localStorage.removeItem("hotel-theme")
}}
                />
                ):(
                <MdDarkMode className="curser-pointer"
                onClick={()=>{
                  setDarkTheme(true); 
                  localStorage.setItem("hotel-theme","true")
                 }}/>
                )}
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
            <Link href="/dashborad">
                Dashborad
            </Link>
        </li>
        <li className="hover:translate-y-2 duration-500 transition-all">
            <Link href="/profile">
                Profile
            </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
