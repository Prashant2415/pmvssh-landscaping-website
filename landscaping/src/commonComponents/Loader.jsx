import React from 'react'
import styled, { keyframes } from "styled-components"
const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
`
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const LoaderSymbol = styled.div`
    width: 50px;
    height: 50px;
    border: 16px solid;
    border-top: 16px solid green;
    border-radius: 50%;
    animation: ${spin} 2s linear infinite;
}

`
const Loader = () => {
  return (
    <LoaderContainer>
        <LoaderSymbol></LoaderSymbol>
        <p>Loading......</p>
    </LoaderContainer>
  )
}

export default Loader
