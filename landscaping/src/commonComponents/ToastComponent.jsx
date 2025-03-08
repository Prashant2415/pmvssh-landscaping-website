import React, { useRef } from 'react'
import styled from 'styled-components'

const ToastDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`
const ToastSuccessMsg = styled.p`
    border: 1px solid #000000;
    font-size: 18px;
    font-weight: 600;
    background: #77B254;
    color: #ffffff;
    padding: 0.5rem 1rem;
`
const ToastComponent = ({toastMsg, className , delay, onTimeOut}) => {
    setTimeout(()=>{onTimeOut(false)},delay)
    window.scrollTo({top:0, behavior: "smooth"})
  return (
    // <div className={`toast-container ${className}`}>
    //   <p>{toastMsg}</p>
    // </div>
    <ToastDiv id='toastmsg' className={className}>
        <ToastSuccessMsg>{toastMsg}</ToastSuccessMsg>
    </ToastDiv>
  )
}

export default ToastComponent
