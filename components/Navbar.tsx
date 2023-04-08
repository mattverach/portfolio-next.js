"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { SocialIcon } from "react-social-icons"

interface NavItem {
  label: string
  page: string
}



export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-[#2a2f33] dark:border-b dark:border-stone-600">
      
      <div className="justify-between md:items-center md:flex">
      <div>
        <SocialIcon
          url="https://www.linkedin.com/in/mattverach/"
          fgColor="currentColor"
          bgColor="transparent"
          target={"_blank"}
        />
        <SocialIcon
          url="https://twitter.com/Mattverach"
          fgColor="currentColor"
          bgColor="transparent"
          target={"_blank"}
        />
        <SocialIcon
          url="https://github.com/mattverach"
          fgColor="currentColor"
          bgColor="transparent"
          target={"_blank"}
        />
      </div>
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

