import React from "react";
import CardsList from "./CardsList";
import "./cards.styles.css";

const Cards = (props)=>{
  console.log(props);
  return(
  <div className="cards">
    {props.robots.map((robot)=>(
      <CardsList robot={robot} key={robot.div} />
    ))}
  </div>
)}

export default Cards;

