import React from 'react'
import circlesq from '../images/circle-sq.svg'
import './Introduction.css'


function Introduction() {
    return (
        <div>
            <h1 class="title-text">Designed for the future</h1>
            <div className="intro-items">
                <div className="intro-text">
                    <h2>Introducing an extensible editor</h2>
                    <p> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.</p>
                    <h2 className="h2-margin">Robust content management</h2>
                    <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </div>
                
                    <img className="intro-img" src={circlesq} alt="" />
                
            </div>  
                
            
        </div>
    )
}

export default Introduction