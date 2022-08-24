import React from 'react'
import {Nav, Header, Footer} from '../components'

function about() {
  return (
    <section>
        <Nav/>
        <Header/>
        <section>
            <h1 className='text-center text-3xl font-semibold my-5'>About Us</h1>
            <section className='grid gap-20 py-10'>
                <div className='flex lg:flex-row flex-col max-w-4xl m-auto'>
                    <h1 className=' mx-2 text-left w-11/12  lg:w-1/2 m-auto text-base lg:text-2xl font-normal'>We are a bunch of Writers with <span className='italic font-semibold'>real zeal</span> and verve for fame and gain.
                        writing is our passion.
                        <hr className='bg-transparent border-none my-2'/>
                        <span className='font-semibold italic'>We do it like nobody</span>
                    </h1>
                    <img className='rounded-xl w-11/12 m-auto lg:w-1/3' src='https://images.unsplash.com/photo-1660679983389-50e21b396b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt="about-img" />
                </div>
                <div className='flex lg:flex-row flex-col max-w-4xl m-auto'>
                    <img className='rounded-xl w-11/12 m-auto lg:w-1/3' src='https://images.unsplash.com/photo-1659035259667-b7ff7efe29dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt="about-img" />
                    <h1 className=' mx-5 text-center w-11/12 lg:w-1/2 m-auto text-base lg:text-2xl font-normal'>Join our Team If you have capacity to <span className='italic font-semibold'>Grow</span>.
                        writing is our passion.
                        <hr className='bg-transparent border-none my-2'/>
                        <span className='font-semibold italic'>Join us or for better future</span>
                    </h1>
                </div>
            </section>
        </section>
        <Footer/>
    </section>
  )
}

export default about