import styles from '../styles/Projects.module.css';
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: '/projects/ecommerce.jpg',
            github: '#',
            demo: '#'
        },
        {
            title: 'Task Management App',
            description: 'A Kanban-style task management application with drag-and-drop functionality and real-time updates.',
            technologies: ['React', 'Redux', 'Firebase', 'CSS3'],
            image: '/projects/task-app.jpg',
            github: '#',
            demo: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'A responsive portfolio website with glassmorphism UI, smooth animations, and contact form.',
            technologies: ['Next.js', 'CSS Modules', 'Framer Motion'],
            image: '/projects/portfolio.jpg',
            github: '#',
            demo: '#'
        },
        {
            title: 'Weather Dashboard',
            description: 'A weather application that shows current conditions and forecasts with beautiful visualizations.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
            image: '/projects/weather.jpg',
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.sectionTitle}>My <span className="gradient-text">Projects</span></h2>
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div className={`${styles.projectCard} glassCard`} key={index}>
                        <div className={styles.projectImage}>
                            <Image
                                src={project.image || '/placeholder.jpg'}
                                alt={project.title}
                                width={500}
                                height={250}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className={styles.projectInfo}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.technologies.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                            <div className={styles.projectLinks}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> Code
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;