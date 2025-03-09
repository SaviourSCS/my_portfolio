import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState([]);
  
  useEffect(() => {
    // In a real app, this would be an API call or import
    setProjects(projectsData.projects);
    setFilters(projectsData.filters);
  }, []);
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 relative inline-block">
          Featured Projects
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-secondary"></span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value 
                  ? 'bg-secondary text-primary' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoLink} 
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary hover:bg-secondary/90 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-light-gray mb-6 text-sm leading-relaxed">{project.description}</p>
                
                {/* Key Features Section */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-secondary">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-light-gray">
                    {project.keyFeatures && project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-xs text-secondary"
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

export default Projects;