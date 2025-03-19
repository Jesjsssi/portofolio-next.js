import styles from '../styles/Hero.module.css';

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.content}>
                <h1 className="fadeIn">
                    <span>Hello, I&apos;m</span>
                    <span className="gradient-text"> Your Name</span>
                </h1>
                <h2 className={`${styles.subtitle} fadeIn`}>
                    Web Developer & Designer
                </h2>
                <p className={`${styles.description} fadeIn`}>
                    I build stunning, interactive web experiences
                    with modern technologies and clean code.
                </p>
                <div className={styles.buttons}>
                    <a href="#projects" className={styles.btnPrimary}>
                        <span className={styles.btnBorderAnimation}></span>
                        <span className={styles.btnContent}>View My Work</span>
                    </a>
                    <a href="#contact" className={styles.btnSecondary}>
                        <span className={styles.btnBorderAnimation}></span>
                        <span className={styles.btnContent}>Contact Me</span>
                    </a>
                </div>
                <div className={styles.socialLinks}>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <div className={styles.heroImage}></div>
                <div className={styles.glassCircle}></div>
            </div>
        </section>
    );
};

export default Hero;