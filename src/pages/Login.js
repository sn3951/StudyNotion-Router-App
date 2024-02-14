import React from 'react'
import Base from '../components/Base'
import loginImg from '../assets/login.png'

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Base
        title="Welcome Back"
        desc1="Build Skills For Today,Tomorrow, and Beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login