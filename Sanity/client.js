import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'mmp8iwpb',
    dataset: process.env.NEXT_PUBLIC_DATASET,
    useCdn: true,
    apiVersion: '2022-08-22',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);