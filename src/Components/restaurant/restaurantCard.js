import React from 'react'

const restaurantCard = (props) =>{
  console.log(props.ele)
  return(<>
    <div className="card col-6" >
  <div className="card-body">
    <h5 className="card-title">{props.ele.name}</h5>
    <img src= {props.ele.ratingImg} />
    <p className="card-text">{props.ele.address}</p>
    <p className="card-text">{props.ele.city}</p>
    <a href={props.ele.url} className="card-link">TripAdvisor</a>
    <h6 className="card-subtitle text-muted mb-2">{props.ele.priceRange}</h6>
  </div>
</div>
  </>)
}

export default restaurantCard;