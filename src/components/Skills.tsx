import React from 'react';
import './Skills.css';
 
import basketballIcon from '../assets/basketball.png';  
import singing from '../assets/singing.png';  
import dancing from '../assets/dance.png';  
import drinking from '../assets/drinking.png';  
import swimming from '../assets/swimming.png';  
import fishing from '../assets/fishing.png';  


interface SkillItemProps {
  name: string;
  icon: string;  
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => (
  <div className="skill-item-container">
    <img src={icon} alt={`${name} icon`} className="skill-icon" />
    <span className="skill-name">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  const skillsData = [
    { name: 'Basketball', icon: basketballIcon },
    { name: 'Fishing', icon: fishing },
    { name: 'Drinking', icon: drinking },
    { name: 'Swimming', icon: swimming },
    { name: 'Singing', icon: singing },
    { name: 'Dancing', icon: dancing },
  ];

  return (
    <div id="skills" className="skills-section-container">
      
      <h2 className="skills-title">
        Skills
        <span className="skills-title-underline"></span>
      </h2>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillItem key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;