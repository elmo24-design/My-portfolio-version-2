import React from 'react'
import {motion} from 'framer-motion'

import {AppWrap} from '../../wrapper'
import {images} from '../../constants'
import './Header.scss'

import { AiOutlineDownCircle } from 'react-icons/ai'
// import Typed from 'react-typed'
// import Typewriter from 'typewriter-effect';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__flex'>
      <div className='app__header'>
        {/* First div */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1]}}
          transition={{ duration: 1.1 }}
          className="app__header-info"
        >
          <div className="app__header-heading">
            <h1 className='heading-text'>HI, I'M ELMO</h1>
            <p className='heading-desc'>
              {/* <Typewriter
                options={{
                  strings: ['Fullstack Developer', 'Frontend Developer'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2500
                }}
              /> */}
            </p>
            <p className="heading-desc-2">
              A Fullstack developer from Pililla, Rizal, Philippines. I craft creative And engaging Web Apps
            </p>
          </div>
          {/* Call to action buttons  */}
          <div className="cta">
            <a href="#projects"> My Projects </a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1,  transition: {
                  delay: 1.5
              } }}
              className="arrow-down"
            >
              <AiOutlineDownCircle />
          </motion.div>
          </div>
          
        </motion.div>

        {/* Second div  */}
        <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1]}}
            transition={{ duration: 1.1 }}
            className="app__header-img"
        >
          <div>
            <img src={images.chibielms2} alt="profile_bg" className='chibi' />
          </div>
          
          <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
          >
            <div className="circle-container circle-container-1">
              <div className='app__flex circle circle-1'>
                <img src={images.uiLogo} alt="ui logo" className='ui-logo' />
              </div>
              <div className="white-box">
                UI Designer
              </div>
            </div>
            <div className="circle-container circle-container-2">
              <div className='app__flex circle circle-2'>
                <img src={images.code} alt="code" className='code' />
              </div>
              <div className="white-box">
                Developer
              </div>
            </div>
          </motion.div>
          {/* <motion.img
            whileInView={{ scale: [0, 1]}}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt="profile_circle"
            className='overlay_circle'
          >
          </motion.img> */}
        </motion.div>
      
        </div>
      </div>
  )
}

export default AppWrap(Header, 'home', 'app__primarybg')