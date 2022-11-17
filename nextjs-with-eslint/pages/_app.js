import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return <>
    <Link href="/">one</Link> <Link href="/about">two</Link> <Link href="/card">card</Link> <Link href="/movie">movie</Link>
    <Component {...pageProps} />
  </>
}