
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setdata] = useState([])

  const getdata = async () => {

    const responce = await axios.get('https://picsum.photos/v2/list');
   
   setdata(responce.data)
   
   
   
    console.log(responce);
   
  };

  return (
    <div>
      <button onClick={getdata}>get data</button>
      <div>
        {data.map((elem)=>{
          return <h3>helloo,{elem.author}</h3>
        })}
      </div>
    </div>
  );
}

export default App;