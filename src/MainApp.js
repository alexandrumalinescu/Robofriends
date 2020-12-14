import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from "./Scroll";
import "./App.css";



class MainApp extends Component {
 
  constructor(){
    super();
    this.state= { 
      robots: robots,
      searchfield: ''}
  }

  componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots: users}));
   
   }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    console.log(event.target.value);
    
  }


  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return(
      <div className ='tc'>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
        
      </div>
    ) 
  }

}

export default MainApp;