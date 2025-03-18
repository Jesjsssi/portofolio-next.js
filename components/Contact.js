import styles from '../styles/Contact.module.css';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send the form data to your backend

        // Simulate form submission
        setSubmitStatus({
            submitted: true,
            success: true,
            message: 'Thank you for your message! I will get back to you soon.'
        });

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.sectionTitle}>Get In <span className="gradient-text">Touch</span></h2>

            <div className={styles.container}>
                <div className={`${styles.contactInfo} glassCard`}>
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to me for any questions or opportunities!</p>

                    <div className={styles.infoItem}>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Your City, Country</span>
                    </div>

                    <div className={styles.infoItem}>
                        <i className="fas fa-envelope"></i>
                        <span>your.email@example.com</span>
                    </div>

                    <div className={styles.infoItem}>
                        <i className="fas fa-phone"></i>
                        <span>+1 234 567 890</span>
                    </div>

                    <div className={styles.socialLinks}>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>

                <div className={`${styles.contactForm} glassCard`}>
                    {submitStatus.submitted && submitStatus.success ? (
                        <div className={styles.successMessage}>
                            <i className="fas fa-check-circle"></i>
                            <p>{submitStatus.message}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
