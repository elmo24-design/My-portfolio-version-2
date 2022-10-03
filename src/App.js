import React, {useState, useEffect} from 'react'
import { About, Footer, Header, Skills, Testimonial, Work, Copyright } from './container'
import {Navbar} from './components'
import './App.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState("")

  let darkmode = localStorage.getItem('darkmode')

  const enableDarkMode = () => {
    setDarkMode(true)
    setChecked("yes")
    localStorage.setItem('darkmode', 'enabled')
  }

  const disableDarkMode = () => {
    setDarkMode(false)
    setChecked("")
    localStorage.setItem('darkmode', null)
  }

  const handleChange = () => {
    darkmode = localStorage.getItem('darkmode')

    if(darkmode !== 'enabled'){
      enableDarkMode()
    }else{
      disableDarkMode()
    }
  }

  useEffect(() => {
    if(darkmode === 'enabled'){
      enableDarkMode()
    }
    
  }, []);

  return (
    <div className={darkMode ? "app darkmode" : "app"}>
      <Navbar darkMode={darkMode} checkedBool={checked} handleChange={handleChange} />
      <Header />
      <Work />
      <About />
      <Skills />
      <Testimonial />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App