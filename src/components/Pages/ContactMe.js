import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/Landing.css'
import Footer from '../Footer';
import Typewriter from 'typewriter-effect';
import '../Styles/Contactform.css';
import ContactForm from '../../ContactForm/ContactForm';


class ContactMe extends Component {
    render() {
        return (
            <Router>
                <div className="page">
                    <section>

                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Skontaktuj się z nami!")
                                    .pauseFor(3000)
                                    .start();
                            }}
                        />

                        <ContactForm />


                    </section>
                </div>

                <Footer />


            </Router>
        )
    }
}

export default ContactMe;