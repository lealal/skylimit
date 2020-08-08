import React from 'react'
import NavbarVincent from '../components/NavbarVincent'
import data from '../data'

class VincentAmenities extends React.Component {
    constructor(){
        super()
        this.state = {
            amenities: []
        }
    }

    componentDidMount(){
        let items = data
        let vincentFloor = items.filter(building => building.name === "Vincent")
        this.setState({
            amenities: vincentFloor[0].amenities
        })
        console.log(vincentFloor[0].amenities)
    }

    render(){
        return (
            <>
            <NavbarVincent />
            <div className="container">
                <h3 className="top-left">Amenities</h3>
                <h3 className="top-right">Vincent</h3>
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

export default VincentAmenities
