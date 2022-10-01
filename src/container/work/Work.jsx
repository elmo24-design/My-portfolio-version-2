import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion'

import {AppWrap, MotionWrap} from '../../wrapper'
import { urlFor, client } from '../../client'

import ImageModal from '../../components/ImageModal'

import './Work.scss'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity:1})
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])

  const [selectedWork, setSelectedWork] = useState(null)
  
  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    })

  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([ {y: 100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([ {y: 0, opacity: 1}])

      if(item === 'All'){
        setFilterWork(works)
      }else{
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      {
        selectedWork && 
        <>
         <ImageModal selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>
        </>
      }
      <h2 className="head-text"> My <span>Projects</span>
      </h2>
      <p className='app__flex mt-1'>Take a look at some of my projects</p>

      <div className="app__work-filter">
        {[ 'Frontend', 'Fullstack', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            { item }
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        { filterWork.map((work, index) => (
          // individual item 
          <div className="app__work-item app__flex" key={index}>
            {/* image container  */}
            <div className="app__work-img app__flex" onClick={() => setSelectedWork(work)}>
              <img src={urlFor(work.imgUrl)} alt={work.title} />
              {/* icon container  */}
         
            </div>
            {/* Item Contents  */}
            <div className="app__work-content app__flex">
              <div className="mv-btns">
                <a 
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillEye />
                  Visit
                </a>
                <a 
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className='github-btn'
                >
                  <AiFillGithub />
                  Code
                </a>
              </div>
              <h4 className='bold-text'>{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>

             
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'projects',
  'app__whitebg'
)