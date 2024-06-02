import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './cards';
import { useNavigate } from 'react-router-dom';
import Login from './login'


function FreeBooks() {

  const[books,setBooks] = useState([])

  const navigate = useNavigate();

  const login = localStorage.getItem('user')

  function viewBook()
  {
    if(login)
      {
        navigate('/courses')
      }
      else
      {
        navigate(document.getElementById('my_modal_3').showModal())
      }
  }

  function getData(){

      fetch('https://backend-gamma-wheat.vercel.app/books',{

      headers:{

        authorization : localStorage.getItem('token')
      }


      }).then((data)=>{

          return data.json()

      }).then((result)=>{

          setBooks(result)
          

      })

  }

  useEffect(()=>{

      getData();

  },[])

    const Data = books.filter((item)=>{

            return item.catageory === 'Free'

    })


    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <>
        <div className='container  max-w-screen-2xl dark:bg-slate-950 dark:text-white  md:px-14 py-5 px-14 pt-20'>
            <div className='space-y-5 mb-10'>
                <h3 className='text-2xl text-center md:text-left'>Free Offered Courses</h3>
                <p className='text-lg text-center md:text-left md:w-[70%] w-[100%]'>Learn valuable, practical skills from free online video courses. Explore tech essentials and keep pace with change. Become more focused and productive. Top it off with courses that round out your skills and enrich your day to day.</p>
            </div>
        <div className=' mb-20'>

        <Slider {...settings}>
        
          {
            Data.map((item,idx)=>{

                  return(
                  <div>
                  <Cards item={item} viewBook={viewBook} />
                  </div>)
            })
          }

      </Slider>
        
      <Login/>
            
          </div>
        </div> 
    </>
  )
}

export default FreeBooks
