import dummy from '../dummy/dummy'

export default function Card() {
  return <>
    <h1>Card Component</h1>
    {/* <img src="" alt="" /> */}
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