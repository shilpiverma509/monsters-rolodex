import React from "react";


const SearchBox = (props)=>{
  console.log(props)
  return(
  <div>
    <input
    type="search"
    placeholder={props.placeholder}
    onChange={props.handleChange}
    />
  </div>
)}

export default SearchBox;