import styles from '../styles/About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h2 className={styles.sectionTitle}>About <span className="gradient-text">Me</span></h2>
            <div className={styles.content}>
                <div className={`${styles.card} glassCard`}>
                    <div className={styles.info}>
                        <p>
                            Hello! I&apos;m a passionate web developer with a strong focus on creating beautiful,
                            functional, and user-friendly websites. With expertise in modern frontend frameworks
                            and backend technologies, I create immersive digital experiences.
                        </p>
                        <p>
                            My journey in web development started several years ago, and since then,
                            I&apos;ve worked on numerous projects ranging from simple landing pages to
                            complex web applications. I love solving problems and turning ideas into reality.
                        </p>
                        <p>
                            When I&apos;m not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or enjoying outdoor activities.
                        </p>
                    </div>
                    <div className={styles.personal}>
                        <ul>
                            <li><strong>Name:</strong> Your Name</li>
                            <li><strong>Email:</strong> your.email@example.com</li>
                            <li><strong>Location:</strong> Your City, Country</li>
                            <li><strong>Status:</strong> Available for opportunities</li>
                        </ul>
                        <a href="/resume.pdf" className={styles.animatedBtn} download>
                            <span className={styles.borderAnimation}></span>
                            <span className={styles.btnContent}>
                                Download Resume <i className="fas fa-download"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;