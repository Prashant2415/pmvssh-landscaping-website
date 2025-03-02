import React from 'react'
import styled from "styled-components"
import { SecondaryButton } from './ButtonComponent'

const CardComponent = styled.div`
    border: 1px solid #77B254;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 1rem;
    width: 16rem;

    &:hover{
        &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgb(173, 208, 152),rgba(76, 212, 172, 0.226));
        border-radius: 1rem;
      }
    }
`
const CardImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-bottom: 1px solid #77B254;
`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const CardContentHeading = styled.h1`
    font-size: 32px;
    color: #000000;
    font-weight: 600;
`
const CardContentPara = styled.p`
    margin: 1rem 0rem 0rem 0rem;
`

export const Card = ({ d, onCardClick }) => {
    
    const cardData = d;
    const { plantImage, plantName, plantPrice } = cardData;
    return (
        <CardComponent>
            <CardImage src={`./src/images/${plantImage}.jpg`} alt={plantName}></CardImage>
            <CardContent>
                <CardContentHeading>{plantName}</CardContentHeading>
                <CardContentPara>{plantPrice}</CardContentPara>
                <SecondaryButton onClick={() => { onCardClick(cardData) }}>Add to cart</SecondaryButton>
            </CardContent>
        </CardComponent>
    )
}

