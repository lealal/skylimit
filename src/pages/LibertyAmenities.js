import React from 'react'
import NavbarLiberty from '../components/NavbarLiberty'
import data from '../data'

class LibertyAmenities extends React.Component {
    constructor(){
        super()
        this.state = {
            amenities: []
        }
    }

    componentDidMount(){
        let items = data
        let libertyFloor = items.filter(building => building.name === "Liberty")
        this.setState({
            amenities: libertyFloor[0].amenities
        })
        console.log(libertyFloor[0].amenities)
    }

    render(){
        return (
            <>
            <NavbarLiberty />
            <div className="container">
                <h3 className="top-left">Amenities</h3>
                <h3 className="top-right">Liberty</h3>
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

export default LibertyAmenities
