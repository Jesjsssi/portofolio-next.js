import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <span className="gradient-text">Portfolio</span>
                </a>

                <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                    <li>
                        <div className={styles.navButton}>
                            <span className={styles.buttonBorder}></span>
                            <a href="#home" onClick={() => setMenuOpen(false)} className={styles.buttonContent}>
                                Home
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={styles.navButton}>
                            <span className={styles.buttonBorder}></span>
                            <a href="#about" onClick={() => setMenuOpen(false)} className={styles.buttonContent}>
                                About
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={styles.navButton}>
                            <span className={styles.buttonBorder}></span>
                            <a href="#skills" onClick={() => setMenuOpen(false)} className={styles.buttonContent}>
                                Skills
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={styles.navButton}>
                            <span className={styles.buttonBorder}></span>
                            <a href="#projects" onClick={() => setMenuOpen(false)} className={styles.buttonContent}>
                                Projects
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={styles.navButton}>
                            <span className={styles.buttonBorder}></span>
                            <a href="#contact" onClick={() => setMenuOpen(false)} className={styles.buttonContent}>
                                Contact
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            {/* Add subtle background effect */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                left: '10%',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(157, 78, 221, 0.1) 0%, rgba(157, 78, 221, 0) 70%)',
                zIndex: '-1'
            }}></div>
        </nav>
    );
};

export default Navbar;
