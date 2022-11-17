import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return <>
    <Link href="/">Home</Link> <Link href="/about">about</Link> <Link href="/card">card</Link> <Link href="/movie">movie</Link>
    <Component {...pageProps} />
  </>
}