import React from 'react'

const restaurantCard = (props) =>{
  return(<>
    <div className="card col-6" style={{"boxShadow":"12px 0 10px -4px  #A44A3F, -12px 0 10px -4px #A44A3F"}}>
  <div className="card-body">
    <h5 className="card-title">{props.ele.name}</h5>
    <img src= {props.ele.ratingImg} alt="rating"/>
    <p className="card-text">{props.ele.address}</p>
    <p className="card-text">{props.ele.city}</p>
    <a href={props.ele.url} className="card-link">TripAdvisor</a>
    <h6 className="card-subtitle text-muted mb-2">{props.ele.priceRange}</h6>
  </div>
</div>
  </>)
}

export default restaurantCard;