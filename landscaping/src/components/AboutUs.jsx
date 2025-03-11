import React from 'react'
import "./component.css"
import { LSCardHeading, LSHeading, LSPara} from '../commonComponents/Common'
import { LSLink } from '../commonComponents/LSLinks'
import { Link } from 'react-router-dom'
import { CardHeading, CardParaHighlightText, CardSubHeading } from '../commonComponents/LSCommon'
const AboutUs = () => {
    const aboutUsData = [
        {
            "id": 1,
            "para": "At PM Landscaping, we bring nature’s beauty to your doorstep with expert landscaping solutions. With a passion for creativity and a commitment to excellence, we specialize in designing, building, and maintaining stunning outdoor spaces that enhance both residential and commercial properties.",
            "link": null
        },
        {
            "id": 2,
            "para": "Our team of skilled professionals combines innovative design with sustainable practices to create landscapes that are both visually appealing and environmentally friendly. Whether it's a lush garden, a functional outdoor living space, or a complete landscape transformation, we tailor every project to meet our clients' unique visions and needs.",
            "link": null
        },
        {
            "id": 3,
            "para": "With years of experience in the industry, we take pride in our attention to detail, high-quality craftsmanship, and exceptional customer service. From concept to completion, we work closely with our clients to ensure their outdoor spaces thrive and remain beautiful year-round..",
            "link": null
        },
        {
            "id": 4,
            "para": "Let us bring your dream landscape to life!",
            "link": null
        },
        {
            "id": 5,
            "para": "Contact us today to discuss your project and discover how we can turn your outdoor space into a breathtaking oasis click, ",
            "link": "contact"
        }
    ]
    const personDetails=[
        {
            id: 1,
            img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Prashant Mendhe",
            title: "Senior Software Engineer",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Jenny Mendhe",
            title: "Senior Software Engineer",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ]
  return (
    <div className="about-us">
        <div className='aboutus-container'>
      <div className="aboutus-content-container">
        <LSHeading>About Us</LSHeading>
        <div className="aboutus-content">
            {aboutUsData.map((data,index)=>(
                <div className="aboutusdata" key={index}>
                    <LSPara className='aboutus-para'>{data.para} {data.link === null ? "" : <Link className='linktwo' to="/contact">here</Link>}</LSPara>
                </div>
            ))}
        </div>

      </div>
      <div className="aboutus-image-container">
        <img className='aboutus-image' src="./src/images/carouselimageone.jpg" alt="about us image" />
      </div>
      
    </div>
    <div className="our-team">
        <LSHeading>Meet Our Team</LSHeading>
        <div className="our-team-card-container">
            {personDetails.map((pd,index)=>(
                <div className="team-card">
                    <img className='team-card-image' src={pd.img} alt={pd.name}/>
                    <CardSubHeading>{pd.name}</CardSubHeading>
                    <CardParaHighlightText className='p-tag'>{pd.title}</CardParaHighlightText>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default AboutUs
