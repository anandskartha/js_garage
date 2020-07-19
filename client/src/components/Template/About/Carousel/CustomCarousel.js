import React from 'react'
import Carousel from 'react-multi-carousel'
import responsive from './responsive'
import CarouselItem from './CarouselItem'
import carouselContent from './carouselContent'
import 'react-multi-carousel/lib/styles.css'

function CustomCarousel() {
  const carouselItems = carouselContent.map(data => <CarouselItem key={data.id} title={data.title} description={data.description} image={data.image} proficiency={data.proficiency} />)
    return (
        <Carousel 
          responsive={responsive} 
          containerClass="carousel-container"
          additionalTransfrom={0} 
          arrows 
          autoPlay 
          autoPlaySpeed={3000} 
          centerMode={false} 
          draggable 
          focusOnSelect={false} 
          infinite 
          keyBoardControl 
          minimumTouchDrag={80} 
          renderButtonGroupOutside={false}
          renderDotsOutside={false} 
          showDots={false}
          sliderClass="testSlider"
          slidesToSlide={2}
          swipeable
        >
            {carouselItems}
        </Carousel>
    )
}

export default CustomCarousel
