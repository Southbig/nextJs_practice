import react, { useState } from 'react'
import Link from 'next/link'
import Seo from './seo'

export default function Home() {
  const [count, setCount] = useState(0)
  const handlePlus = () => {
    console.log('count', count)
    setCount(prev => prev + 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  return <>

    <Seo title='main'></Seo>
    <h1>main</h1>
    <button onClick={handlePlus}>Click !</button>
    <button onClick={handleReset}>reset</button>
    <h3>{count}</h3>

    <style jsx>{`      
  h1 {
    color: red;
  }
  
    `}</style>
  </>
}