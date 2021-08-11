import React from 'react'
import './PhoneSection.css';
import phones from '../images/phones.svg'
import bgcircles from '../images/bg-circles.svg'

function PhoneSection() {
    return (
        <>
        <div className="outer">
            <div className="below">
                <img className="circle" src={bgcircles} alt="" />
            </div>
        
            <div className="top">
                <img className="phone"src={phones} alt=""/>
            </div>
        </div>
        </>
    )
}

export default PhoneSection