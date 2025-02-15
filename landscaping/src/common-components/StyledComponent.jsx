import { Link } from "react-router-dom";
import "./commonStyle.css";
import styled from "styled-components"

export const PageLink = ({title, path})=>{
    return(
        <Link className="page-link" to={path}>{title}</Link>
    )
}

export const PrimaryButton = styled.button`
    width: auto;
    padding: 0.5rem 1rem;
    background: #254222;
    border: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 1rem;
`