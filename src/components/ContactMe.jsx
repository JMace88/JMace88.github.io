import React from 'react';
import './styles/contact.css';

const ContactMe = () => {
  return (
    <>
      <main>
        <div className='card-contact'>
          <div className='formbox'>
            <h1 className='contact-header'>
              To contact me please fill out this form.
            </h1>
            <form action='https://formspree.io/f/xjvnaqwa' method='POST'>
              <div>
                <label form='name'>Name:</label>
                <input type='text' name='name' />
              </div>
              <br />
              <div>
                <label form='email'>Email:</label>
                <input type='email' name='email' />
              </div>
              <br />
              <div className='message-box'>
                <label form='message'>Your message:</label>
                <textarea
                  name='message'
                  placeholder='Type your message here . . .'
                ></textarea>
              </div>
              <button className='contact-button' type='submit'>
                Send it!
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactMe;
