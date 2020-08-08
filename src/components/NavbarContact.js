import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarContact extends Component {
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
                                <Link to="/">Back to Main</Link>
                            </li>
                            <li>
                                <Link to="/sunset">Sunset</Link>
                            </li>
                            <li>
                                <Link to="/liberty">Liberty</Link>
                            </li>
                            <li>
                                <Link to="/vincent">Vincent</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}
