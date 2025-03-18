import styles from '../styles/Skills.module.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', level: 90, icon: 'fab fa-html5' },
        { name: 'CSS', level: 85, icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', level: 80, icon: 'fab fa-js' },
        { name: 'React', level: 85, icon: 'fab fa-react' },
        { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
        { name: 'Python', level: 70, icon: 'fab fa-python' },
        { name: 'UI/UX Design', level: 80, icon: 'fas fa-paint-brush' },
        { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
    ];

    return (
        <section id="skills" className={styles.skills}>
            <h2 className={styles.sectionTitle}>My <span className="gradient-text">Skills</span></h2>
            <div className={`${styles.container} glassCard`}>
                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <div className={styles.skillCard} key={index}>
                            <div className={styles.skillIcon}>
                                <i className={skill.icon}></i>
                            </div>
                            <h3>{skill.name}</h3>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: `${skill.level}%` }}></div>
                            </div>
                            <span className={styles.percentage}>{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
