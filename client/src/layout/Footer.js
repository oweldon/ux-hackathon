import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
        <div className="footer">
            <span className="footer-text">Created by Our Team &copy; {new Date().getFullYear()}     powered by PetFinder.com</span>
        </div>
      );
  }
}

export default Footer;
