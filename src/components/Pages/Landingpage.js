import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Landing.css'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer';
import Typewriter from 'typewriter-effect';



class Landing extends Component {
    constructor(props) {
        super(props);
        const landingpagee = React.createRef();
    }
    render() {
        return (

            <Router>
                <div className="page">
                    <section>
                        <Typewriter
                            onInit= {(typewriter) => {
                                typewriter
                                .typeString("Welcome on WK-Developer!")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Tworzymy strony dla Ciebie!")
                                .start();
                            }}
                        />

                        {/* <h1>Tworzymy strony dla Ciebie!</h1> */}

                        <img src="/images/image1.png" alt="image1" width="350px" />

                        {/* <img src="svg-2.svg" alt="image1" width="100px"/> */}
                        {/* <h2>We are what you are looking for</h2> */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </section>
                </div>
                <Footer />
            </Router>
        )
    }
}


export default Landing;