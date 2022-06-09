import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/elmo-mahupil-87997a206/" target="_blank" rel="noreferrer">
        <div>
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://www.facebook.com/mo.el.54966834/" target="_blank" rel="noreferrer">
        <div>
          <FaFacebookF />
        </div>
      </a>
      <a href="https://www.youtube.com/channel/UCGslNJY-qDXrm_lB2l7lKRA" target="_blank" rel="noreferrer">
        <div>
          <FaYoutube />
        </div>
      </a>
      <a href="https://github.com/elmo24-design" target="_blank" rel="noreferrer">
        <div>
          <DiGithubBadge />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia