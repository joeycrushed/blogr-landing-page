import React from 'react'
import './Introduction.css'
import './LaptopSection.css'
import laptop from '../images/laptop.svg'


function LaptopSection() {
    return (
        <div>
            <h1 class="title-text">Designed for the future</h1>
            <div className="laptop-items">
                    <img className="laptop-img" src={laptop} alt="" />

                    <div className="laptop-text">
                    <h2>Introducing an extensible editor</h2>
                    <p> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.</p>
                    <h2 className="h2-margin">Robust content management</h2>
                    <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </div>                
            </div>  
                
            
        </div>
    )
}

export default LaptopSection