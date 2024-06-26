import React from 'react';
import './Home.css';
import bgImage from "../Images/fk.png";

const Home = () => {
  return (
    <div className="container">
      <div>
      <h1 className='h1'>Hi,I'm vijay</h1>
      <p className='p1'>
      I am a Java developer specializing in designing,implementing,<br/>  and maintaining robust, efficient, and scalable Java-based <br/>applications. My expertise includes proficiency in Java<br/> frameworks , tools , and best practices to deliver<br/> high-quality software solutions.
      </p>
      </div>
      <div>
      <img src={bgImage} alt="Example" className="image" />
      <h2 className='h2'>Vijay</h2>
      </div>
    </div>
  );
}

export default Home;
