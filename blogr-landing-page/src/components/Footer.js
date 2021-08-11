import React from 'react'
import './Footer.css'

function Footer() {
    return(
        <div className="footer-bg">
            <div className="container">
                <h1 className="logo">Blogr</h1>
                <div>
                    <ul className="footer-list">
                    <li><h3>Product</h3></li>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer-list">
                        <li><h3>Company</h3></li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div >
                    <ul className="footer-list">
                    <li><h3>Connect</h3></li>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer