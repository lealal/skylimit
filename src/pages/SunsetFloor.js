import React from 'react'
import NavbarSunset from '../components/NavbarSunset'
import Floorplan from '../components/Floorplan'

import data from '../data'

class SunsetAmenities extends React.Component {
    constructor(){
        super()
        this.state = {
            floors: [],
            gallery: []
        }
    }

    componentDidMount(){
        let items = data
        let sunsetFloor = items.filter(building => building.name === "Sunset")
        this.setState({
            floors: sunsetFloor[0].floors,
            gallery: sunsetFloor[0].gallery
        })
    }

    render(){
        return (
            <section>
                <div className="menu-container">
                    <NavbarSunset />
                    <div></div>
                </div>
                <div className="container-plans">
                    <h3 className="top-left">Main</h3>
                    <h3 className="top-right">Sunset</h3>   
                </div>
                <Floorplan floors={this.state.floors} gallery={this.state.gallery}/>
            </section>
        )
}}

export default SunsetAmenities