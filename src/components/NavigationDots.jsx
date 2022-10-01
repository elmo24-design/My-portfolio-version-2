import React from 'react'
import { Link } from 'react-scroll'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {
         ['home', 'projects', 'about', 'skills', 'testimonials', 'contact'].map((item, index) => (
          <Link 
            smooth 
            spy 
            to={item}
            style={active === item ? { backgroundColor: '#6C55E1'} : { }}
            key={ item + index }
            className="app__navigation-dot"
          />
           
         ))
      }
    </div>
  )
}

export default NavigationDots