import "./styles.css"
export const PrimaryButton =({title, className})=>{
    return(
        <button className={`primary-button ${className}`}>{title}</button>
    )
}