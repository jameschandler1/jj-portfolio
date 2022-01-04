import React from 'react'
import links from '../../data/Links.js'

const Gallery = () => {
    links.map((link, i) => {
    return (
        <section id='imgs'>
            <a href='/'>
                <img src={link.img} alt='1' />
            </a>
        </section>
    )})
}

export default Gallery
