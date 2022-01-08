import React from 'react'
import links from '../data/Links.js'
import bio from '../data/Bio.js'

const Gallery = () => {
    return (
      <div className="gallery">
        <div className="bio">
          <div className="about-me">
            <img src={bio.img} alt="me" className="me" />
            <span className="bio-title">
              <span id="title">{bio.title}</span>
              <p className="bio-body">{bio.body}</p>
              <span className="contact-info">
                <p>contact information</p>
                <ul>
                  <li>{bio.email}</li>
                  <li>{bio.phone}</li>
                </ul>
              </span>
            </span>
          </div>
        </div>
        <div className="bio" id="items">
          {links.map((link, i) => {
            return (
              <div id="imgs" key={i} className="gallery">
                <a href={link.link} className="img-link">
                  <img src={link.img} alt="me" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );

}

export default Gallery
