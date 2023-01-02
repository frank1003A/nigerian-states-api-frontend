import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import TourCard from './TourCard'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tour } from "./TourCard"
const WalkThrough = ({
  code,
  name,
  lgas,
  capital,
  description,
  direction,
}: Tour) => {
  return (
    <Carousel showThumbs={false} >
       <div>
       <TourCard name={name} description={description}/>
       </div>
       <div>
       <TourCard name={name} description={`capital  is ${capital}`}/>
       </div>
       <div>
       <TourCard name={name} description={`${lgas?.length} local goverment`}/>
       </div>
       <div>
       <TourCard name={name} description={`${name} is a ${direction} state`}/>
       </div>
    </Carousel>
  )
}

export default WalkThrough