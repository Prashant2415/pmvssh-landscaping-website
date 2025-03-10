import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { LSCommonElement } from '../commonComponents/LSCommonElement';
import { LSHeading, LSPara, LSTextHighlight } from '../commonComponents/Common';
import { PrimaryButton } from '../commonComponents/ButtonComponent';
const Contact = () => {

  const [userInput, setUserInput] = useState({ fullname: "", city: "", email: "", phone: "", option: "Choose any option", message: "" });
  const formRef = useRef();
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value })
  }
  console.log("data" , LSCommonElement.EMAIL_SERVICE_ID)
  const {EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID,EMAIL_PUBLIC_KEY}= LSCommonElement;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput)
    if(userInput.email.includes("@"))
    {
      emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, {
        publicKey: EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    alert("Thank you");
    setUserInput({ fullname: "", city: "", email: "", phone: "", option: "Choose any option" , message:""})
    }
    else{
      alert("Please enter the correct inputs")
    }
  }

  return (
    <div className='contact-container'>
      <div className="contact-content">
      <LSHeading>Get in Touch</LSHeading>
      <LSPara>For any inquiries or support, feel free to reach out to us at <LSTextHighlight>your-email@gmail.com.</LSTextHighlight> We’ll be happy to assist you!</LSPara>
      <form ref={formRef}>
        <label className='contact-label'>Full Name</label><br />
        <input className='form-input' value={userInput.fullname} name='fullname' onChange={handleUserInput} type="text" /><br />
        <label className='contact-label'>City</label><br />
        <input className='form-input' value={userInput.city} name='city' onChange={handleUserInput} type="text" /><br />
        <label className='contact-label'>Email</label><br />
        <input className='form-input' value={userInput.email} name='email' onChange={handleUserInput} type="email" /><br />
        <label className='contact-label'>Phone</label><br />
        <input className='form-input' value={userInput.phone} name='phone' onChange={handleUserInput} type="tel" /><br />
        <select className='contact-select' value={userInput.option} name='option' onChange={handleUserInput}>
          <option className='contact-option' value="lawncare">Lawn Care and Mowing</option>
          <option className='contact-option' value="maintenance">General Maintenance</option>
          <option className='contact-option' value="landscape">Landscape Design</option>
          <option className='contact-option' value="other">Other</option>
        </select><br />
        <label className='contact-label'>Message</label><br />
        <textarea className='contact-textarea' cols={60} rows={6} name="message" value={userInput.message} onChange={handleUserInput}/><br />
        <PrimaryButton className='submit-button' onClick={handleSubmit}>Submit</PrimaryButton>
      </form>
      </div>
      <div className="contact-image-container">
        <img className='contact-image' src="./src/images/contactOne.jpg" alt="Contact image" />
      </div>
    </div>
  )
}

export default Contact
