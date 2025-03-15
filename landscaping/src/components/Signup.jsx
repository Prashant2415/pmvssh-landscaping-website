import React, { useState } from 'react'
import registration from "../images/registration.jpg"
import { PrimaryButton } from '../commonComponents/ButtonComponent'
import "./component.css"
import { LSHeading } from '../commonComponents/Common'
import { Link, useNavigate } from 'react-router-dom'

import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth, db } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
const Signup = () => {
  const [input,setInput] = useState({fName: "",lName:"",email:"",password:""});
  const [userDetails, setUserDetails] = useState([]);
  const navigate = useNavigate();
  const handleUserInput=(event)=>{
    const {name, value} = event.target;
    setInput({...input,[name]: value});
  }

  const [error, setError] = useState([]);
  const handleFormSubmit= async(event)=>{
    event.preventDefault();
    let tempError={};
    const {fName,lName,email,password} = input;
    if(!fName.trim()) tempError.fName="First name is required";
    if(!lName.trim()) tempError.lName="Last name is required";
    if(!email.includes("@")) tempError.email="Invalid email address";
    else if(!email.trim()) tempError.email="Email is required";
    if(!password.trim()) tempError.password="Password is required";
    if(Object.keys(tempError).length > 0)
    {
      setError(tempError);
    }
    else
    {
      try {
        await createUserWithEmailAndPassword(auth,email,password);
        const user = auth.currentUser;
        console.log(user);
        console.log("User details registered successfully");
        if(user)
        {
          await setDoc(doc(db, "UserDetails",user.uid),{
            firstName: fName,
            lastName: lName,
            email: email,
            password:password
          })
        }
        navigate("/login")
      } catch (error) {
        console.log(error.message);
      }
      setUserDetails([...userDetails,input]);
      setError({});
      setInput({fName: "",lName:"",email:"",password:""});
    }
  }
  return (
    <div className='signup-container'>
      <div className="signup-image-container">
        <img className='signup-image' src={registration} alt="Registration image" />
      </div>
      <div className="signup-form-content">
        <LSHeading>Create Account</LSHeading>
        <form>
          <label className='form-label'>First Name</label><br />
          <input type='text' className='form-input' value={input.fName} name='fName' onChange={handleUserInput} /><br />
          {error.fName && <p className='error-message p-tag'>{error.fName}</p>}
          <label className='form-label'>Last Name</label><br />
          <input type='text' className='form-input' value={input.lName} name='lName' onChange={handleUserInput} /><br />
          {error.lName && <p className='error-message p-tag'>{error.lName}</p>}
          <label className='form-label'>Email</label><br />
          <input type='email' className='form-input' value={input.email} name='email' onChange={handleUserInput} /><br />
          {error.email && <p className='error-message p-tag'>{error.email}</p>}
          <label className='form-label'>Password</label><br />
          <input type='password' className='form-input' value={input.password} name='password' onChange={handleUserInput} /><br />
          {error.password && <p className='error-message p-tag'>{error.password}</p>}
          <PrimaryButton onClick={handleFormSubmit}>Registration</PrimaryButton>
        </form>
        <p className='side-text'>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
