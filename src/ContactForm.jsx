import React from 'react';
import { useFormInput } from './useFormInput';
import './ContactForm.css';


const ContactForm = ({ onSubmit }) => {
  const name = useFormInput('');
  const email = useFormInput('');
  const message = useFormInput('');

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !name.inputProps.value ||
      !email.inputProps.value ||
      !message.inputProps.value
    ) {
      alert('Please fill out all fields');
      return;
    }

    console.log({
      name: name.inputProps.value,
      email: email.inputProps.value,
      message: message.inputProps.value
    });

    onSubmit(event);
    name.reset();
    email.reset();
    message.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <label>
        Name:
        <input type="text" {...name.inputProps} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" {...email.inputProps} />
      </label>
      <br />

      <label>
        Message:
        <textarea {...message.inputProps} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
