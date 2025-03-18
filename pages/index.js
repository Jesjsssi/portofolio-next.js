import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="My personal portfolio website" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}
