import React, { useState, useRef } from 'react'

export default function movie() {
  const [movie, setMovie] = useState(null)
  const text = useRef(null)

  const handleGetText = (e) => {
    text.current = e.target.value
  }

  const handleTextSend = () => {
    if (text.current.length !== 0 && text.current) {
      (async () => {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.NEXT_PUBLIC_API_KEY}&t=${text.current}`);
        const json = await response.json()
        console.log(json);
        setMovie(json)
      })();
    } else {
      setMovie(null)
    }
  }
  const handlePressEnter = (key) => {
    console.log(key)
    if (key === 'Enter' && text.current !== null && text.current.length !== 0) {
      (async () => {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.NEXT_PUBLIC_API_KEY}&t=${text.current}`);
        const json = await response.json()
        console.log(json);
        setMovie(json)
      })();
    } else {
      setMovie(null)
    }
  }

  return <>
    <h1 className="text-3xl font-bold underline">Movie 검색</h1>
    <input type="text" onChange={handleGetText} onKeyPress={(e) => handlePressEnter(e.code)} />
    <button onClick={handleTextSend} >검색</button>
    {
      movie && movie?.Response !== 'False' ?
        <div className='movies_container'>
          <img src={movie.Poster} alt="" />
          <div>{`제목: ${movie.Title}`}</div>
          <div>{`줄거리: ${movie.Plot}`}</div>
          <div>{`출연진: ${movie.Actors}`}</div>
          <div>{`개봉년도: ${movie.Year}`}</div>
          <div>{`제공 언어: ${movie.Language}`}</div>
          <div>{`평점: ${movie.imdbRating} 점`}</div>
          <div>{`runtime: ${movie.Runtime}`}</div>
        </div> : null
    }
  </>
}