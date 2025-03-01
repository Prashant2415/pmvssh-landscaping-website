import "./styles.css"
import styled from "styled-components"
export const PrimaryButton = styled.button`
    cursor: pointer;
    background: #77B254;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    font-size: 18px;
    font-weight: 600;

    &:hover{
    background: #ffffff;
    color: #77B254;
    border: 1px solid #77B254;
    }
`;

export const SecondaryButton = styled.button`
    cursor: pointer;
    background: #ffffff;
    color: #000000;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: 1px solid #77B254;
    font-size: 18px;
    font-weight: 600;
    margin: 1rem 0rem;
    position: relative;

    &:hover{
        background: #ffffff;
        color: #77B254;
    }
`