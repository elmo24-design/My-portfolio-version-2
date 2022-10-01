import React from 'react'
import  { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, className) => function HOC() {
   const footerYear = new Date().getFullYear()

   return (
      <div id={idName} className={`app__container ${className}`}>
         <SocialMedia />

         <div className="app__wrapper app__flex">
            <Component />

            <div className="copyright">
               <p className='p-text'> @{footerYear} ELMO MAHUPIL </p>
               <p className="p-text">All rights reserved</p>
            </div>
         </div>
         
         <NavigationDots active={idName}/>
      </div>
   )
}

export default AppWrap