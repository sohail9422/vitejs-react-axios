import { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [data, sentData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      'https://picsum.photos/v2/list?page=2&limit=10'
    );
    sentData(response.data);
    console.log(data);
  };
  useEffect(()=>{
    getData()

  },[])
  return (
    <>
      <button
        onClick={getData}
        style={{
          background: 'teal',
          width: '200px',
          padding: '15px',
          color: 'white',
          fontSize: '20px',
        }}
      >
        Get Data
      </button>
      {data.map((elem, key) => {
        return (
          <div
            key={key}
            style={{
              background: 'white',
              padding: '20px',
              display: 'flex',
              color: 'black',
              justifyContent:'space-between',
              width:'300px'
            }}
          >
            <img src={elem.download_url} alt="image" width="80" height="80" />
            <h4>{elem.author}</h4>
          </div>
        );
      })}
    </>
  );
};
export default App;
