import React from 'react'
import links from '../data/Links.js'
import bio from '../data/Bio.js'
import HoverImage from "react-hover-image";

const Gallery = () => {
    return (
     <>
        <div className="bio">
          <div className="bio-pic-wrapper">
            <img src={bio.img} alt="me" className="bio-pic" />
          </div>
          <div className="bio-about">
              <h1 className="bio-title">{bio.title}</h1>
              <p className="bio-body">{bio.body}</p>
          </div>
              <span className="bio-contact-info"> 
                <h2>contact information</h2>
                  <ul>
                    <li>{bio.email}</li>
                    <li>{bio.phone}</li>
                  </ul>
              </span>
          </div>

          {links.map((link, i) => {
              return (
                <div className="apps" key={i}>
                  <div className="app-img-container">
                    <div className="app-img-overlay">
                      <a href={link.link} className="app-img-link">
                        <img
                          className="app-img-screenshot"
                          src={link.img}
                          hoverSrc={link.alt_img}
                          alt="links"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              );
          })}
      </>
    );
}

export default Gallery
