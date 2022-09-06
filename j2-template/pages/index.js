import { sanityClient, urlFor } from '../utils/sanity'
import Card from '../components/Card';
import homeStyles from '../styles/Home.module.css'



export default function Home(props) {
  console.log(props.data);
  return (
    <div className={homeStyles.body}>
      <h1>J2 JamStack Template</h1>
      <div className={homeStyles.cardContainer}>

        {props.data.map((e) => {
          return (
            // <Card title={e.title} image={e.mainImage.asset._ref}/>
            <Card key={e.slug.current} title={e.title} image={urlFor(e.mainImage.asset._ref).url()}/>
          )
        })}

      </div>
    </div>
  )
}

//GROQ QUERY TO SANITY
export async function getStaticProps() {
  const data = await sanityClient.fetch(
      `*[_type == "post"]{
              title,
              mainImage,
              slug,
      }`
  );

  return {
          props: {data}
  };
}


