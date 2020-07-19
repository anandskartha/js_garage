import React from 'react'
import './CarouselItem.css'

function CarouselItem({title, description, image, proficiency}) {
    const proficiencyRating = []
    const proficiencyMax = 5
    for (let i = 0; i < proficiencyMax; i++) {
        if (proficiency < 1 && proficiency > 0) {
            proficiencyRating.push(<i key={i} className="fa fa-star-half-o" />)
            proficiency -= 1;
        } else if (proficiency > 0){
            proficiencyRating.push(<i key={i} className="fa fa-star" />)
            proficiency -= 1;
        } else {
            proficiencyRating.push(<i key={i} className="fa fa-star-o" />)
        }
    }
    
    return (
        <div className="carousel-img-container">
            <img src={image} alt="Norway" />
            <div className="text-block">
                <h4>{title}</h4>
                <p>{description}</p>
                <p>
                    {proficiencyRating}
                </p>
            </div>
        </div>
    )
}

export default CarouselItem
