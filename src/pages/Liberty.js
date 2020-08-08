import React from 'react'
import liberty from '../images/libertybg.jpg'
import NavbarLiberty from '../components/NavbarLiberty'

const Liberty = () => {
    return (
        <div className="homepage">
            <div className="menu-container">
                <NavbarLiberty />
                <div></div>
            </div>
            <div className="container">
                <h3 className="top-left">Main</h3>
                <h3 className="top-right">Liberty</h3>
                <div className="imgbox">
                <img className="bg-img" src={liberty} alt="bg"/>
                </div>
            </div>
        </div>
    )
}

export default Liberty