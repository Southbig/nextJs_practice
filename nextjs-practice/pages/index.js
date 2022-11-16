import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  // (async () => {
  //   const response = await fetch('http://localhost:3000/api/hello');
  //   const json = await response.json()
  //   console.log(json);
  // })();

  (
    async () => {
      const response = await fetch('http://localhost:3000/api/graphql', {
        method: 'POST',
        headers: {
          'Content-type': 'applocation/json',
        },
        body: JSON.stringify({ query: `{ users { name } }` }),
        // body: JSON.stringify({ query: {} }),
      })
      console.log(response.status)
      // const json = await response.json();
      // const json = await JSON.parse(response);
      // console.log(json);
    }
  )();
  return (
    <div className={styles.container}>
      <h1>hallo Next JS with Apollo !!</h1>
    </div>
  )
}
