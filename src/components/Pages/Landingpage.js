import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Landing.css'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer';



class Landing extends Component{
    constructor(props) {
        super(props);
        this.landing = React.createRef();
    }
    render(){
        return(
            
            <Router>
                {/* <div id="landing"> */}
                
                <h1>Welcome on WK-Dev Page</h1>
                <img src="svg-2.svg" alt="image1" width="100px"/>
                <h2>We are what you are looking for</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                {/* </div> */}
                <Footer />
            </Router>
        )
    }
}


export default Landing;