import React from "react";

export interface Tour {
  readonly code?: string,
   readonly name?: string,
   readonly lgas?: Array<string>,
   readonly capital?: string,
   readonly direction?: string,
   readonly description?: string,
   readonly isCapital?: boolean,
}

const TourCard = ({
  code,
  name,
  lgas,
  capital,
  description,
  direction,
}: Tour) => {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="description">{name}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
