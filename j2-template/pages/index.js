import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import styles from '../styles/Layout.module.css'
import { sanityClient, urlFor } from '../utils/sanity'


export default function Home() {
  console.log();
  return (
    <div>
      <h1>J2 JamStack Template</h1>
    </div>
  )
}

// export async function getStaticProps() {
//   const data = await sanityClient.fetch(
//       `*[_type == "post"]{
//           {
//               title,
//               mainImage,
//               slug,
//           },
//       }`
//   );

//   return {
//       props: {
//           post: data
//       },
//   };
// }