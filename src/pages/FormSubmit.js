import React from 'react'
import NavbarContact from '../components/NavbarContact'
import bg from '../images/contactbg.jpg'

const FormSubmit = () => {

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
                    <div className="submit-form">
                    <h4>Thank you for contacting Sky Limit</h4>
                    <a href="/">Return Home</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FormSubmit