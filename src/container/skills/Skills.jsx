import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'

import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Skills.scss'

const Skills = () => {
  
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"] | order(_createdAt desc)'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setExperiences(data)
    })
    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })

  }, [])

  return (
    <>
      <h2 className="head-text"> <span>Skills</span> & Experience</h2>

      {/* Skills Container  */}
      <div className="app__skills-container">
        {/* Skills List  */}
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            // Skills Item 
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex'>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Experiences list  */}
        <motion.div className="app__skills-exp">
            {experiences.map((experience) => (
              // Experiences items
              <motion.div
                className='app__skills-exp-item'
                key={experience.year}
              > 
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                {/* Experiences -> work items  */}
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1]}}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work app__flex"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor='#fff'
                        classNamme='skills-tooltip'
                      >
                        {work.desc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
)