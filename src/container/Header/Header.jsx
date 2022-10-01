import React from 'react'
import {motion} from 'framer-motion'

import {AppWrap} from '../../wrapper'
import {images} from '../../constants'
import './Header.scss'

// import Typed from 'react-typed'
import Typewriter from 'typewriter-effect';

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
              <Typewriter
                options={{
                  strings: ['Fullstack Developer', 'Frontend Developer', 'UI Designer'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2500
                }}
              />
            </p>
            <p className="heading-desc-2">I Craft Creative And Engaging Web Apps</p>
          </div>
          {/* Call to action buttons  */}
          <div className="cta">
            <a href="#projects"> My Projects </a>
          </div>
        </motion.div>

        {/* Second div  */}
        <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1]}}
            transition={{ duration: 1.1 }}
            className="app__header-img"
        >
          <div>
            <img src={images.vexelNew} alt="profile_bg" />
          </div>
          
          <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
          >
            {[images.jsCircle, images.reactLogo, images.sass].map((circle,index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={`circle-${index}`}
                  className={`circle-cmp app__flex circle-${index}`}
                  drag 
                >
                    <img src={circle} alt="circle" />
                </motion.div>
            ))}
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