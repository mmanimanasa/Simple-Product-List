import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Example from './Example';
import PostData from './posts.json';
import './Example.css';

 class Button extends Component {
   state = {
     count:0
   };
   handleClick = () => {
     this.setState((prevState, { count }) => ({
       count : prevState.count + 1
     }));
   }
   render() {
     return(
       <div><button class="fa fa-thumbs-up , button" style={{border:`none`,outline:`0`,color:`blue`}} 
    onClick={this.handleClick}> <br/>{this.state.count}</button>
    </div>
    )

   }
 }


export default Button;
