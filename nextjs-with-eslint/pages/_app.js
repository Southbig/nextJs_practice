import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return <>
    <Link href="/">one</Link> <Link href="/about">two</Link>
    <Component {...pageProps} />
  </>
}