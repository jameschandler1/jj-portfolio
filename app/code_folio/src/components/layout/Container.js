import React from 'react'
import '../../styles/To_Container.css'

// components
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Gallery from "./Gallery";

const Container = () => {
    return (
        <div className='container'>
            <Header />
            <Nav />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Container
