import React, { useState, useEffect } from 'react';
import achievementsData from '../data/achievements.json';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call or import
    setAchievements(achievementsData.achievements);
  }, []);

  return (
    <section id="achievements" className="py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 relative inline-block">
          Achievements
          <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-secondary"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 border-l-4 border-secondary"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <span className="text-secondary font-semibold">{achievement.year}</span>
              </div>
              <h4 className="text-base text-light-gray mb-4 italic">{achievement.organization}</h4>
              <p className="text-light-gray">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;