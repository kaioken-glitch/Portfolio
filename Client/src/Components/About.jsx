import React from 'react'
import '../About.css'

// Experience data with timeline
const EXPERIENCE = [
    {
        id: 1,
        period: '2023 – 2024',
        title: 'Software Engineering Trainee',
        company: 'Moringa School',
        location: 'Nairobi, Kenya',
        color: '#10b981',
        details: [
            'Completed intensive full-stack software engineering training (Python, Flask, JavaScript, SQL, HTML/CSS)',
            'Built and deployed small web applications integrating APIs and databases',
            'Collaborated in agile teams to design backend systems and REST APIs',
            'Gained hands-on experience with version control (Git/GitHub) and cloud-based deployment workflows'
        ]
    },
    {
        id: 2,
        period: '2021 – Present',
        title: 'Freelance Virtual Assistant / Data Manager',
        company: 'Remote',
        location: 'Remote',
        color: '#3b82f6',
        details: [
            'Provided data management, administrative, and technical support to small businesses and student projects',
            'Automated repetitive workflows using Python, increasing productivity by 40%',
            'Designed structured databases and dashboards to track client operations',
            'Handled email scheduling, research, and calendar management for multiple clients'
        ]
    }
];

// Education data
const EDUCATION = {
    degree: 'Bachelor of Science in Information Technology',
    university: 'Zetech University, Kenya',
    period: '2021 – Present',
    certifications: [
        {
            title: 'Microsoft Office Specialist',
            icon: '📊'
        },
        {
            title: 'Google Workspace Productivity Certificate',
            icon: '☁️'
        },
        {
            title: 'Responsive Web Design – freeCodeCamp',
            icon: '💻'
        }
    ]
};

// Core values
const VALUES = [
    {
        id: 1,
        title: 'Clarity over cleverness',
        icon: '📝'
    },
    {
        id: 2,
        title: 'User empathy first',
        icon: '👥'
    },
    {
        id: 3,
        title: 'Ship, learn, iterate',
        icon: '🚀'
    },
    {
        id: 4,
        title: 'Collaboration always',
        icon: '🤝'
    }
];

export default function About() {
    return (
        <div className="about">
            <div className="aboutPill">
                <h5>ABOUT & EXPERIENCE</h5>
            </div>
            <h3 className='aboutHeading'>
                Background of  
                <h3 className='aboutColored'>
                    Your's truly.
                </h3>
            </h3>

            {/* Professional Summary */}
            <div className="aboutSummary">
                <h4>Professional Summary</h4>
                <p>
                    Tech-savvy and detail-oriented Software Engineer & Virtual Assistant with a strong background in Python automation, 
                    web development, and data management. Trained at Moringa School, skilled in building efficient digital solutions, 
                    automating workflows, and supporting remote teams. Passionate about leveraging code and technology to simplify 
                    business operations and enhance productivity in remote environments.
                </p>
            </div>
            <div className="aboutMix">
                  <div className="experienceSection">
                    <h4>Experience Timeline</h4>
                    <div className="experienceTimeline">
                      {EXPERIENCE.map((exp) => (
                        <div key={exp.id} className="experienceItem">
                          <div className="timelineDot" style={{ backgroundColor: exp.color }}></div>
                          <div className="experienceContent">
                            <div className="experienceHeader">
                              <h5 className="jobTitle">{exp.title}</h5>
                              <span className="period">{exp.period}</span>
                            </div>
                            <div className="companyInfo">
                              <p className="company">{exp.company}</p>
                              <span className="location">{exp.location}</span>
                            </div>
                            <ul className="jobDetails">
                              {exp.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="educationValuesContainer">
                    <div className="educationCard">
                      <div className="cardIcon">🎓</div>
                      <h4>Education</h4>
                      <div className="educationContent">
                        <p className="degree">{EDUCATION.degree}</p>
                        <p className="university">{EDUCATION.university}</p>
                      </div>
                      <div className="certificationsSection">
                        <h5>Certifications</h5>
                        <ul className="certifications">
                          {EDUCATION.certifications.map((cert, index) => (
                            <li key={index}>
                              <span className="certIcon">{cert.icon}</span>
                              {cert.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                      
                    <div className="valuesCard">
                      <div className="cardIcon">🛡️</div>
                      <h4>What I value</h4>
                      <ul className="valuesList">
                        {VALUES.map((value) => (
                          <li key={value.id}>
                            <span className="valueIcon">{value.icon}</span>
                            {value.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
        </div>
    )
}
