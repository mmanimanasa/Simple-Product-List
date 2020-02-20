import React, { Component } from 'react';
import './App.css';
import './Example.css';
import PostData from './posts.json';
import Data from './Data';


class Image extends Component {
    render() {
        return (
            <div class="mm">
                {PostData.map((postDetails, index)=> {
                    return (
                        <div  >
                                                        <a href = {postDetails.url}>
                                <img  id="d" src={postDetails.img}></img> </a>
                                
                                </div>
                            
                    ) 
                                               

                })}
            </div>
        )
    }

}
export default Image