import React from 'react'
import { useState } from 'react'
import ContactForm from './ContactForm'
import './ContactFormApp.css'

const ContactFormApp = () => {
  const [isSubmitted, setisSubmitted] = useState(false)
  function handleFormSubmit(event) {
    event.preventDefault();
    setisSubmitted(true)
    
  }
  function resetForm() {
    setisSubmitted(false)
  }

  return (
  <div>
    {isSubmitted ? (
      <>
      <p className="success-message">Thank you! Your message was sent.</p>
      <button className="success-button" onClick={resetForm}> Send another message</button>
      </>
    ) : (
      <ContactForm onSubmit={handleFormSubmit} />
    )}
  </div>
);

}

export default ContactFormApp;