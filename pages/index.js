import {Nav, Header, Blog, Footer} from '../components'
import { client } from '../Sanity/client'

export default function Home({data}) {
  return (
    <div className='overflow-hidden'>
      <Nav/>
      <Header/>
      <Blog data= {data}/>
      <Footer/>
    </div>
  )
}

export const getServerSideProps = async() => {
  const query = `*[_type == "post"]{
    body,
    description,
    mainImage,
    slug,
    title,
    author ->{
      name,
      image
    }
  }`
  const data = await client.fetch(query)

  return{
    props: {data}
  }

}