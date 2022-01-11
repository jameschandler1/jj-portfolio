import React from 'react'
import bio from '../data/Bio.js'

const Header = () => {
    return (
      <div className="header">
        <a href={bio.github} className="top-link">
          GitHub
        </a>
        <a href={bio.linkedin} className="top-link">
          LinkedIn
        </a>
      </div>
    );
}

export default Header
