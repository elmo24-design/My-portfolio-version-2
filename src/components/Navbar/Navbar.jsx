import React, {useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
//Scroll 
import { Link } from 'react-scroll'


import { images } from '../../constants';
import './Navbar.scss';

const modal = {
  hidden: {
     y: "-100vh"
  },
  visible: {
     y: '0',
     opacity: 1,
     transition: {
        delay: 0.2
     }
  }
}

const Navbar = ({ darkMode, checkedBool, handleChange }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.elmoLogo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className="app__flex p-text">
          <Link activeClass="active" className="app__flex" smooth spy to="home">
            <div></div>
            Home
          </Link>
        </li>
        <li className="app__flex p-text">
          <Link activeClass="active" className="app__flex" smooth spy to="projects">
            <div></div>
            Projects
          </Link>
        </li>
        <li className="app__flex p-text">
          <Link activeClass="active" className="app__flex" smooth spy to="about">
            <div></div>
            About
          </Link>
        </li>
        <li className="app__flex p-text">
          <Link activeClass="active" className="app__flex" smooth spy to="skills">
            <div></div>
            Skills
          </Link>
        </li>
        <li className="app__flex p-text">
          <Link activeClass="active" className="app__flex" smooth spy to="testimonials">
            <div></div>
            Testimonials
          </Link>
        </li>
        <li className="app__flex p-text">
          <Link activeClass="active" className="app__flex" smooth spy to="contact">
            <div></div>
            Contact
          </Link>
        </li>
      </ul>
      <div className="switch-checkbox">
        <label className="switch">
          <input type="checkbox" onChange={handleChange} checked={checkedBool}/>
          <span className="slider round"> </span>
        </label>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="menu-icon"/>
        {toggle && (
          <motion.div
            variants={modal}
            initial="hidden"
            animate="visible"
          >
            <HiX onClick={() => setToggle(false)}/>
            <ul>
            {
              ['home', 'projects', 'about', 'skills', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))
            }
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar