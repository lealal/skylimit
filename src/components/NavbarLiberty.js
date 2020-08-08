import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarLiberty extends Component {
    render() {
        return (
            <div className="menu-container">
                <input type="checkbox" class="toggler"/>
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
                                <Link to="/liberty/amenities">Amenities</Link>
                            </li>
                            <li>
                                <Link to="/liberty/floorplans">Floorplans</Link>
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
