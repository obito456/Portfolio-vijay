import React from 'react';
import './Services.css'; 

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Design and development of responsive, user-friendly web applications using modern technologies like React, Angular',
      icon: 'fa fa-code' 
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Building native and cross-platform mobile applications for iOS and Android using technologies such as React Native or Flutter.',
      icon: 'fa fa-mobile' 
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Creating intuitive and aesthetically pleasing user interfaces with a focus on user experience (UX) and usability testing.',
      icon: 'fa fa-paint-brush' 
    },
    {
      id: 4,
      title: 'Backend Development',
      description: 'Development of scalable and efficient server-side applications using frameworks like Springboot, Django.',
      icon: 'fa fa-server' // Font Awesome class for an icon
    },
    {
      id: 5,
      title: 'Database Management',
      description: 'Designing and optimizing database schemas, writing queries, and ensuring data integrity and performance using SQL,MySql and NoSQL databases.',
      icon: 'fa fa-database' 
    },
    {
      id: 6,
      title: 'Cloud Services',
      description: 'Deploying and managing applications on cloud platforms like AWS, Google Cloud, or Microsoft Azure, ensuring scalability and reliability.',
      icon: 'fa fa-cloud' 
    }
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
