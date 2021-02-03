import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems" >

                <div className="Image">
                    <img src="./images/logonavbar.png" alt="" height="120" />
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul onClick={this.handleClick} className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>

                                </li>
                   
                        )
                    })}


                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        );
    }
}

export default Navbar;