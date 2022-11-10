import Link from 'next/link'
import Seo from './seo'
export default function About() {
  return <>
    <Seo title='about'></Seo>
    <h1>about</h1>
    <style jsx>{`
      h1 {
        color: blue;
      }
    `}</style>
  </>
}