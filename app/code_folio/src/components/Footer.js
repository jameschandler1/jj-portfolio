import React from 'react'

import backtop from '../static/backtop.png'

const Footer = () => {
    return (
        <div className="bio">
            <a href="/" className="back-to-top"> 
              <img src={backtop} alt="back to top"  width='20%' height='20%'/>
            </a>
        </div>
    )
}

export default Footer
