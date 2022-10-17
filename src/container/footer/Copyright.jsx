import React from 'react'

function Copyright() {
   const footerYear = new Date().getFullYear()

   return (
      <div className="app__footer-copyright text-center">
         <p style={{ fontSize: 12}}> &copy; {footerYear} ELMO MAHUPIL. ALL RIGHTS RESERVED </p>
      </div>
   )
}

export default Copyright