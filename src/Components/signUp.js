import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Login from './login'
import {useForm} from 'react-hook-form'
import classNames from 'classnames'

function SignUp() {

  const navigate = useNavigate()
  const[flag,setFlag] = useState(false)

  const {register,handleSubmit,formState:{errors},reset} = useForm({
    mode: 'onTouched'
  })
  
  function submitData(data)
  {
    fetch('https://backend-gamma-wheat.vercel.app/user/signup',{

      method: 'POST',
      headers:{

        'Content-Type': 'application/json'

      },
      body: JSON.stringify(data)

    }).then((user)=>{

        return user.json()

    }).then((result)=>{

        if(result.email)
          {
            navigate(document.getElementById('my_modal_3').showModal())
          }
          else
          {
            navigate('/signUp')
            setFlag(true)
          }

    })

    reset()

  }

  
  function goPage()
    {
        navigate('/')
    }

  return (
    <>
            <div  className="md:w-[40%] w-[100%] mx-4 md:mx-auto mt-10 md:mt-24">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mx-4 my-4 text-lg" onClick={goPage}>✕</button>
              </form>
              <div className='space-y-5 mx-4 my-2 '>
                    <h3 className="font-bold text-lg md:text-xl">Sign Up</h3>
                <form onSubmit={handleSubmit(submitData)}>
                    <div className='space-y-1 '>
                        <label htmlFor="name" className='block'>Name</label>
                        <input type="text" name='name' placeholder='Enter The Name'
                        className={classNames("border-2 px-2 py-1 rounded-lg w-[100%] md:w-[70%] outline-none",{

                          "is-invalid":errors.name

                        })}
                        {...register('name',{
                          
                          required: "Please Enter The Name",
                          minLength: {
                              value:4,
                              message:  'Please Enter More than 4-charactors'
                          }
                        })}
                        />
                        
                    </div>
                    {
                          errors.name && (<small>{errors.name.message}</small>)
                        
                    }
                

                    <div className='space-y-1  md:mt-2 mt-3 '>
                        <label htmlFor="email" className='block'>Email</label>
                        <input type="email" name='email' placeholder='Enter The Email' 
                        className={classNames('border-2 px-2 py-1 rounded-lg w-[100%] md:w-[70%] outline-none',{
                          "is-invalid":errors.email
                        })}
                        {...register('email',{

                          required:'Please Enter Email Id ',
                          pattern:{

                            value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message:'Please Enter The Valid Email'

                          }

                        })}
                        />
                    </div>
                    {
                          errors.email && (<small className='mb-4'>{errors.email.message}</small>)
                        
                    }
    

                    <div className='space-y-1  md:mt-2 mt-3'>
                        <label htmlFor="password" className='block'>Password</label>
                        <input type="password" name='password' placeholder='Enter The Password' 
                        className={classNames('border-2 px-2 py-1 rounded-lg w-[100%] md:w-[70%] outline-none',{
                          'is-invalid':errors.password
                        })}
                        {...register('password',{

                          required: 'Please Enter The Password',
                          pattern:{

                            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                            message: 'Please Enter The 8-Character'

                          }

                        })}
                        />
                    </div>
                        
                    {
                          errors.password && (<small>{errors.password.message}</small>)
                        
                    }

                    <div className='flex justify-between  gap-6 md:gap-0 items-center pt-2 md:mt-2 mt-3 mb-3'>
                        <button className='border hover:bg-pink-600 border-pink-700 px-4 py-1 rounded-lg
                         bg-pink-700 text-white' type='submit'>Submit</button>
                        <div className='space-x-2  flex justify-center items-center'>
                        <span className='text-[14px] md:text-lg'>have a Signup?</span>
                        <button className='text-blue-700 cursor-pointer underline text-[14px] md:text-lg' 
                        onClick={()=>document.getElementById('my_modal_3').showModal()}>Sign In</button>
                        </div>
                        <Login/>
                    </div>
                    <div>
                    <span className='text-lg text-red-700'>
                          {
                            flag ? "User Already Exists...": ""
                          }
                        </span>
                    </div>
                    </form>
                    </div> 
                    
            </div>
          </div>
    </>
  )
}

export default SignUp
