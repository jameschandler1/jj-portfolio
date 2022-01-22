import React from 'react'

import backtop from '../static/backtop.png'

const Footer = () => {
    return (
        <div className="page-container">
            <a href="/" className="back-to-top"> 
                <img src={backtop} alt="back to top" width='100px' height='100'/>
            </a>
        </div>
    )
}

export default Footer
