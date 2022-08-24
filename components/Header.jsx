import React from 'react'

function Header() {
  return (
    <section className='bg-yellow-200 group lg:max-w-7xl w-full m-auto lg:flex py-10 items-center justify-around rounded-xl lg:h-96'>
      <div className='lg:w-1/2'>
        <h1 className='lg:text-4xl lg:ml-20  font-normal lg:my-10 text-semibold text-3xl w-11/12 m-auto font-sans '>
          <span className=' ease-in-out duration-1000 group-hover:underline group-hover:italic'>Read</span>, <span className='ease-in-out duration-1000 group-hover:underline group-hover:italic'>Write</span> Eat and Repeat
        </h1>
        <p className='lg:w-10/12 my-5 lg:ml-20 text-xs w-11/12 m-auto lg:text-base font-medium gray-700 tracking-wide leading-7 align-middle '>
          Slog is an online community where writers can share their work and get feedback from others. We are a place where aspiring authors can find inspiration, learn new techniques, and connect with like minded people.
        </p>
      </div>
      <div className=' border-2 border-gray-700 lg:w-1/6 py-10 w-1/3 m-auto lg:p-10 rounded-xl ease-in-out group-hover:bg-black duration-500'>
        <h1 className='lg:text-9xl text-4xl text-center group-hover:text-white ease-in-out duration-500'>
          S
        </h1>
      </div>
    </section>
  )
}

export default Header