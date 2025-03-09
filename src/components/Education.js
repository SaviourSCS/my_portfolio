import React, { useState, useEffect } from 'react';
import educationData from '../data/education.json';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call or import
    setEducation(educationData.education);
  }, []);

  return (
    <section id="education" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 relative inline-block">
          Education
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-secondary"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {item.period}
              </span>
              <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
              <h4 className="text-lg text-light-gray mb-4">{item.institution}</h4>
              <p className="text-light-gray mb-5">{item.description}</p>
              
              {item.courses && (
                <div className="mt-4">
                  <h5 className="text-base font-semibold mb-2 text-secondary">Key Courses:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-light-gray">
                    {item.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.certifications && (
                <div className="mt-4">
                  <h5 className="text-base font-semibold mb-2 text-secondary">Certifications:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-light-gray">
                    {item.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;