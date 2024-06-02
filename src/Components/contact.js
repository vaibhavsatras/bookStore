import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Contact() {

    const {register,handleSubmit,formState:{errors}} = useForm()

    const navigate = useNavigate()

  const login = localStorage.getItem('user')

    function SubmitOn(data)
    {
        console.log(data)

    }

  function UserLogin()
  {
    if(!login)
      {
        navigate('/')
      }
      else
      {
        navigate('/contact')
      }
  }

  useEffect(()=>{

      UserLogin()

  },[])


  return (
    <>
            <div>
                <div className="md:w-[40%] w-[100%] mx-4 md:mx-auto mt-11">
                    <div className="">
                    <div className="modal-box">
                        <form method="dialog">
                        <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mx-4 mt-5 text-lg">✕</Link>
                        </form>
                        <div className='mx-4 my-2'>
                        <h3 className="font-bold md:text-xl text-lg  mb-5">Contact Us</h3>

                        <form onSubmit={handleSubmit(SubmitOn)} >

                            <div className='mt-4 md:mt-5 space-y-1 '>
                                <label htmlFor="name" className='block'>Name</label>
                                <input type="text" className='outline-none border-2 px-6 py-1.5 rounded-lg md:w-[70%] w-[100%]'
                                 placeholder='Enter The Name' name='name'
                                 
                                 {...register('name',{
                                    required: 'Please Enter The Name',
                                    minLength:{
                                        value: 4,
                                        message: 'Please Enter More Than 4-Character'
                                    }
                                 })}
                                 />
                            </div>

                            {
                                errors.name && (<small className='text-red-600'>{errors.name.message}</small>)
                            }


                            <div className='mt-4 md:mt-5  space-y-1 '>
                                <label htmlFor="email" className='block'>Email</label>
                                <input type="email" className='outline-none border-2 px-6 py-1.5 rounded-lg md:w-[70%] w-[100%]'
                                 placeholder='Enter The Email' name='name'
                                 
                                 {...register('email',{
                                    required: 'Please Enter The Email',
                                    pattern:{
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: 'Please Enter Valid Mail Id'
                                    }
                                 })}
                                 />
                            </div>

                            {
                                errors.email && (<small className='text-red-600'>{errors.email.message}</small>)
                            }

                            <div className='mt-4 md:mt-5 space-y-1'>
                                <label htmlFor="message" className='block'>Message</label>
                                <textarea name="text" className='outline-none border-2 px-6 py-1.5 rounded-lg 
                                md:w-[70%] w-[100%] resize-none' placeholder='Enter The Message'
                                
                                {...register('message',{
                                    required: 'Please Enter The Messsage',
                                    minLength:{
                                        value: 200,
                                        message: 'Please Enter Atleast 200-Characters'
                                    }
                                 })}
                                
                                ></textarea>
                            </div>
                            {
                                errors.message && (<small className='text-red-600'>{errors.message.message}</small>)
                            }


                            <div className='mt-5 space-y-3'>
                                <button className='bg-blue-600 text-white hover:bg-blue-500 px-4  py-2 md:w-[50%] w-[75%] rounded-3xl '>Submit</button>
                            </div>

                        </form>
                        </div>
                    </div>
                    </div>
                
                </div>
                
            </div> 
    </>
  )
}

export default Contact
