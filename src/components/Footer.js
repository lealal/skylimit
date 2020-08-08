import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = ({gallery}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [imgIndex, setIndex] = useState(0)

    const handleShowGallery = () => {
        setIsOpen(!isOpen)
        if (isOpen){
            setIndex(0)
        }
    }

    function plusSlide(n) {
        if ((imgIndex + n) < 0){
            setIndex(gallery.length-1)
        } else if ((imgIndex + n) >= gallery.length){
            setIndex(0)
        } else {
            setIndex(imgIndex + n)
        }
    }

    return(
        <div className="extra">
            <div className="wrapper">
                <div class="column" id="gallery">
                    <button onClick={handleShowGallery}>View Gallery</button>
                    {isOpen && <div className="modal">
                    
                    <span className="prev" id="arrow" alt="" onClick={() => plusSlide(-1)}>{'<'}</span>
                    <span className="next" id="arrow" alt="" onClick={() => plusSlide(1)}>{'>'}</span>
                        {gallery.map((img,index) => 
                            <div class="mySlides">
                                {(imgIndex === index) && <>
                                <span className="close" onClick={handleShowGallery}>&times;</span>
                                <div id="numbertext">{index + 1} / {gallery.length}</div>
                                <img src={img.img} id="modal-img" alt=""/>
                                </>}
                            </div>
                        )}         
                    </div>}
                </div>
                <div className="column" id="contact">
                    <Link to="/contact"><button >Contact</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer

