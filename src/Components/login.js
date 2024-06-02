import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import classNames from 'classnames'
import Swal from 'sweetalert2'




function Login() {


    const{register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()


    function logo()
    {
        navigate('/')
    }

    function submitData(data)
    {
        
        fetch('https://backend-gamma-wheat.vercel.app/user/signin',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then((user)=>{

            return user.json()

        }).then((result)=>{

            
            if(result.token)
            {
                navigate('/courses')
                localStorage.setItem('user',JSON.stringify(result.isMatch))
                localStorage.setItem('token',result.token)


                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Log In successfully"
                  });
                
            }
            else
            {
                navigate('/login')

            }


        })

        reset()

    }

    

    function goPage()
    {
        navigate('/')
    }

    function GoSignUp()
    {
        navigate('/signUp')
    }

  return (
     <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mx-4 my-4 text-lg" 
                    onClick={logo}>✕</button>
                    </form>
                    <form onSubmit={handleSubmit(submitData)} >
                    <div className='space-y-5 mx-3'>
                    <h3 className="font-bold text-xl">Log In</h3>
                    <div className='space-y-1'>
                        <label htmlFor="email" className='block'>Email</label>
                        <input type="email" name='email' placeholder='Enter The Email' 
                        className={classNames('border-2 px-2 py-1 rounded-lg w-[100%] md:w-[70%] outline-none',{
                            'is-invalid':errors.email
                        })}

                        {...register('email',{
                            required: 'Please Enter Email Id',
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

                    <div className='space-y-1'>
                        <label htmlFor="password" className='block'>Password</label>
                        <input type="password" name='email' placeholder='Enter The Password' 
                        className={classNames('border-2 px-2 py-1 rounded-lg w-[100%] md:w-[70%] outline-none',{
                            "is-invalid":errors.password
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
                        errors.password && (<small className='mb-4'>{errors.password.message}</small>)
                    }

                    <div className='flex justify-between items-center'>
                        <button className='border hover:bg-pink-600 border-pink-700 px-4 py-1 rounded-lg bg-pink-700 text-white'
                        type='submit'
                        >Submit</button>
                        <h6>Not registered? <button className='text-blue-700 cursor-pointer underline' onClick={GoSignUp} >Signup</button></h6>
                    </div>
                    </div>
                    </form>
                </div>
            </dialog>  
    </>
  )
}
export default Login
