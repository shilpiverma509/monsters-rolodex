import React, {Component} from "react";
import './App.css';
import {CardList} from './components/card-list/CardList';
import SearchBox from "./components/search/SearchBox.component.jsx";
// import {SearchBox} from "./components/search-box/search-box.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      monsters:[],
      searchField:'',
      title:'Monsters Rolodex'
    }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>this.setState({monsters:users}))
}

handleChange = (e)=>{
  this.setState({
    searchField:e.target.value,
    title:e.target.value
  })
}

  render(){
    console.log("props",this.props);
    // const {monsters,searchField}=this.state;
    // const filteredMonsters = monsters.filter(
    //   (monster)=>monster.name.toLowerCase().includes(searchField.toLowerCase())
    // )
    // console.log(filteredMonsters);
    const {monsters,searchField}= this.state;
     const filteredMonsters = monsters.filter(
      (monster)=>monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(filteredMonsters);
    // return(
    //   <div className="App">
        
    //     <CardList monsters={filteredMonsters} />
    //   </div>
    // )
        return (
      <div className="App">
      <h1>{this.state.title}</h1>

      <SearchBox
          onChange ={this.handleChange}
          placeholder= "search monster"
        />
      <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
}
}
     
      // <SearchBox
      //  placeholder='search monsters'
      //  handleChange={this.handleChange}
      //  />
export default App;





  
