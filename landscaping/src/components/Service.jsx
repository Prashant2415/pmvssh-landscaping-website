import React from 'react'
import { LSHeading, LSPara, LSSubHeading, LSTextHighlight } from '../commonComponents/Common'
import { PrimaryButton, SecondaryButton } from '../commonComponents/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { LSCommonElement } from '../commonComponents/LSCommonElement'

const Service = () => {
    const serviceData = [
        {
            "id": 1,
            "heading": "Lawn & Mowing Services",
            "content": "A well-maintained lawn enhances the beauty of your home or business. Our expert mowing services ensure your grass stays at an optimal height, promoting healthy growth while keeping your property neat and inviting. We also provide edging, aeration, fertilization, and weed control to maintain a lush, green lawn all year round.",
            "image": "ServiceImageOne",
            "list": "undefined"
        },
        {
            "id": 2,
            "heading": "Landscaping design",
            "content": "Whether you want to enhance your outdoor space with a fresh new look or completely redesign your landscape, our team specializes in creating stunning, functional designs. From garden beds and hardscaping to plant selection and water features, we work closely with you to bring your vision to life while ensuring sustainability and low-maintenance beauty.",
            "image": "ServiceImageTwo",
            "list": "undefined"
        },
        {
            "id": 3,
            "heading": "General Maintenance",
            "content": "Your outdoor space requires regular care to stay in top shape. We provide comprehensive maintenance services, including:",
            "image": "ServiceImageThree",
            "list": [
                {
                    "id": 1,
                    "listContent": "Lawn and garden cleanups"
                },
                {
                    "id": 2,
                    "listContent": "Tree and shrub trimming"
                },
                {
                    "id": 3,
                    "listContent": "Mulching and soil conditioning"
                },
                {
                    "id": 4,
                    "listContent": "Weed and pest control"
                },
                {
                    "id": 5,
                    "listContent": "Seasonal care (fall cleanups, snow removal, etc.)"
                }
            ]
        }
    ]
    const navigate = useNavigate();
    const handleBookNow = (event)=>{
        event.preventDefault();
        navigate("/contact")
    }
  return (
    <div className='service-page-container'>
      <LSHeading>Services</LSHeading>
      <LSPara>Let us take care of your landscaping needs so you can enjoy a beautiful, stress-free outdoor space.</LSPara>
      <LSPara>🌿 Quality Service | Affordable Pricing | Professional Care 🌿</LSPara>
      <LSPara>📞 Contact us today for a free consultation! <LSTextHighlight>{LSCommonElement.CONTACT_NUMBER}</LSTextHighlight></LSPara>
      <div className="service-container">
        {serviceData.map((sd)=>(
            <div className={`service-content-container ${sd.id % 2 == 0 ? "row" : "row-reverse"}`} key={sd.id}> 
                <div className="service-content">
                    <LSSubHeading>{sd.heading}</LSSubHeading>
                    <LSPara>{sd.content}</LSPara>
                    {sd.list === "undefined" ? "" : sd.list.map((l)=>(
                        <ul key={l.id}>
                            <li className='content-list'>{l.listContent}</li>
                        </ul>
                    ))}
                    <PrimaryButton onClick={handleBookNow}>Book Now</PrimaryButton>
                </div>
                <div className="service-image-container">
                    <img className='service-image' src={`./src/images/${sd.image}.jpg`} alt={sd.heading} />
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Service
