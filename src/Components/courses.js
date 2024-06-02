import React, { useEffect } from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import Course from './course'
import { useNavigate } from 'react-router-dom'

function Courses() {

  const navigate = useNavigate()

  const login = localStorage.getItem('user')

  function UserLogin()
  {
    if(!login)
      {
        navigate('/')
      }
      else
      {
        navigate('/courses')
      }
  }

  useEffect(()=>{

      UserLogin()

  },[])

  return (
    <>
        <Navbar/>
        <Course/>
        <Footer/>

    </>
  )
}

export default Courses
