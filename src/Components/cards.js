import React from 'react'

import Login from './login'

function Cards({item,viewBook}) {


  return (

    <div className=' w-50 m-2'>
        <div className="card md:w-96 bg-base-200 shadow-xl md:px-7 md:my-6 md:pt-5 dark:bg-slate-950 dark:text-white dark:border-2  hover:scale-105 hover:bg-opacity-35 hover:shadow-2xl transition-all duration-500 cursor-pointer">
  <figure><img src={item.image} className='h-[300px] w-[500px]' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-medium">
      {item.name}
      <div className="border-1 px-2 py-0.5 rounded-2xl font-normal text-sm bg-pink-600 text-white">{item.catageory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between mt-2">
      <div className="border-2 border-black px-1.5 py-0.5 rounded-2xl line-through hover:bg-pink-600 hover:text-white dark:border-1.5 dark:border-white">RS.{item.price}.00</div> 
      <div className="border-2 border-black px-1.5 py-0.5 rounded-2xl hover:bg-pink-600 hover:text-white dark:border-1.5 dark:border-white"

        onClick={()=>viewBook()}

      >View</div>
      <Login/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
