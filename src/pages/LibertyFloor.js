import React from 'react'
import NavbarLiberty from '../components/NavbarLiberty'
import Floorplan from '../components/Floorplan'

import data from '../data'

class LibertyFloor extends React.Component {
    constructor(){
        super()
        this.state = {
            floors: [],
            gallery: []
        }
    }

    componentDidMount(){
        let items = data
        let libertyFloor = items.filter(building => building.name === "Liberty")
        this.setState({
            floors: libertyFloor[0].floors,
            gallery: libertyFloor[0].gallery
        })
    }

    render(){
        return (
            <section>
                <div className="menu-container">
                    <NavbarLiberty />
                    <div></div>
                </div>
                <div className="container-plans">
                    <h3 className="top-left">Main</h3>
                    <h3 className="top-right">Liberty</h3>   
                </div>
                <Floorplan floors={this.state.floors} gallery={this.state.gallery}/>
            </section>
        )
}}

export default LibertyFloor