import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [userData, setuserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    (async () => {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`);
        if (mounted) {
          setuserData(response.data);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setuserData([]);
          setLoading(false);
        }
      }
    })();

    return () => { mounted = false };
  }, [index])

  return (
    <div className='bg-black min-h-screen p-4 text-white flex flex-col justify-between'>
      
      <div>
        <div className="flex items-center justify-center h-15">
          <h2 className='font-bold text-4xl text-amber-300'>Gallery</h2>
        </div>
      
        <div className='mt-5 flex flex-wrap justify-center gap-5 min-h-[50vh] relative'>
          {loading ? (
            <h3 className='text-gray-400 text-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              Loading...
            </h3>
          ) : (
            userData.map(function(elem, inx){
              return (
                <div key={inx} className='w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.25rem)]'>
                  <Card elem={elem}/>
                </div>
              )
            })
          )}
        </div>
      </div>

      <div className='flex items-center justify-center h-24 gap-10 mt-auto'>
        <button 
          onClick={() => { if(index > 1) setIndex(index - 1) }} 
          disabled={index <= 1}
          className={`w-20 h-10 text-black rounded font-bold transition-all ${
            index <= 1 ? 'bg-gray-600 cursor-not-allowed opacity-50' : 'bg-amber-400 cursor-pointer'
          }`}
        >
          Prev
        </button>
        
        <p className="font-medium">Page {index}</p>
        
        <button 
          onClick={() => setIndex(index + 1)}
          className='bg-amber-400 w-20 h-10 text-black rounded cursor-pointer font-bold'
        >
          Next
        </button>
      </div>
      
    </div>
  )
}

export default App