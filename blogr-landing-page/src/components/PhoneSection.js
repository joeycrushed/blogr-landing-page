import React from 'react'
import './PhoneSection.css';
import phones from '../images/phones.svg'

function PhoneSection() {
    return (
        <div className="phone-bg">
        <img className="phone-img" src={phones} alt="" />
            <div className="phone-title">
                <h1>State of the Art Infrastructure</h1>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </p>
            </div>
        </div>
    )
}

export default PhoneSection