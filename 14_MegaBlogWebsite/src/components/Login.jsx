import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from "react-hook-form" 


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")

        try {
            const session = await authService.login(data)

            if (session) {
                const userData = await authService.getCurrentUser()

                if(userData) dispatch (authLogin(userData));
                navigate("/")
                
            }

        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-centre w-full' >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width="100%" />
            </span>
        </div>

        <h2 className='text-center test-2xl font-bold leading-tight'>
            Sign In to your Account
        </h2>

        <p className='mt-2 text-center text-base text-black/60'>
            Don&apos;t have any Account?&nbsp;

            <Link
                to='/signup'
                className='font-medium text-primary transtion-all duration-200 hover:underline'
            >
                Sign Up to your Account
            </Link>

        </p>

        { error && <p className='text-red-500 text-center'>{error}</p> }

        {/* if error is true then show this paragraph. */}

        <form onSubmit={handleSubmit(login)} 
        className='mt-8'>

            <div className='space-y-5'>

                <Input 
                label='E-mail:'
                placeholder='Enter Your E-mail'
                type='email'
                {...register("email", {
                    required: true,
                    validate: {
                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "E-mail Address must be a valid Address",
                    }
                })}
                />

                <Input 
                label='Password: '
                type='password'
                placeholder='Enter Your Password'
                {...register("password", {
                    required: true,
                })}
                />

                <Button
                type='submit'
                className="w-full"
                >Sign In</Button>


            </div>

        </form>

        </div>
    </div>
  )
}

export default Login
