import React from 'react';
import './Contact.css'; // Assuming you have a separate CSS file for styling

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Please feel free to reach out to us using the contact information below:</p>
      
      <div className="contact-info">
        <p><strong>Address:</strong> 123 ramalayam St, Pippara, India</p>
        <p><strong>Email:</strong> vijay@email.com</p>
        <p><strong>Phone:</strong> +91 7780123456</p>
      </div>

      <form className="contact-form">
        <h2>Send Us a Message</h2>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
