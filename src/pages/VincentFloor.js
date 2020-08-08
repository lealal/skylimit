import React from 'react'
import NavbarVincent from '../components/NavbarVincent'
import Floorplan from '../components/Floorplan'

import data from '../data'

class VincentAmenities extends React.Component {
    constructor(){
        super()
        this.state = {
            floors: [],
            gallery: []
        }
    }

    componentDidMount(){
        let items = data
        let vincentFloor = items.filter(building => building.name === "Vincent")
        this.setState({
            floors: vincentFloor[0].floors,
            gallery: vincentFloor[0].gallery
        })
    }

    render(){
        return (
            <section>
                <div className="menu-container">
                    <NavbarVincent />
                    <div></div>
                </div>
                <div className="container-plans">
                    <h3 className="top-left">Main</h3>
                    <h3 className="top-right">Vincent</h3>   
                </div>
                <Floorplan floors={this.state.floors} gallery={this.state.gallery}/>
            </section>
        )
}}

export default VincentAmenities