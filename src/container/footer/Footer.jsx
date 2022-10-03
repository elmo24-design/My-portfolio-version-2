import React, { useState } from 'react'

import {images} from '../../constants';
import {AppWrap,MotionWrap} from '../../wrapper';
import {client} from '../../client';
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className="head-text">Contact <span>Me</span></h2>
      <p>Let's build together!</p>

      <div className="app__footer-cards">
        <div className='app__footer-card'>
          <img src={images.email} alt="email" className='gmail-img'/>
          <a href="mailto:mahupil24@gmail.com" className='p-text'>mahupil24@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile"/>
          <a href="tel: +09683066556" className='p-text'>09683066556</a>
        </div>

        { !isFormSubmitted ? 
          <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
            <div className="app__flex">
              <input type="text" className='p-text' placeholder='Your Name' name="name" value={name} onChange={handleChangeInput} required />
            </div>
            <div className="app__flex">
              <input type="email" className='p-text' placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} required />
            </div>
            <div>
              <textarea
                className='p-text'
                placeholder='your message'
                name="message"
                value={message}
                onChange={handleChangeInput}
                required 
              >
              </textarea>
            </div>
            <button 
              type="submit" 
              className='p-text'
            >
              { loading ? 'Sending' : 'Send Message'}
            </button>
          </form>
          :
          <div>
            <h2 className='mb-3'>Thank you for getting in touch!</h2>
          </div>
        }
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)