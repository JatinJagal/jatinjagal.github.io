import React from 'react';

const Experience = () => {
  const experiences = [
    {
      icon: 'fas fa-code',
      title: 'Flutter Developer',
      company: 'Innoventix Solutions',
      dateRange: 'November 2023 - November 2025',
      description: 'Developing cross-platform mobile applications using Flutter framework. Specialized in creating dating apps, social media platforms, and healthcare solutions with focus on user experience, performance optimization, and modern UI/UX design patterns. While working in this organization, I created the Let\'s Meet app, WeShare app, and IMP Medical app. I can deploy apps to both Google Play Store and Apple App Store.',
      skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'State Management', 'Play Store Deployment', 'App Store Deployment']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Developer',
      company: 'Published Apps on Google Play Store',
      description: 'Successfully developed and published multiple applications on Google Play Store with thousands of downloads. Expertise in app architecture, cloud integration, real-time features, and ensuring smooth performance across different Android devices.',
      skills: ['Android Development', 'Google Play Console', 'App Deployment', 'UI/UX Design', 'API Integration']
    }
  ];

  return (
    <section className="experience" id="skills">
      <div className="title">
        <h2>Experience</h2>
      </div>
      <div className="experience-content">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-icon">
              <i className={exp.icon}></i>
            </div>
            <div className="experience-text">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              {exp.dateRange && <p className="experience-date">{exp.dateRange}</p>}
              <p>{exp.description}</p>
              <p className="experience-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

