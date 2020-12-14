import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/Landing.css'
import Navbar from '../NavBar/NavBar'
import Landing from './Landingpage';
import Footer from '../Footer';
import Typewriter from 'typewriter-effect';




class AboutMe extends Component {
    render() {


        return (

            <Router>
                <div className="page">
                    <section>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Coś o mnie :)")
                                    .pauseFor(3000)
                                    .start();
                            }}
                        />
                        <img src="/images/zdjecieCV1.png" alt="zdjeciewiktor" width="350px" />
                        <div className="oferty">
                        <div className="oferta">
                        <h2>Cześć wszystkim!</h2>
                        <p>Mam na imię Wiktor, pochodzę z małej miejscowości w województwie łódzkim.
                        Uczę sie programowania od połowy września 2020 i moim celem jest zostanie Frontend-Developerem.
                        Jestem osobą szybko uczącą się i szukającą
                        nowych wyzwań. Mam szeroki wachlarz
                        zainteresowań począwszy od szeroko
                        pojętego sportu, dietetyki do IT. Swoją
                        przyszłość wiążę z programowaniem,
                        niedawno poznaną pasję, którą ciągle
rozwijam.</p>
                            </div>
                            <div className="oferta">
                        <h2>Moje umiejętności</h2>
                        <ul>React</ul>
                        <ul>JavaScript</ul>
                        <ul>CSS</ul>
                        <ul>HTML</ul>
                            </div>
                            
                        
                        </div>
                        


                    </section>
                </div>
                <Footer />
            </Router>
        )
    }
}

export default AboutMe;