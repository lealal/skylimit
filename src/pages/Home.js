import React from 'react'
import bg from '../images/mainbg.jpg'
import NavbarMain from '../components/NavbarMain'

const Home = () => {
    return (
        <div className="homepage">
            <div className="menu-container">
                <NavbarMain />
                <div></div>
            </div>
            <div className="container">
                <h3 className="top-left">Home</h3>
                <h3 className="top-right">Sky Limit</h3>
                <div className="middle">
                    <h4 className="title">Luxury Apartments</h4>
                    <p>Sunset Los Angeles</p>
                    <p>Liberty New York</p>
                    <p>Vincent Minneapolis</p>
                </div>
                <div className="imgbox">
                <img className="bg-img" src={bg} alt="bg"/>
                </div>
            </div>
        </div>
    )   
}

export default Home
