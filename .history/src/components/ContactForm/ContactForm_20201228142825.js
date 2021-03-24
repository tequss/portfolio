import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Wyślij"
    };   
  }
  handleSubmit(event) {
    event.preventDefault();  
    this.setState({ status: "Wysyłanie" });  
    axios({
      method: "POST",
      url: "https://portfolio-api.tequss.vercel.app/api/contactme",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Wiadomość wysłana");
        this.setState({ name: "", email: "", message: "", status: "Wyślij" });
      } else if (response.data.status === "failed") {
        alert("Wysyłanie wiadomości nie powiodło się");
      }
    });
  }
 
  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }
 

  
  render() {
    let buttonText = this.state.status;

    
    return (      
        <div className="contactform">
        <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} action="https://portfolio-api.tequss.vercel.app/api/contactme" method="POST">
            <div>
            {/* <label htmlFor="name">Name:</label> */}
            <input
                type="text"
                id="name"
                placeholder="Wpisz swoje imię"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input
                type="email"
                id="email"
                placeholder="Wpisz swój Email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <div>
            {/* <label htmlFor="message">Message:</label> */}
            <textarea
                id="message"
                placeholder="Twoja wiadomość"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <button type="submit">{buttonText}</button>
        </form>
        </div>      
    );
}
}

export default ContactForm;