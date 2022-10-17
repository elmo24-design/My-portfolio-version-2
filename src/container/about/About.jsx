import { AppWrap, MotionWrap } from '../../wrapper'
import {images} from '../../constants'
import './About.scss'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className='app__about'>
      <h2 className="head-text"> About <span> Me </span></h2>
      <p className='app__flex'>Let me introduce myself</p>
      <div className="app__profile-container">
        <div className="app__profiles">
          <div className="left-about-grid">
            <img src={images.aboutImg} alt="elmo" />
          </div>
          <div class="right-about-grid">
              <h2>I’m a Fullstack Developer from Pililla Rizal, Philippines. </h2>
              <p>I love coding and formulating logics to solve problems with the use of Web Technologies.
                I specialize mostly in Javascript Frontend development, but I also like UI designing as well.
              </p>
              <p class="p-2">
                My journey started back in May, 2020, some time after the school lockdown began due to the pandemic. 
                I was an incoming third year college at that time when I got fascinated about how the web works.  
                Since then, I started to self-study web development and eventually fell inlove with it.
              </p>
              <h2>Connect with me on:</h2>
              <div class="about-icons">
                <a href="https://www.linkedin.com/in/elmo-mahupil-87997a206/" class="first-about-icon" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com/MahupilElmo" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://www.facebook.com/mo.el.54966834/" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://github.com/elmo24-design" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.youtube.com/channel/UCGslNJY-qDXrm_lB2l7lKRA" target="_blank" rel="noreferrer">
                  <FaYoutube />
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__primarybg'
)