import React from 'react'
import '../Projects.css'
import liquidBarsScreenshot from '../assets/Screenshot 2026-04-09 225333.png'
import flowStateScreenshot from '../assets/Screenshot 2026-04-09 230917.png'
import miniWikiScreenshot from '../assets/Screenshot 2026-04-09 231244.png'

// Projects constant array with project data
const PROJECTS = [
    {
        id: 1,
        title: 'Liquid Bars',
        description: 'A full-featured music player built in the browser. Play local files, stream from YouTube, sync lyrics, and enjoy a dark glass UI that reacts to album art in real time.',
        image: liquidBarsScreenshot,
        accentColor: '#10b981',
        technologies: ['React', 'Node.js', 'Supabase', 'WebGL', 'Vite'],
        liveLink: 'https://lqdbars.onrender.com/',
        githubLink: 'https://github.com/kaioken-glitch/LQDBars'
    },
    {
        id: 2,
        title: 'FlowState',
        description: 'A productivity and note-taking application designed to help users organize their thoughts and manage tasks efficiently.',
        image: flowStateScreenshot,
        accentColor: '#3b82f6',
        technologies: ['React', 'Node.js', 'MongoDB'],
        liveLink: null,
        githubLink: 'https://github.com/kaioken-glitch/FlowState'
    },
    {
        id: 3,
        title: 'Mini-Wiki',
        description: 'A command-line wiki application for storing, searching, and managing knowledge entries. Features full CRUD operations, categories, tagging, and advanced search with SQLAlchemy ORM.',
        image: miniWikiScreenshot,
        accentColor: '#a855f7',
        technologies: ['Python', 'SQLAlchemy', 'Alembic'],
        liveLink: null,
        githubLink: 'https://github.com/kaioken-glitch/Mini-Wiki'
    },
    {
        id: 4,
        title: 'Starbound',
        description: 'A narrative-driven space exploration and colony simulation game. Make critical decisions as your ship travels the galaxy, manage systems, scan planets for habitability, and establish colonies.',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop',
        accentColor: '#f59e0b',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        liveLink: null,
        githubLink: 'https://github.com/kaioken-glitch/Starbound'
    }
];

// Function to render project cards
const renderProjectCards = (projects) => {
    return projects.map((project) => (
        <div key={project.id} className="projectCard" style={{ '--accent-color': project.accentColor }}>
            <img src={project.image} alt={project.title} className="projectImage" />
            <div className="projectContent">
                <h4 className="projectTitle">{project.title}</h4>
                <p className="projectDescription">{project.description}</p>
                <div className="technologies">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="techTag">{tech}</span>
                    ))}
                </div>
                <div className="projectLinks">
                    {project.liveLink ? (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="liveLink">
                            View
                        </a>
                    ) : (
                        <button className="liveLink disabled" disabled>
                            View
                        </button>
                    )}
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="githubLink">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    ));
};

export default function Projects() {



    return (
        <div className="projects">
            <div className="pillContainer">
                <h5>SELECTED WORK</h5>
            </div>
            <h3 className='projectsheading'>
                Projects i'm  
                <h3 className='colored'>
                    proud of.
                </h3>
            </h3>
            <div className="projectsGrid">
                {renderProjectCards(PROJECTS)}
            </div>
        </div>
    )
}
