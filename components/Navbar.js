"use client"
import React,{useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className='bg-slate-900 text-white flex justify-between px-5 h-16 items-center'>
      <Link href={"/"} className="logo font-bold justify-center items-center flex">
        <img width={44} src="/gif/fund.gif" alt="" />
        <span>FundMe!</span>
      </Link>
      {/* <ul className='flex gap-3'>
            <li className='hover:cursor-pointer hover:transition-all hover:text-blue-200'>Home</li>
            <li className='hover:cursor-pointer hover:transition-all hover:text-blue-200'>About</li>
            <li className='hover:cursor-pointer hover:transition-all hover:text-blue-200'>Contact</li>
        </ul> */}
      <div className='relative'>
        {session && <><button onClick={()=>setshowdropdown(!showdropdown)} onBlur={()=>setTimeout(() => {
          setshowdropdown(false)
        }, 300)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mx-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>

          <div id="dropdown" className={`z-10 ${showdropdown?" ":"hidden"}  absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link href="#" onClick={()=>signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div></>
        }
        {!session &&
          <Link href={"/Login"}>
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </Link>
        }
      </div>

    </nav>
  )
}

export default Navbar
