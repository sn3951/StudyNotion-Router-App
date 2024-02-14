import React from 'react'
import Base from '../components/Base'
import signUpImg from '../assets/signup.png'
const Signup = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Base
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build Skills For Today,Tomorrow, and Beyond."
        desc2="Education to future-proof your career."
        image={signUpImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup