import React, { useState, useRef } from 'react'
import Seo from './seo'
Seo

export default function movie() {
  const [movie, setMovie] = useState(null)
  const text = useRef(null)

  const handleGetText = (e) => {
    text.current = e.target.value
  }

  const handleTextSend = () => {
    if (text.current?.length !== 0 && text.current) {
      (async () => {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.NEXT_PUBLIC_API_KEY}&t=${text.current}`);
        const json = await response.json()
        if (json.Response === "True") {
          setMovie(json)
        } else if (json.Response === "False") {
          alert('검색어를 다시 입력 해 주세요 !')
        }
      })();
    } else {
      setMovie(null)
    }
  }
  const handlePressEnter = (key) => {
    console.log(key)
    if (key === 'Enter' && text.current !== null && text.current?.length !== 0) {
      (async () => {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.NEXT_PUBLIC_API_KEY}&t=${text.current}`);
        const json = await response.json()
        if (json.Response === "True") {
          setMovie(json)
        } else if (json.Response === "False") {
          alert('검색어를 다시 입력 해 주세요 !')
        }
      })();
    } else if (key === 'Space') {
      return
    }
    else {
      setMovie(null)
    }
  }

  return (
    <div className='mt-20'>
      <Seo title='movie'></Seo>
      <div className="flex justify-center z-99">
        <div className="w-9/12">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="영화 제목을 입력해 주세요" aria-label="Search" aria-describedby="button-addon2" onChange={handleGetText} onKeyPress={(e) => handlePressEnter(e.code)} />
            <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2" onClick={handleTextSend}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {
        movie && movie?.Response !== 'False' ?
          <div className='movies_container'>
            <div className='w-[330px] h-[450px] rounded-md'>
              <img src={movie.Poster} alt="" className='w-80 h-96 object-scale-down m-auto' />
            </div>
            <div>
              <div>{`제목: ${movie.Title}`}</div>
              <div>{`줄거리: ${movie.Plot}`}</div>
              <div>{`출연진: ${movie.Actors}`}</div>
              <div>{`개봉년도: ${movie.Year}`}</div>
              <div>{`제공 언어: ${movie.Language}`}</div>
              <div>{`평점: ${movie.imdbRating} 점`}</div>
              <div>{`runtime: ${movie.Runtime}`}</div>
            </div>
          </div> : null
      }
    </div>)
}