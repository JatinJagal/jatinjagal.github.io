import React, { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: 'fas fa-bars',
      title: 'Android Development',
      description: 'Every applications should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.',
      detailedDescription: 'I specialize in developing high-performance Android applications using Flutter and native Android technologies. My services include creating responsive and intuitive mobile apps that work seamlessly across different Android devices. I focus on optimizing app performance, ensuring smooth animations, implementing best practices for code structure, and delivering pixel-perfect UI/UX designs. Whether you need a simple utility app or a complex enterprise solution, I can help bring your vision to life with clean, maintainable code and excellent user experience.'
    },
    {
      icon: 'far fa-user',
      title: 'Cross-Platform Development',
      description: 'Every applications should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.',
      detailedDescription: 'As a Flutter developer, I excel in cross-platform mobile app development, allowing you to reach both Android and iOS users with a single codebase. This approach saves time and resources while maintaining native performance. My cross-platform development services include building apps that provide consistent user experience across all platforms, leveraging Flutter\'s powerful framework for rapid development, implementing platform-specific features when needed, and ensuring your app looks and feels native on both Android and iOS devices. This is the most cost-effective way to launch your mobile application.'
    },
    {
      icon: 'far fa-bell',
      title: 'UI/UX Design',
      description: 'Every applications should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.',
      detailedDescription: 'I create beautiful and intuitive user interfaces that not only look great but also provide exceptional user experience. My UI/UX design services include designing user-friendly interfaces that are easy to navigate, creating visually appealing designs that match your brand identity, ensuring consistency across all screens and interactions, implementing modern design trends while maintaining usability, conducting user testing to optimize the experience, and creating responsive designs that adapt to different screen sizes. A well-designed app not only attracts users but also keeps them engaged and coming back for more.'
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="service" id="services">
      <div className="title">
        <h2>Our Services</h2>
      </div>
      <div className="box">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <i className={service.icon}></i>
            <h5>{service.title}</h5>
            <div className="pra">
              <p>{service.description}</p>
              <p style={{ textAlign: 'center' }}>
                <a 
                  className="button" 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(service);
                  }}
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedService && (
        <div 
          className="modal-overlay" 
          onClick={handleOverlayClick}
        >
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <i className={selectedService.icon}></i>
              <h3>{selectedService.title}</h3>
            </div>
            <div className="modal-body">
              <p>{selectedService.detailedDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

