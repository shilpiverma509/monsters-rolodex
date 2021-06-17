import React from "react";
import Cards from '../cards/Cards'
import Loading from "../loading/loading";
import SearchBar from "../searchbar/SearchBar";
import "./ListingPage.styles.css";

class ListingPage extends React.Component{
  constructor(props){
  super(props);
    this.state={
      searchField:"",
      robots:[],
      loading:true
    }
  }

  componentDidMount(){
    this.search("");
    }

    search = (query)=>{
      console.log("qyer",query);
      const url = new URL ("https://rickandmortyapi.com/api/character");
      let params ={name:query};
      query && Object.keys(params).forEach((key)=>url.searchParams.append(key, params[key]));
      fetch(url)
        .then(response=>response.json())
        .then(data=>this.setState({robots:data,loading:false}))
        .catch((error)=>{console.log("request failed",error.message)});
      }

    handleChange=(e)=>{
      this.setState({
        searchField:e.target.value,
      },()=>{
        this.state.searchField && this.search(this.state.searchField);
      })
    }

  render(){
    console.log(this.state);
    return(
      this.state.loading ?  (
        <Loading />
      )
      :(
      <div className="listing-page">
          <SearchBar
            placeholder="Enter Robot Name"
            onChange={this.handleChange}
            />
        <Cards robots={this.state.robots.results} />
      </div>
    )
    )
  }
}


export default ListingPage;