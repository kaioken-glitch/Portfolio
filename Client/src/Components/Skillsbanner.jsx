import React from 'react'
import '../Skillsbanner.css'

export default function Skillsbanner() {
  const skills = [
    'Figma',
    'React',
    'TypeScript',
    'Node.js',
    'Framer',
    'Motion design',
    'Design systems',
    'UI/UX Design',
    'Web Development',
    'Product Design'
  ]

  return (
    <div className="skillsBanner">
      <div className="skillsTrack">
        {skills.map((skill, index) => (
          <span key={index} className="skillBadge">
            {skill}
          </span>
        ))}
        {skills.map((skill, index) => (
          <span key={`duplicate-${index}`} className="skillBadge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}