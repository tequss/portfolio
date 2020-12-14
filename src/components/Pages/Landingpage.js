import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/Landing.css'
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
                                .typeString("Witaj na WK-Developer!")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Tworzymy strony dla Ciebie!")
                                .start();
                            }}
                        />

                        {/* <h1>Tworzymy strony dla Ciebie!</h1> */}
                        <div className="image1">
                        <img src="/images/image1.png" alt="image1" className="image1" width="350px" height="350px" />
                        </div>
                        {/* <img src="svg-2.svg" alt="image1" width="100px"/> */}
                        <div className="oferty">
                        <div className="oferta">
                        <img className="webicon" src="/images/web-dev1.png" alt="webicon1" />
                        <h2>Strony internetowe</h2>
                        <p>Jeżeli chcesz mieć nowoczesną stronę internetową,
                             która swoim profesjonalnym wyglądem przyciągnie nowych klientów - 
                             skorzystaj z naszego doświadczenia.
                            Razem z Tobą stworzymy spersonalizowaną stronę www, 
                            którą będziesz mógł w łatwy sposób samodzielnie zarządzać i dodawać nowe treści.</p>
                            </div>
                            <div className="oferta">
                        <img className="mobileicon" src="/images/mobileicon.png" alt="mobile" />
                        <h2>Pełna responsywność</h2>
                        <p>Nasze strony działaja na każdym urządzeniu. Dopasowane do każdego typu użytkownika.</p>
                            </div>
                            <div className="oferta">
                            <img className="designicon" src="/images/design_icon.png" alt="designicon" />
                        <h2>Nowoczesny design</h2>
                        <p>W ramach usługi nasi projektanci
                             przygotują unikalny projekt graficzny Twojej nowej strony internetowej,
                              zaprojektowany zgodnie z aktualnymi zasadami użyteczności i najnowszymi trendami.</p>
                            </div>
                        
                        </div>
                    </section>
                </div>
                <Footer />
            </Router>
        )
    }
}


export default Landing;