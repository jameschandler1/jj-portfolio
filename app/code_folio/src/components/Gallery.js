import React from 'react'
import links from '../data/Links.js'
import bio from '../data/Bio.js'

const Gallery = () => {
    return (
      <div className="gallery">
        <p className="bio">
          <div className="about-me">
            <img src={bio.img} alt="me" className="me" />
            <span className="bio-title">
              {bio.title}
              <p className="bio-body">
                {bio.body}
              </p>
            </span>
          </div>
          {links.map((link, i) => {
            return (
              <div id="imgs" key={i} className="gallery">
                <a href={link.link} className="img-link">
                  <img src={link.img} alt="me" />
                </a>
              </div>
            );
          })}
        </p>
      </div>
    );

}

export default Gallery
