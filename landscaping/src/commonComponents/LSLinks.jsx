import {Link} from "react-router-dom"
import "./styles.css"
export const LSLink =({title,to,className})=>{
    return(
        <Link className={`link ${className}`} to={to}>{title}</Link>
    )
}