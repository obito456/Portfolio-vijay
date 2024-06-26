import React from 'react';
import './Resume.css'; // Assuming you have a separate CSS file for styling

const Resume = () => {
  return (
    <div className="resume">
      <div className="header">
        <h1>Vijay Kumar</h1>
        <p>Pippara, Andhra Pradesh</p>
        <p> +91-7780123456</p>
        <p> vijay733@gmail.com</p>
        <p><a href="https://www.linkedin.com/in/vijay-kumar-4aa2352a7">linkedin.com/in/vijay-kumar-4aa2352a7</a></p>
        <p><a href="https://github.com/obito456">github.com/obito456</a></p>
      </div>

      <div className="section">
        <h2>CAREER OBJECTIVE</h2>
        <p>Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings.</p>
      </div>

      <div className="section">
        <h2>TECHNICAL SKILLS</h2>
        <ul>
          <li>Languages: Java (Basic to Advanced Programming)</li>
          <li>Object Oriented Programming: Knowledge on Inheritance, Encapsulation, Polymorphism, Data Abstraction.</li>
          <li>Knowledge on Regular Expression, Multithreading.</li>
          <li>Knowledge on Advanced Functions in Java such as Lambda.</li>
          <li>Backend Framework: Core Java, Spring Boot, Hibernate JPA.</li>
          <li>Frontend Framework: HTML, CSS, JavaScript, ReactJS.</li>
          <li>Tools: VS Code, Jupyter Notebook, Anaconda Navigator.</li>
          <li>Operating System: Windows 11, Kali Linux.</li>
          <li>Data Visualization Tool: PowerBi.</li>
          <li>Version Control: Github.</li>
          <li>Databases: MySQL.</li>
          <li>Knowledge on Data Definition Language, Data Manipulation Language, Data Control Language, Data Query Language, keys.</li>
          <li>Others: ChatGPT.</li>
        </ul>
      </div>

      <div className="section">
        <h2>PROJECTS</h2>
        <div className="project">
          <h3>E-Commerce Website</h3>
          <p>This Project is Sports-Ware E-Commerce.</p>
          <p><strong>Backend:</strong> Core Java, Spring Boot, Hibernate JPA — Database: MySQL.</p>
          <p><strong>Tools:</strong> Eclipse, Tom Cat Server, Workbench.</p>
          <p><a href="#">Link</a></p>
        </div>
        <div className="project">
          <h3>React Js Company Website</h3>
          <p>Website consists of the Company information by displaying the different navigations.</p>
          <p>It is a Responsive and React Js Project.</p>
          <p><strong>Frontend:</strong> HTML, CSS, Bootstrap5, JavaScript, React Js.</p>
          <p><strong>Tools:</strong> VS Code.</p>
          <p><a href="#">Link</a></p>
        </div>
      </div>

      <div className="section">
        <h2>EDUCATION</h2>
        <p><strong>RGUKT IIIT, Ongole</strong> (2018 – 2022)</p>
        <p>B.Tech - Civil Engineering - CGPA - 8.40</p>
        <p>Ongole, Andhra Pradesh</p>
      </div>

      <div className="section">
        <h2>CERTIFICATIONS</h2>
        <p>Completed Python Basic to Advanced at PythonLife.</p>
        <p>ChatGPT - Great Learning.</p>
      </div>

      <div className="section">
        <h2>KEY STRENGTHS</h2>
        <ul>
          <li>Effective Communication Skills.</li>
          <li>Teamwork.</li>
          <li>Flexibility.</li>
          <li>Quick learner.</li>
        </ul>
      </div>

      <div className="section">
        <h2>PERSONAL DETAILS</h2>
        <p><strong>Date of Birth:</strong> 11 Dec 2000</p>
        <p><strong>Languages Known:</strong> English, Telugu, Hindi</p>
        <p><strong>Present Address:</strong> Pippara</p>
        <p><strong>Marital Status:</strong> Unmarried</p>
        <p><strong>Nationality:</strong> Indian</p>
      </div>
    </div>
  );
}

export default Resume;
