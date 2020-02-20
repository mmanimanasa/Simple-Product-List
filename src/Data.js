import React, { Component } from 'react';
import './App.css';
import './Example.css';
import PostData from './posts.json';
import Button from './Button';


class Data extends Component {
    render() {
        return (
            <div >
                {PostData.map(function (postDetails, index) {
                    return  <div class="cta">
                    <div class="cta cta1" > <h3>TITLE: {postDetails.Title}</h3>
                         <div class="cta cta2"> 
                            <p>DESCRIPTION: {postDetails.Description}</p> 
                            <Button />
                            </div></div>
                        
                            
                    </div>
                    
                })}
            </div>
        )
    }

}
export default Data