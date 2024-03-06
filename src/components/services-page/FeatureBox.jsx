import React from 'react'

const FeatureBox = ({ image, title, description }) => {
    return (
        <div className='feature-box'>
            <div className="image-container"><img src={image} alt="" /></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default FeatureBox