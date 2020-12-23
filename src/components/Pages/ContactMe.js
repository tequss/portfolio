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
                        {/* <div className="contact">
                            <form className="contact-form">
                                <label>Name</label>
                                <input type="text" name="Twoje Imię i Nazwisko" value="" />
                                <label>Email</label>
                                <input type="text" name="Twoje Imię i Nazwisko" value="" />
                                <label>Wiadomość</label>
                                <input type="text" name="Twoje Imię i Nazwisko" value="" />
                            </form>
                        </div> */}
                        <ContactForm/>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </section>
                </div>

                <Footer />


            </Router>
        )
    }
}

export default ContactMe;