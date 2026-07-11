import React, { useRef } from 'react'
import "./Contact.css"
import facebook from "../../assets/facebook-icon.png"
import twitter from "../../assets/twitter.png"
import insta from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3vrv0xd', 'template_ofbne8t', form.current, {
        publicKey: 'fDytvibGMJPhxPCmz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contactpage">
      <div className="contact">
        <h1 className="contactpageTitle">Contact Me</h1>
        <span className="contactdecs">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form}  onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Name' name='your_name' id='info' />
          <input type="email" className="email" placeholder='Email' name='your_email'id='info' />
          <textarea name="message" rows="5" placeholder='message' className='msg'id='info' ></textarea>
          <button className="submitbtn" type='submit' value='send'>Submit</button>
          <div className="links">

           <a href="https://www.instagram.com/"><img src={insta} alt="instagram" className="link"  /></a> 
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FGokul15891775"><img src={twitter} alt="twitter" className="link" /></a>  
          <a href="https://www.facebook.com/">  <img src={facebook} alt="facebook" className="link" /></a> 
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
