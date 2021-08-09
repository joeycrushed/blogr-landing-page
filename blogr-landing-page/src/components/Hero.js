import React from 'react'
import Navbar from './Navbar/Navbar'
import './Hero.css'
import { Button } from './Button'
// import bg from '../images/bg.svg'


function Hero() {
    return (
        <div className="hero-bg">

            <div className="nav">
            <Navbar />
            </div>

            <div className="hero">
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online trend</p>
                <div className="hero-btns">
                    <Button>Start For Free</Button>
                    <Button>Learn More</Button>
                </div>   
            </div>

        </div>
   
    )
}

export default Hero