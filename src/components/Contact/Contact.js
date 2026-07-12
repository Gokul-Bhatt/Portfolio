import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vrv0xd",
        "template_ofbne8t",
        form.current,
        "fDytvibGMJPhxPCmz"
      )
      .then(() => {
        alert("Message Sent Successfully 🚀");
        e.target.reset();
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-heading">

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          Have an idea or opportunity? Let's build something amazing together.
        </p>

      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <div className="info-card">
            <h4>📧 Email</h4>
            <p>gokulbhatt864@gmail.com</p>
          </div>

          <div className="info-card">
            <h4>📍 Location</h4>
            <p>Dehradun, Uttarakhand, India</p>
          </div>

          <div className="info-card">
            <h4>💼 Available For</h4>
            <p>Internships • Freelance • Full-Time</p>
          </div>

          <div className="socials">

            <a
              href="http://github.com/Gokul-Bhatt"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gokul-bhatt/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Gokul-/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>

          </div>

        </div>

        {/* Right Side */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="your_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="your_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message 🚀
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;