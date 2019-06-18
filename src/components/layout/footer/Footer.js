import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
     <p>Copyright © 2015-{(new Date().getFullYear())} Jeewit Bachan   |   A <a href="https://reachnepal.org">Reach Nepal</a> Ministry</p>
    </div>
  )
}

export default Footer;
