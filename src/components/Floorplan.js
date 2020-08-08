import React from 'react'
import FloorItem from './FloorItem'
import Footer from './Footer'

const Floorplan = ({floors, gallery}) => {
    
    return(
        <div className="plans">
            {floors.map((floor,index) => {
                return <FloorItem key={index} floor={floor} />
            })}
            <Footer gallery={gallery}/>
        </div>
    )
}

export default Floorplan
