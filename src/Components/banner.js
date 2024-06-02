import React from 'react'
import banner from './imges/banner.avif'

function Banner() {
  return (
    <>  
        <div className='container dark:bg-slate-950  max-w-screen-2xl  md:px-14 py-5 px-14 pt-20 mt-16'>
            <div className='flex md:flex-row flex-col gap-10'>
            <div className='md:w-1/2 w-[100%] mt-16 order-2 md:order-1'>
            <div className='text-4xl text-center md:text-left'>
            <h3><span className='dark:text-white'>Hello, Welcome here to learn something</span>  <span className='text-red-500'>new everyday!!!</span> </h3>
            </div>
            <div className='mt-10 text-lg text-center md:text-left dark:text-white'>
                <p>Looking to add new skills? Is there a hobby you’ve wanted to try? We’re Udemy, a leading destination for learning and teaching online.

If you’re new to online learning and not sure where to start, you’re not alone. We’ve curated a free collection of courses for professionals. Take one of these courses and learn new skills (on us).</p>
            </div>
            <div className='mt-10 flex flex-col gap-5'>
            <label className="border-2 px-3 py-2.5 rounded-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow outline-none dark:bg-slate-950 dark:text-white dark:outline-1" placeholder="Email" />
            </label>
            <button className="cursor-pointer px-3 py-2 bg-primary  text-white  border rounded-md md:w-[20%] w-[50%]">Get Started</button>
            </div>
            <div>
            </div>
            </div>
            <div className='md:w-1/2 w-[100%] order-1 '>
                <div>
                    <img src={banner} alt="..." className='dark:rounded-xl' />
                </div>
            </div>
            </div>
        </div>
        
    </>
  )
}

export default Banner
