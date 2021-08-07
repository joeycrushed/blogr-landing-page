import React from 'react'
import Navbar from './Navbar/Navbar'
import './Hero.css'
import { Button } from './Button'

function Hero() {
    return (
        <div className="hero-bg">
            <Navbar />
            <h1>A Modern publishing platform</h1>
            <p> grow your audience and build your platform</p>
            <Button className="btn--medium">Start for free</Button>
            <Button>Learn More</Button>
        </div>
    )
}

export default Hero