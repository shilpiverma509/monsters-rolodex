import React from "react";
import "./cards.styles.css";

const CardsList = (props)=>{
  const {robot}=props
  return(
  <div className="cardslist">
      <img src={robot.image} alt="robot" />
      <div className="cardslist-text">
        <h1>{robot.name}</h1>
        <p>
          <span className="status">{robot.status}-{robot.species}</span>
        </p>
        <div className="location">
          
        </div>
      </div>
  </div>
)}

export default CardsList;