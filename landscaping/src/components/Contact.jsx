import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { LSCommonElement } from '../commonComponents/LSCommonElement';
import { LSHeading, LSPara, LSTextHighlight } from '../commonComponents/Common';
import { PrimaryButton } from '../commonComponents/ButtonComponent';
import { FormErrorText, FormInput, FormLabel } from '../commonComponents/FormElement';
const Contact = () => {

  const [userInput, setUserInput] = useState({ fullname: "", city: "", email: "", phone: "", option: "Choose any option", message: "" });
  const formRef = useRef();
  const [error, setError] = useState([]);
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value })
  }
  console.log("data", LSCommonElement.EMAIL_SERVICE_ID)
  const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID
  const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
  const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY 
  // const { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY } = LSCommonElement;

  const handleSubmit = (event) => {
    console.log("value")
    let tempError = {};
    event.preventDefault();
    if (!userInput.fullname.trim()) tempError.name = "Full name is required";
    if (!userInput.email.includes("@")) tempError.email = "Invalid email address";
    else if (!userInput.email.trim()) tempError.email = "Email address is required";
    if (!userInput.phone.length < 0) tempError.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(userInput.phone)) tempError.phone = "Invalid phone number";
    if (Object.keys(tempError).length > 0) {
      setError(tempError);
    }
    else {
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
      alert("Thank You!!")
      setUserInput({ fullname: "", city: "", email: "", phone: "", option: "Choose any option", message: "" })
      setError({});
    }
  }

  return (
    <div className='contact-container'>
      <div className="contact-content">
        <LSHeading>Get in Touch</LSHeading>
        <LSPara>For any inquiries or support, feel free to reach out to us at <LSTextHighlight>your-email@gmail.com.</LSTextHighlight> We’ll be happy to assist you!</LSPara>
        <form ref={formRef}>
          <FormLabel>Full Name</FormLabel><br />
          <FormInput type="text" value={userInput.fullname} name='fullname' onChange={handleUserInput} /><br />
          {error.name && <FormErrorText>{error.name}</FormErrorText>}<br /><br />
          <FormLabel>Email</FormLabel><br />
          <FormInput type="email" value={userInput.email} name='email' onChange={handleUserInput} /><br />
          {error.email && <FormErrorText>{error.email}</FormErrorText>}<br /><br />
          <FormLabel>Phone</FormLabel><br />
          <FormInput type="number" value={userInput.phone} name='phone' onChange={handleUserInput} /><br />
          {error.phone && <FormErrorText>{error.phone}</FormErrorText>}<br /><br />
          <FormLabel>Options</FormLabel><br /> <br />
          <select className='contact-select' value={userInput.option} name='option' onChange={handleUserInput}>
            <option className='contact-option' value="lawncare">Lawn Care and Mowing</option>
            <option className='contact-option' value="maintenance">General Maintenance</option>
            <option className='contact-option' value="landscape">Landscape Design</option>
            <option className='contact-option' value="other">Other</option>
          </select><br />
          <FormLabel>Message</FormLabel><br />
          <textarea className='contact-textarea' cols={60} rows={6} name="message" value={userInput.message} onChange={handleUserInput} /><br />
          {error.message && <FormErrorText>{error.message}</FormErrorText>}<br /><br />
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
