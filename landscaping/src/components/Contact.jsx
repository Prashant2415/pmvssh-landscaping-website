import React, { useState } from 'react'

const Contact = () => {

    const [userInput, setUserInput] = useState({fullname:"",city:"",email:"",phone:"",option:"Choose any option"});

    const handleUserInput =(event)=>{
        const {name, value}= event.target;
        setUserInput({...userInput, [name]: value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(userInput)
        alert("Thank you");
        setUserInput({fullname:"",city:"",email:"",phone:"",option:"Choose any option"})
    }
  return (
    <div className='contact-container'>
      <h1>Contact us</h1>
      <form>
        <label>Full Name</label><br />
        <input value={userInput.fullname} name='fullname' onChange={handleUserInput} type="text" /><br />
        <label>City</label><br />
        <input value={userInput.city} name='city' onChange={handleUserInput} type="text" /><br />
        <label>Email</label><br />
        <input value={userInput.email} name='email' onChange={handleUserInput} type="email" /><br />
        <label>Phone</label><br />
        <input value={userInput.phone} name='phone' onChange={handleUserInput} type="tel" /><br />
        <select value={userInput.option} name='option' onChange={handleUserInput}>
            <option value="lawncare">Lawn Care and Mowing</option>
            <option value="maintenance">General Maintenance</option>
            <option value="landscape">Landscape Design</option>
            <option value="other">Other</option>
        </select><br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
