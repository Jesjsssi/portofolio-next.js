import styles from '../styles/Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <span className="gradient-text">Portfolio</span>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h3>Social Media</h3>
                            <ul>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {currentYear} Your Name. All rights reserved.</p>
                    <p>Made with <span className="gradient-text">❤</span> using Next.js</p>
                </div>
            </div>
            {/* Add subtle background element */}
            <div className="glassCircle" style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                bottom: '-150px',
                right: '-100px',
                background: 'rgba(157, 78, 221, 0.05)',
                zIndex: '0',
                opacity: '0.5'
            }}></div>
        </footer>
    );
};

export default Footer;
