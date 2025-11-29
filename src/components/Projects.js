import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Let's Meet",
      category: "Dating App",
      image: process.env.PUBLIC_URL + '/images/projects/letsmeet.jpg',
      fallbackImage: process.env.PUBLIC_URL + '/images/letsmeet-pro.png',
      description: "A feature-rich dating application that helps users find their perfect match. Built with Flutter, featuring real-time chat, image sharing, and date scheduling capabilities. Currently has 5K+ downloads on Google Play Store.",
      stats: [
        { icon: 'fas fa-download', text: '5K+ Downloads' },
        { icon: 'fas fa-star', text: 'Mature 17+' }
      ],
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.innoventixsolutions.letsmeet'
    },
    {
      id: 2,
      title: 'IMP - Medical Products',
      category: 'Medical App',
      image: process.env.PUBLIC_URL + '/images/projects/imp.jpg',
      fallbackImage: process.env.PUBLIC_URL + '/images/imp-pro.png',
      description: 'A healthcare application designed for users to report issues with medical products or devices. Features user registration, complaint submission, and direct reporting to hospital administration for quick review and action.',
      stats: [
        { icon: 'fas fa-download', text: '50+ Downloads' },
        { icon: 'fas fa-heart', text: 'Healthcare' }
      ],
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.app.impmedical'
    },
    {
      id: 3,
      title: 'WeShare',
      category: 'Media Sharing App',
      image: process.env.PUBLIC_URL + '/images/projects/weshare.jpg',
      fallbackImage: process.env.PUBLIC_URL + '/images/weshare-pro.png',
      description: 'A comprehensive photo and video storage solution with cloud backup. Features include cross-device access, smart search by tags/objects/places, album sharing, and memory reliving. Helps users free up device storage while keeping memories accessible.',
      stats: [
        { icon: 'fas fa-download', text: '1K+ Downloads' },
        { icon: 'fas fa-cloud', text: 'Cloud Storage' }
      ],
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.app.weshare'
    }
  ];

  const handleImageError = (e, fallbackImage) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="projects" id="projects">
      <div className="title">
        <h2>My Projects</h2>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => handleImageError(e, project.fallbackImage)}
              />
            </div>
            <div className="project-content">
              <h5>{project.title}</h5>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-stats">
                {project.stats.map((stat, index) => (
                  <span key={index}>
                    <i className={stat.icon}></i> {stat.text}
                  </span>
                ))}
              </div>
              <p style={{ textAlign: 'center', marginTop: '20px' }}>
                <a className="button" href={project.playStoreLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-google-play"></i> View on Play Store
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

