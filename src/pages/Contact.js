import React from 'react'
import NavbarContact from '../components/NavbarContact'
import { withRouter } from 'react-router-dom'
import bg from '../images/contactbg.jpg'

class Contact extends React.Component {
    constructor(){
        super()
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = (e) => {
        e.preventDefault()
        window.location.href = ('/contact/submit')
    }

    render() {
        return (
        <div className="homepage">
            <div className="menu-container">
                <NavbarContact />
                <div></div>
            </div>
            <div className="container">
                <h3 className="top-left">Contact</h3>
                <h3 className="top-right">Sky Limit</h3>
                <div className="img-contact">
                <img className="bg-img" id="contact-img" src={bg} alt="bg"/>
                <div className="box">
                    <form className="contact-form" onSubmit={this.submitForm}>
                        <div className="input-fields">
                            <input type="text" className="input" placeholder="Name" 
                                    required autoComplete="off"/>
                            <input type="email" className="input" placeholder="Email Address" 
                                    required autoComplete="off"/>
                            <input type="tel" className="input" placeholder="Phone Number" 
                                    required autoComplete="off" pattern="([0-9]{3}-[0-9]{3}-[0-9]{4})|[0-9]{10}"/>
                            <label for="building">Choose Building: </label>
                            <select className="input" id="building">
                                <option value="sunset">Sunset</option>
                                <option value="liberty">Liberty</option>
                                <option value="vincent">Vincent</option>
                            </select>
                        </div>
                        <div className="msg">
                            <textarea placeholder="Message" required></textarea>
                            <input type="submit" className="btn" value="Send"/>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}}

export default withRouter(Contact)