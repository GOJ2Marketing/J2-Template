import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const config = {
    dataset: 'default',
    projectId: 'wes2f84a',
    apiVersion: '2022-09-22',
    useCdn: false,
};

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const sanityClient = createClient(config);