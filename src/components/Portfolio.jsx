import React from 'react';
import './Portfolio.css'; // Assuming you have a separate CSS file for styling

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* About Me Section */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name]. I am a passionate [Your Profession] with [Number] years of experience in [Your Field].
          I specialize in [Your Specialization], and I enjoy [Something Unique About You or Your Work].
        </p>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project Title 1</h3>
          <p>Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h3>Project Title 2</h3>
          <p>Description of Project 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">View Project</a>
        </div>
        {/* Add more projects as needed */}
      </section>

      {/* Resume Section */}
      <section className="section">
        <h2>Resume</h2>
        <div className="resume-item">
          <h3>Education</h3>
          <p>[Your Degree] - [Your Major/Field of Study]<br />
          [University Name] - [Graduation Year]</p>
        </div>
        <div className="resume-item">
          <h3>Experience</h3>
          <p>[Your Job Title]<br />
          [Company Name] - [Employment Period]</p>
        </div>
        {/* Add more resume sections such as Skills, Certifications, etc. */}
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via the following channels:</p>
        <ul>
          <li>Email: [Your Email]</li>
          <li>Phone: [Your Phone Number]</li>
          <li>LinkedIn: <a href="[LinkedIn Profile URL]">LinkedIn Profile</a></li>
          <li>GitHub: <a href="[GitHub Profile URL]">GitHub Profile</a></li>
        </ul>
        <form className="contact-form">
          <h3>Send Me a Message</h3>
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
      </section>
    </div>
  );
}

export default Portfolio;
