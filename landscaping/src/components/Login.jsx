import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./component.css"
import loginimage from "../images/login.jpg"
import { PrimaryButton } from "../commonComponents/ButtonComponent";
import { LSHeading } from "../commonComponents/Common";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [loginData, setLoginData] = useState([]);
  const [error, setError] = useState([]);
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = input;
    let tempError = {};
    if (!email.trim()) tempError.email = "Email is required";
    else if (!email.includes("@")) tempError.email = "Invalid email address";
    if (!password.trim()) tempError.password = "Password is required";
    if (Object.keys(tempError).length > 0) {
      setError(tempError)
    }
    else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully");
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } catch (error) {
        console.log(error.message)
      }
      setLoginData([...loginData, input])
      setInput({ email: "", password: "" });
      setError({});
    }
  }
  return (
    <div className="login-container">
      <div className="login-image-container">
        <img className="login-image" src={loginimage} alt="Login image" />
      </div>
      <div className="login-content-container">
        <LSHeading>Login</LSHeading>
        <form>
          <label className='form-label'>Email</label><br />
          <input type='email' className='form-input' value={input.email} name='email' onChange={handleUserInput} /><br />
          {error.email && <p className='error-message p-tag'>{error.email}</p>}
          <label className='form-label'>Password</label><br />
          <input type='password' className='form-input' value={input.password} name='password' onChange={handleUserInput} /><br />
          {error.password && <p className='error-message p-tag'>{error.password}</p>}
          <PrimaryButton onClick={handleFormSubmit}>Login</PrimaryButton>
        </form>
      </div>

    </div>
  );
};

export default Login;
