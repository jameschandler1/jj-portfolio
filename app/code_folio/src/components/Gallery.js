import React from 'react'
import links from '../data/Links.js'
import bio from '../data/Bio.js'

const Gallery = () => {
    return (
        <div className='gallery'>
            <p className='bio'>
                <img src={bio.img} alt='me'/>
                <span className='bio-title'>
                    {bio.title}
                </span>
                <p className='bio-body'>
                    {bio.body}
                </p>
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
