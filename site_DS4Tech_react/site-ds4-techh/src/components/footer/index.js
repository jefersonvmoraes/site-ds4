import React from "react";
import {Link} from "react-router-dom";
import './index.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="site-info">
        <Link to={'/'} className="text-footer">DS4 Tech</Link>
      </div>
    </div>
  )
}

export default Footer;