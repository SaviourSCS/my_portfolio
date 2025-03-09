import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  const [skills, setSkills] = useState({
    intro: '',
    additionalInfo: '',
    categories: []
  });

  useEffect(() => {
    // In a real app, this would be an API call or import
    setSkills(skillsData);
  }, []);

  return (
    <section id="skills" className="py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 relative inline-block">
          Technical Skills
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-secondary"></span>
        </h2>
        
        <div className="grid md:grid-cols-12 gap-10">
          {/* Left Column - Intro Text (35%) */}
          <div className="md:col-span-5 lg:col-span-4">
            <p className="text-lg text-light-gray mb-8 leading-relaxed">
              {skills.intro}
            </p>
            <p className="text-lg text-light-gray leading-relaxed">
              {skills.additionalInfo}
            </p>
          </div>
          
          {/* Right Column - Skills Categories (65%) */}
          <div className="md:col-span-7 lg:col-span-8 space-y-8">
            {skills.categories && skills.categories.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium hover:bg-secondary/30 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;