import React from 'react'
import NavbarSunset from '../components/NavbarSunset'
import sunset from '../images/sunsetbg.jpg'

const Sunset = () => {
    return (
        <div className="homepage">
            <div className="menu-container">
                <NavbarSunset />
                <div></div>
            </div>
            <div className="container">
                <h3 className="top-left">Main</h3>
                <h3 className="top-right">Sunset</h3>
                <div className="imgbox">
                <img className="bg-img" src={sunset} alt="bg"/>
                </div>
            </div>
        </div>
    )
}

export default Sunset