import React from 'react'
import links from '../data/Links.js'

const Gallery = () => {
    return (
        <div className='gallery'>
            <p>
                bio goes here
            </p>
                {links.map((link, i) => {
                return (
                    <div id='imgs' key={link.id} className='gallery'>
                        <a href='/'>
                            <img src={link.img} alt='1' />
                        </a>
                    </div>
                
                )})
            }
        </div>
    )

}

export default Gallery
