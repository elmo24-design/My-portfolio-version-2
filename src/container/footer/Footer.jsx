import React from 'react'

import {images} from '../../constants';
import {AppWrap,MotionWrap} from '../../wrapper';
import './Footer.scss'

const Footer = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // })
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  // const [loading, setLoading] = useState(false)

  // const {name, email, message} = formData

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target

  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })
  // }

  // const handleSubmit = () => {
  //   setLoading(true)

  //   const contact = {
  //     _type: 'contact',
  //     name: name,
  //     email: email,
  //     message: message
  //   }

  //   client.create(contact).then(() => {
  //     setLoading(false)
  //     setIsFormSubmitted(true)
  //   })
  // }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className='app__footer-card'>
          <img src={images.email} alt="email"/>
          <a href="mailto:mahupil24@gmail.com" className='p-text'>mahupil24@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile"/>
          <a href="tel: +09683066556" className='p-text'>09683066556</a>
        </div>

        <form action="POST" data-netlify="true" className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className='p-text' placeholder='Your Name' name="name" id="name" />
          </div>
          <div className="app__flex">
            <input type="email" className='p-text' placeholder='Your Email' name="email" id="email" />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='your message'
              name="message"
              id="message"
            >
            </textarea>
          </div>
          <div className="field">
            <div data-netlify-recaptcha="true"></div> 
          </div>
          <button 
            type="button" 
            className='p-text' 
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)