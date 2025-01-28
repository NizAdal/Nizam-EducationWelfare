import React, { useState, useEffect } from 'react'

const Pagination = ({showPerPage, onPaginationChange, total}) => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showPerPage * counter;

        onPaginationChange(value - showPerPage, value);
    }, [counter]);

    const onButtonClick = (type) => {
      if(type === "prev") {
        if (counter === 1) {
          setCounter(1);
        } else {
          setCounter( counter -1);
        }
      } else if (type === "next"){
        if (Math.ceil(total/ showPerPage) === counter){
          setCounter(counter);
        } else {
        setCounter(counter+1);
      }
    }
    }

  return (
    <div className='flex justify-between px-2 pb-2'>
  <button  className={`px-6 py-2 rounded ${
          counter === 1
            ? 'bg-gray-400 text-gray-300 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600' 
        }`}
   onClick={() => onButtonClick("prev")} disabled={counter === 1}>Previous</button>
  <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600'
   onClick={() => onButtonClick("next")}>Next</button>
</div>
  )
}

export default Pagination
