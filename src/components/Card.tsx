import React from 'react'
import { Link } from 'react-router-dom'

export interface StateArg {
   readonly code: string,
   readonly name: string,
   readonly lgas?: Array<string>,
   readonly capital?: string,
   readonly direction?: string,
   readonly description?: string,
   readonly isCapital?: boolean,
}
const Card = ({code, name, lgas,  capital, description, direction}: StateArg) => {
  return (
    <div className="card slide_left">
        <div className="face face1">
          <div className="content">
          <Link to={`/state/${name}`} >Visit</Link>
            <span className="stars"></span>
            <h2 className="description">{name}</h2>
            <p className="description">
              {description}
            </p>
          </div>
        </div>
        <div className="face face2">
          <h2>{code}</h2>
        </div>
      </div>
  )
}

export default Card