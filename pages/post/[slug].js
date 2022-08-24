import React from 'react'
import { client, urlFor } from '../../Sanity/client'
import { Nav } from '../../components'
import {Avatar, Image, message} from 'antd'
import {useForm} from 'react-hook-form'
import Link from 'next/link'

function Post({data}) {
    const {handleSubmit, register, formState:{errors}} = useForm()
    const {comments} = data[0]
    const onsubmit = async(data) => {
        message.success('Comment submitted, It Will apear when is approved by the admin')
        await fetch("/api/comment",{
            method: "POST",
            body: JSON.stringify(data)
        }).then( console.log('submitted')).catch((err)=> console.log(err))
    }
  return (
    <section className='overflow-hidden'>
        <Nav/>
        {data.map((item, index)=> 
        <section className='max-w-4xl m-auto mt-20' key={index}>
        <div className='flex items-center justify-between'>
        <div className='flex'>
        <Avatar className='shadow shadow-yellow-600' size={70} src={<img src={urlFor(item.author.image)} alt={item.author.name} />}/>
        <div className='flex flex-col mx-1 my-2 lg:my-0 lg:mx-5'>
        <h1 className='my-1 font-semibold'>{item.author.name}</h1>
        <h1 className='my-1 italic'>{item._createdAt.slice(0,10)}</h1>
        </div>
        </div>
        <div className='mx-2'>
            <Link href={item.link}>Visit</Link>
        </div>
        </div>
        <div className='mt-5 w-11/12  lg:w-9/12 m-auto'>
            <h1 className='lg:text-4xl text-2xl font-semibold text-center'>{item.body[0].children[0]?.text}</h1>
            <p className='text-left text-base mt-5'>{item.body[1]?.children.map((item)=> item?.text)}</p>
            <Image preview={false} className=' my-10 box transition ease-in-out duration-500' src={urlFor(item?.body[2])} alt={item?.title}/>
            <h2 className='font-bold text-3xl'>{item.body[3]?.children.map((item)=> item?.text)}</h2>
            <p className='text-base my-2'>{item.body[4]?.children.map((item)=> item?.text)}</p>
            <p className='text-base my-2'>{item.body[5]?.children.map((item)=> item?.text)}</p>
            <p className='text-base my-2'>{item.body[6]?.children.map((item)=> item?.text)}</p>
            <p className='text-base my-2'>{item.body[7]?.children.map((item)=> item?.text)}</p>
            <Image preview={false} className='h-1/2 my-10 box transition ease-in-out duration-500' src={urlFor(item.body[8])} alt={item?.title}/>
            <p className='text-base my-2'>{item.body[9]?.children.map((item)=> item?.text)}</p>
            <p className='text-base my-2'>{item.body[10]?.children.map((item)=> item?.text)}</p>
            <Image preview={false} className='h-1/2 my-10 box transition ease-in-out duration-500' src={urlFor(item.body[11])} alt={item?.title}/>
            <p className='text-base my-2'>{item.body[12]?.children.map((item)=> item?.text)}</p>
            <p className='text-base my-2'>{item.body[13]?.children.map((item)=> item?.text)}</p>
            <p className='text-base my-2'>{item.body[14]?.children.map((item)=> item?.text)}</p>
            <div className='w-full mb-3 rounded-xl bg-yellow-300 h-1'></div>
        </div>
    </section>
        )}
        
        <div className='lg:max-w-2xl m-auto p-2 lg:p-5 my-5 bg-stone-50 drop-shadow-xl rounded'>
            <h1 className='text-xl text-center font-semibold mt-2 mb-10'>Comments</h1>  
        {comments.length <= 0 && (
            <h1>No Comments posted be the first!!</h1>
        )}
        {comments.map((itm, index)=> 
        <div key={index} className='flex justify-center text-left lg:items-center my-2'>
            <h1 className='text-green-400 font-semibold mx-2 lg:mx-3 underline'>{itm.name}</h1>
            <p>-{itm.message}</p>
        </div>
        )}
        </div>
        <div className=' max-w-5xl my-10 lg:pb-10 m-auto'>
            <form className='w-8/12 m-auto' onSubmit={handleSubmit(onsubmit)}>
            <h1 className='text-center text-xl text-semibold my-2'>Submit a Comment</h1>
                <input type="hidden" value={data[0]?._id} name='_id' {...register("_id", {required: true})}/>
                <div className='flex flex-col my-2'>
                    <label className='lg:text-xl text-base font-normal my-1'>Name</label>
                    <input type="text" name='name' {...register("name", {required: true})} className='border-b focus:outline-none text-black focus:ring ring-yellow-100' />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='lg:text-xl font-normal text-base my-1'>Email</label>
                    <input type="email" name='email' placeholder='xyz@gmail.com' {...register("email", {required: true})} className='border-b focus:outline-none focus:ring ring-yellow-100 text-black'/>
                </div>
                <div className='flex flex-col my-2'>
                    <label className='lg:text-xl text-base font-normal my-1'>Message</label>
                    <textarea cols="30" name='message' placeholder='i like this blog...' rows="7" {...register("message", {required: true})} className='border-2 text-balck rounded focus:outline-none focus:ring ring-yellow-100'/>
                </div>
                <button type='submit' className='w-1/4 m-auto ml-20 lg:ml-60 hover:bg-black hover:font-semibold hover:text-white transition ease-in-out duration-500 py-1 border-2 border-black rounded'>Submit</button>
            </form>
            <div className=' flex flex-col justify-center my-2 p-4 items-center'>
            {errors.name  && (
                <span className='text-base font-semibold text-center'>Name is Required</span>
            )}
            {errors.email  && (
                <span className='text-base font-semibold text-center'>email is Required</span>
            )}
            {errors.message  && (
                <span className='text-base font-semibold text-center'>message is Required</span>
            )}
            </div>
        </div>
    </section>
  )
}

export default Post

export const getStaticPaths = async()=> {
    const query = `*[_type == "post"]{
        slug{
            current
        }
    }`
    const data = await client.fetch(query)
    const paths = data.map((item)=> ({
        params:{
            slug: item.slug.current
        }
    }))
    return{
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async({params : {slug}})=> {
    const blogQuery = `*[ _type == 'post' && slug.current == '${slug}']{
        title,link, _id, body, author ->{
            name, image
        },
        'comments': *[_type == 'comments' && approved == true && post._ref == ^._id],
        _createdAt
    }`
    const data = await client.fetch(blogQuery)
    return{
        props: {
            data
        },
        revalidate: 60,
    }
}