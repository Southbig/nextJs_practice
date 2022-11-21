import dummy from '../dummy/dummy'
import Seo from './seo';

export default function Card() {
  (async () => {
    const response = await fetch('http://localhost:3000/api/movieList');
    const json = await response.json()
    console.log(json);
  })();
  return <>
    <Seo title='card'></Seo>
    <h1>Card Component</h1>
    {
      dummy.map(el => {
        return <div className='container' key={el.id}>
          <div className='img'>{el.img}</div>
          <div>{`제목: ${el.title}`}</div>
          <div>{`소제목: ${el.Middle_title}`}</div>
          <div>일자: {el.date}</div>
          <div>가격: {el.price}</div>
        </div>

      })
    }
    <style jsx>{`
    .img {
      height: 70px;
      color: white;
      background-color: black;
      /* text-align: center; */
      display: flex;
      justify-content: center;
      align-items: center; 
      border-radius: 5px;
    }
      .container {
        margin-bottom: 10px;
        width: 200px;
        height: 150px;
        border: 1px solid lightgray;
        border-radius: 5px;
      }
    `}</style>
  </>
}