// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: 'mmp8iwpb',
    dataset: process.env.NEXT_PUBLIC_DATASET,
    useCdn: true,
    apiVersion: '2022-08-22',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});



export default async function comment(req, res) {
    const {_id, name, message, email} = JSON.parse(req.body)
    try{
        await client.create({
        _type: "comments",
        post:{
            _type: 'reference',
            _ref: _id
        },
        name,
        email,
        message
        })
    }catch(err){
        res.status(500).json({message: "unable to submit the Message"})
    }
    console.log('comment submitted')
    res.status(200).json({ message: 'Comment Submitted' })
  }