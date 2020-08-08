import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarSunset extends Component {
    render() {
        return (
            <div className="menu-container">
                <input type="checkbox" className="toggler"/>
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Back to Home</Link>
                            </li>
                            <li>
                                <Link to="/sunset/amenities">Amenities</Link>
                            </li>
                            <li>
                                <Link to="/sunset/floorplans">Floorplans</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}
