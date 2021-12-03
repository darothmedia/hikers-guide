import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='favicons'>
          <SocialIcon url="https://www.linkedin.com/in/adrian-rothschild/" target='_blank' bgColor="#414141" />
        </div>
        <div className='favicons'>
          <SocialIcon url="https://github.com/darothmedia" target='_blank' bgColor="#414141" />
        </div>
        <div className='favicons'>
          <SocialIcon url="https://www.rothmedia.org/" target='_blank' bgColor="#414141" />
        </div>
      </div>
    </footer>
  )
}

export default Footer