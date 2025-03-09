import React, { useState, useEffect } from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call or import
    setExperiences(experienceData.experiences);
  }, []);

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 relative inline-block">
          Work Experience
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-secondary"></span>
        </h2>
        
        <div className="relative pl-8 md:pl-16 max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-secondary/30"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-secondary transform -translate-x-1/2"></div>
              
              <div className="bg-white/5 rounded-lg p-6 md:p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 ml-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <span className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-light-gray mb-4 font-normal">{exp.company}</h4>
                  </div>
                </div>
                
                <p className="text-light-gray mb-5">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded text-sm text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;