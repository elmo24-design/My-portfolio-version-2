import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../client'

const backdropVariants = {
   hidden:{
      opacity: 0
   },
   visible: {
      opacity: 1
   }
}
const modal = {
   hidden: {
      y: "-100vh"
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         delay: 0.2
      }
   }
}

function ImageModal({ selectedWork, setSelectedWork}) {

   const handleClick = (e) => {
      if(e.target.classList.contains('backdrop')){
         setSelectedWork(null)
      }
   }

   return (
      <>
         <motion.div
            className="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            onClick={handleClick}
         >
            <motion.div className='modal' variants={modal}>
               <img 
                  src={urlFor(selectedWork.imgUrl)} 
                  alt={selectedWork.title} 
                  className="modal-img"
               />
               <div className="badges">
                 {selectedWork.technologies.map((tech, index) => (
                  <div className="badges" key={index}>
                     #{tech}
                  </div>
                 ))}
               </div>
            </motion.div>
         </motion.div>   
      </>
   )
}

export default ImageModal