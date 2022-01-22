import React from 'react'
import links from '../data/Links.js'
import bio from '../data/Bio.js'
import bio_pic from '../static/bio-pic.jpeg'
import Header from '../components/Header'

const Gallery = () => {
    return (
      <>
        <div className="container-wrapper">
          <Header />
          <div className="bio-pic-wrapper">
            <img src={bio_pic} alt="me" className="bio-pic"/>
          </div>
          <div className="bio-about">
            <h1 className="bio-title">{bio.title}</h1>
            <p className="bio-body">{bio.body}</p>
          </div>
          <span className="bio-contact-info">
            <h2 className="info-h2">CONTACT INFO</h2>
            <ul>
              <li>{bio.email}</li>
              <li>{bio.phone}</li>
            </ul>
          </span>

          <h2 className="apps-h2">APPS</h2>
            <fieldset className="click-me">
              <legend> ▽ CLICK ME ▽ </legend>
            </fieldset>
          <div className="content" >
            <div className="grid">
            {links.map((link, i) => {
              return (
              <figure className="effect-julia">
                <img src={link.img} alt="img21"/>
                <figcaption>
                  <h2>{link.title}<span>by Jerome</span></h2>
                  <div>
                    <p>{link.info}</p>
                  </div>
                  <a href={link.link}>View more</a>
                </figcaption>			
              </figure>
              
              );
            })}
            </div>
        </div>
        </div>
      </>
    );
}

export default Gallery

