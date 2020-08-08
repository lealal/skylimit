import React from 'react'
import NavbarSunset from '../components/NavbarSunset'
import data from '../data'

class SunsetAmenities extends React.Component {
    constructor(){
        super()
        this.state = {
            amenities: []
        }
    }

    componentDidMount(){
        let items = data
        let sunsetFloor = items.filter(building => building.name === "Sunset")
        this.setState({
            amenities: sunsetFloor[0].amenities
        })
        console.log(sunsetFloor[0].amenities)
    }

    render(){
        return (
            <>
            <NavbarSunset />
            <div className="container">
                <h3 className="top-left">Amenities</h3>
                <h3 className="top-right">Sunset</h3>
            </div>
            <slider>
                {this.state.amenities.map(item => {
                return <slide style={{backgroundImage: "url("+ item.img +")"}}>
                    <p>{item.description}</p>
                </slide>})}
            </slider>
        </>
    )
}}

export default SunsetAmenities
