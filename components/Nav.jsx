import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className='flex justify-center p-3 bg-gray-100'>
      <div className='flex justify-betweeen items-center'>
        <h1 className='lg:text-4xl text-2xl text-semibold mx-16 lg:mx-10'>
          Slog
        </h1>
        <Link href='/'>
          <h1 className='lg:mx-10 mx-4 font-semibold hover:border-b-2 transition duration-1000 ease-in-out hover:border-black text-slate-500 hover:text-black'>
          Home
          </h1>
        </Link>
        <Link href='/about' >
          <h1 className=' lg:mx-10 mx-4 font-semibold hover:border-b-2 transition duration-1000 ease-in-out text-slate-500 hover:text-black hover:border-black'>
          About
          </h1>
        </Link>
      </div>
    </nav>
  )
}

export default Nav