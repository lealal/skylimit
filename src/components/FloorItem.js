import React, { useState } from 'react'

import bed from '../images/bed.png'
import bathroom from '../images/broom.png'
import size from '../images/size.png'

const FloorItem = ({floor}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleShowDialog = () => {
        setIsOpen(!isOpen)
        console.log("clicked")
    }

    let pluralrooms = false
    let pluralbathrooms = false

    if (floor.bedrooms>1){
        pluralrooms = true
    }

    if (floor.bathrooms>1){
        pluralbathrooms = true
    }


    return(
        <div className="floor">
            <div className="column1">
                <span>{floor.name}</span>
            </div>  
            <div className="column">
                <img src={bed} alt="bed"/> 
                <span className="stats">{floor.bedrooms}  
                    {pluralrooms ? "bedrooms" : "bedroom"}</span>
            </div>
            <div className="column">
            <img src={bathroom} alt="bathroom"/> 
                <span className="stats">{floor.bathrooms} 
                    {pluralbathrooms ? "bathrooms" : "bathroom"}</span>
            </div>
            <div className="column">
            <img src={size} alt="size"/> 
                <span className="stats">{floor.size} square feet</span>
            </div>
            <div className="column-img">
            <img src={floor.img} id="small" alt="plan" onClick={handleShowDialog}/> 
            {isOpen && <div className="modal">
                <span className="close" onClick={handleShowDialog}>&times;</span>
                <img src={floor.img} className="modal-content" id="modal-img" alt="" onClick={handleShowDialog}/>
                <div id="caption">{floor.bedrooms} {pluralrooms ? "bedrooms" : "bedroom"}</div>
            </div>}
            </div>
        </div>
    )
}

export default FloorItem