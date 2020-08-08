import React from 'react'
import NavbarVincent from '../components/NavbarVincent'
import vincent from '../images/vincentbg.png'

const Vincent = () => {
    return (
        <div className="homepage">
            <div className="menu-container">
                <NavbarVincent />
                <div></div>
            </div>
            <div className="container">
                <h3 className="top-left">Main</h3>
                <h3 className="top-right">Vincent</h3>
                <div className="imgbox">
                <img className="bg-img" src={vincent} alt="bg"/>
                </div>
            </div>
        </div>
    )
}

export default Vincent