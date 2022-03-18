import React from 'react'
import "./feature.css";

 const Feature = ( { title, text } ) => {
  return (
    <div className="gtp3__features-container__feature">
      <div className="gtp3__features-container__feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gtp3__features-container__feature-text">
        {text}
      </div>
    </div>
  )
}

export default Feature;