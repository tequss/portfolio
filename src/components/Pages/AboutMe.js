import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Landing.css'
import Navbar from '../NavBar/NavBar'
import Landing from './Landingpage';
import Footer from '../Footer';



class AboutMe extends Component {
    render() {
        return (

            <Router>
                <div className="page">
                    <section>
                        <h2>Coś o nas</h2>
                        <img src="/images/zdjecieCV1.png" alt="zdjeciewiktor" width="350px"/>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                    </section>
                </div>
                <Footer />
            </Router>
        )
    }
}

export default AboutMe;