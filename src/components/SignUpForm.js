import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
const SignUpForm = ({ setIsLoggedIn }) => {
    const Navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [showPassword, setShowPassword] = useState(false)
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    function submitHandler(event) {
        event.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password Do Not Match")
        }

        setIsLoggedIn(true)
        toast.success("Account Created")
        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData,
            accountType
        }
        console.log(finalData)
        Navigate("/dashboard")
    }
    const [accountType, setAccountType] = useState("student")
    return (
        <div >
            <div
                className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button onClick={() => setAccountType("student")}
                    className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}>
                    Student
                </button>
                <button onClick={() => setAccountType("instructor")}
                    className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col ' >
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name
                            <sup className='text-pink-200'>*</sup></p>
                        <input type='text'
                            required
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                    <label className='w-full '>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name
                            <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            type='text'
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>
                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address
                            <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            type='text'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                <div className='flex gap-x-4 w-full mt-[20px]'>
                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password
                            <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            type={showPassword ? ("text") : ("password")}
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}
                            className='absolute right-3 top-[38px] cursor-pointer'>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password
                            <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            type='text'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}
                            className='absolute right-3 top-[38px] cursor-pointer'>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
                <button className='bg-yellow-50 w-full rounded-[8px] mt-6 font-medium text-richblack-900 px-[12px] py-[8px]  '>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm