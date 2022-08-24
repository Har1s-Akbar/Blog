import React from 'react'
import {Card, Avatar} from 'antd'
import { urlFor } from '../Sanity/client'
import Meta from 'antd/lib/card/Meta'
import Link from 'next/link'

function Blog({data}) {
  return (
    <section className='max-w-7xl m-auto my-10 p-2 gap-10 lg:grid lg:grid-cols-3'>
      {data.map((item, index)=> 
      <Link href={`/post/${item.slug.current}`} key={index}>
      <Card className=' rounded-xl hover:w-10/12 bg-gradient-to-t from-teal-50 to-blue-300 my-10 lg:my-0 ease-in-out duration-300 m-auto w-11/12 lg:w-9/12 shadow green-500 cursor-pointer shadow-xl' cover={<img src={urlFor(item.mainImage)} alt={item.name} />}>
        <Avatar size={40} src={<img src={urlFor(item.author.image)} alt="{item.author.name}" />}/>
        <h1 className='my-2 font-semibold'>{item.title}</h1>
        <p className='my-2 text-gray-400'>{item.description}</p>
      </Card>
      </Link>
      )}
    </section>
  )
}

export default Blog