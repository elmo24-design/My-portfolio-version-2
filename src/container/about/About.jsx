import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import './About.scss'
import { urlFor, client} from '../../client'

// const abouts = [
//   { title: 'Frontend', description: 'I am a frontend developer', imgURL: images.about01},
//   { title: 'Backend', description: 'I am a backend developer', imgURL: images.about02},
//   { title: 'Fullstack', description: 'I am a fullstack developer', imgURL: images.about03},
//   { title: 'UI/UX', description: 'I am a web designer', imgURL: images.about04},
// ]

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data)
      })
  }, [])

  return (
    <div className='app__about'>
      <h2 className="head-text"> I Craft <span>Creative</span> and <span>Engaging</span> Web Apps</h2>
      <div className="app__profiles">
        {
          abouts.map((about, i) => (
            <motion.div
              whileInView={{ opacity: 1}}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + i}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20}}>{about.title}</h2>
              <p className="text" style={{ marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
)