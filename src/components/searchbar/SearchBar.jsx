import React from "react";
import "./SearchBar.styles.css";

const SearchBar = (props)=>{
  console.log("searchbar");
  return(
  <div className="searchbar">
    <input
    type="search"
    placeholder={props.placeholder}
    onChange={props.onChange}
    />
  </div>
)
}
export default SearchBar;