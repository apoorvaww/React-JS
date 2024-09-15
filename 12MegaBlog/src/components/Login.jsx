import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
//and the login here is imported so we can keep in track of the use authentication. that whenever an user uses the website, we can know if the user is logged in already or not.
import { login as authLogin } from '../store/authSlice.js'
import { Button, Input, Logo } from './index.js'
import authservice from "../../appwrite/auth.js"; //authservice is needed for authentication purposes
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if (session) {
                const userData = await authservice.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData));
                }
                navigate('/') //navigate user to root if the user is already logged in and if you get the user data here.

            }
        } catch (error) {
            setError(error.message);

        }
    }

    return (
        <div
            className="flex items-center justify-center w-full"
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center ">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline " >
                        Sign Up
                    </Link>
                </p>

                {error &&
                    <p className="text-red-600 mt-8 text-center">
                        {error}
                    </p>
                }

                {/* handle submit ek method hai jisme aap apna method send kroge ki main apne form ko is tarah handle karunga */}
                <form onSubmit={handleSubmit(login)} className="mt-8" >
                    <div className="space-y-5">
                        <Input
                            label="Email: "
                            placeholder="Enter your email: "
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            })}
                        />
                        <Input 
                        label="Password: "
                        type= "password"
                        placeholder="Enter your password"
                        {...register("password",{
                            required: true
                        })}
                        />

                        <Button
                        type="submit"
                        className="w-full"
                        >Sign In</Button>

                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login