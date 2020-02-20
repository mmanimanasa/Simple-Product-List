import React, { Component } from 'react';
import PostData from './posts.json';
import './Example.css';
// import './exx.css';
import Image from './Image';
import Data from './Data';
class Example extends Component {
    render() {
        return (
            <div class="top" >
            <div class="hero" >
                <Image />
            </div>
            
            <Data  />
        

            
        </div>
        )
    }
}

export default Example