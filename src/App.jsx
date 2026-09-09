
import './App.css';
import resume from './assets/Sai_Santhi_Priya_Resume.pdf';

import javaCertificate from './assets/certificates/full-stack-java.jpg';
import pythonCertificate from './assets/certificates/full-stack-python.jpg';
import aiCertificate from './assets/certificates/AI with Machine Learning.jpeg';
import cloudCertificate from './assets/certificates/cloud-computing.jpeg';

function App() {
  return (
    <div className="app">

      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="navbar">

        <a href="#home" className="logo">
          Sai Santhi Priya Bejjavarapu
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section id="home" className="hero">

        <div className="hero-glow"></div>

        <div className="hero-content">

          <p className="hero-number">01 / HELLO</p>

          <p className="intro">
            👋 Hello, I'm
          </p>

          <h1>
            <span>Sai Santhi Priya Bejjavarapu</span>
          </h1>

          <h2>
            Frontend Developer
            <span className="hero-divider">|</span>
            Full Stack Java Developer
          </h2>

          <p className="hero-description">
            A Computer Science and Engineering graduate and Fresher
            passionate about creating responsive, user-friendly and
            practical web applications using React, Java, Spring Boot
            and MySQL.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
              <span>→</span>
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              View Resume
              <span>↗</span>
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/saisanthipriya/react-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⌘ GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/priyabejjavarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              in LinkedIn
            </a>

            <span>•</span>

            <a href="mailto:sspbejjavarapu@gmail.com">
              ✉ Email
            </a>

          </div>

        </div>

        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section id="about" className="section about">

        <div className="section-label">
          <span>02</span>
          ✦ ABOUT ME
        </div>

        <div className="section-heading">

          <h2>
            Who I <span>Am</span>
          </h2>

        </div>

        <div className="about-grid">

          <div className="about-main">

            <p className="large-text">
              I am a Computer Science and Engineering graduate and
              a Fresher passionate about building modern web
              applications and practical software solutions.
            </p>

            <p>
              My primary interests are frontend development and
              Full Stack Java development. I enjoy transforming
              ideas into clean, responsive and user-friendly
              interfaces while also understanding the backend
              systems that power them.
            </p>

            <p>
              I have hands-on experience working with React,
              Java, Spring Boot, MySQL, JavaScript, HTML5 and CSS.
              I am continuously improving my development skills
              and looking forward to starting my professional
              career as a developer.
            </p>

          </div>

          <div className="about-side">

            <div className="info-card">
              <span className="info-number">01</span>

              <h3>Frontend</h3>

              <p>
                Responsive and user-friendly interfaces using
                HTML, CSS, JavaScript and React.
              </p>
            </div>


            <div className="info-card">
              <span className="info-number">02</span>

              <h3>Backend</h3>

              <p>
                Java and Spring Boot based backend development
                with REST APIs and MySQL.
              </p>
            </div>


            <div className="info-card">
              <span className="info-number">03</span>

              <h3>Learning</h3>

              <p>
                Continuously improving my development skills
                through projects and hands-on practice.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SKILLS
      ========================= */}

      <section id="skills" className="section skills-section">

        <div className="section-label">
          <span>03</span>
          ⚡ TECHNICAL SKILLS
        </div>

        <div className="section-heading">

          <h2>
            My <span>Tech Stack</span>
          </h2>

          <p>
            Technologies and tools I use to build web applications.
          </p>

        </div>

        <div className="skills-container">


          <div className="skill-group">

            <div className="skill-header">
              <span>01</span>
              <h3>Frontend</h3>
            </div>

            <div className="skill-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Vite</span>
            </div>

          </div>


          <div className="skill-group">

            <div className="skill-header">
              <span>02</span>
              <h3>Backend</h3>
            </div>

            <div className="skill-list">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
            </div>

          </div>


          <div className="skill-group">

            <div className="skill-header">
              <span>03</span>
              <h3>Programming</h3>
            </div>

            <div className="skill-list">
              <span>Java</span>
              <span>C++</span>
              <span>Python</span>
            </div>

          </div>


          <div className="skill-group">

            <div className="skill-header">
              <span>04</span>
              <h3>Database</h3>
            </div>

            <div className="skill-list">
              <span>MySQL</span>
              <span>SQL</span>
              <span>Oracle</span>
            </div>

          </div>


          <div className="skill-group">

            <div className="skill-header">
              <span>05</span>
              <h3>Tools</h3>
            </div>

            <div className="skill-list">
              <span>Visual Studio Code</span>
              <span>Spring Tool Suite</span>
              <span>MySQL Workbench</span>
              <span>Postman</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Maven</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          EDUCATION
      ========================= */}

      <section id="education" className="section education-section">

        <div className="section-label">
          <span>04</span>
          🎓 EDUCATION
        </div>

        <div className="section-heading">

          <h2>
            Academic <span>Journey</span>
          </h2>

        </div>

        <div className="education-timeline">


          <div className="education-item">

            <div className="education-year">
              2022–26
            </div>

            <div className="education-line">
              <span></span>
            </div>

            <div className="education-content">

              <h3>
                B.Tech — Computer Science & Engineering
              </h3>

              <h4>
                DNR College of Engineering & Technology
              </h4>

              <p>
                Affiliated to JNTUK
              </p>

              <div className="education-tag">
                CGPA 8.05
              </div>

            </div>

          </div>


          <div className="education-item">

            <div className="education-year">
              2020–22
            </div>

            <div className="education-line">
              <span></span>
            </div>

            <div className="education-content">

              <h3>
                Intermediate — MPC
              </h3>

              <h4>
                S G V R Government Junior College
              </h4>

              <p>
                Intermediate Education
              </p>

              <div className="education-tag">
                CGPA 9.0
              </div>

            </div>

          </div>


          <div className="education-item">

            <div className="education-year">
              2019–20
            </div>

            <div className="education-line">
              <span></span>
            </div>

            <div className="education-content">

              <h3>
                Secondary School Education — SSC
              </h3>

              <h4>
                ARKR Municipal High School, Bhimavaram
              </h4>

              <p>
                Secondary School Education
              </p>

              <div className="education-tag">
                CGPA 9.33
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}

      <section id="projects" className="section projects-section">

        <div className="section-label">
          <span>05</span>
          🚀 PROJECTS
        </div>

        <div className="section-heading">

          <h2>
            Things I've <span>Built</span>
          </h2>

          <p>
            A selection of projects where I applied my development
            skills to build practical applications.
          </p>

        </div>

        <div className="projects-container">


          {/* PROJECT 1 */}

          <article className="project-card featured-project">

            <div className="project-top">

              <span className="project-number">
                01
              </span>

              <span className="project-type">
                Full Stack
              </span>

            </div>

            <h3>
              Real-Time Fraud Detection Dashboard
            </h3>

            <p>
              A financial transaction monitoring application designed
              to identify potentially fraudulent transactions and
              present transaction insights through an interactive
              dashboard.
            </p>

            <p>
              The project uses Spring Boot, MySQL, JavaScript and
              dashboard analytics to monitor transactions and support
              fraud detection.
            </p>

            <div className="project-tech">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>Spring Security</span>
              <span>MySQL</span>
              <span>JavaScript</span>
              <span>Chart.js</span>

            </div>

            <div className="project-footer">

              <span>Financial Technology</span>

              <a
                href="https://github.com/saisanthipriya/fraud-detection-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
              >
                GitHub ↗
              </a>

            </div>

          </article>


          {/* PROJECT 2 */}

          <article className="project-card">

            <div className="project-top">

              <span className="project-number">
                02
              </span>

              <span className="project-type">
                Frontend
              </span>

            </div>

            <h3>
              7Lance Web Development
            </h3>

            <p>
              A responsive web development project focused on
              creating a clean, modern and user-friendly interface
              with a smooth experience across different screen sizes.
            </p>

            <p>
              Built using modern frontend technologies with a focus
              on reusable components, responsive layouts and
              polished user interaction.
            </p>

            <div className="project-tech">

              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>

            </div>

            <div className="project-footer">

              <span>Web Development</span>

              <a
                href="https://github.com/saisanthipriya/7lance-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
              >
                GitHub ↗
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* =========================
          EXPERIENCE
      ========================= */}

      <section id="experience" className="section experiences-section">

        <div className="section-label">
          <span>06</span>
          💼 EXPERIENCE
        </div>

        <div className="section-heading">

          <h2>
            Practical <span>Experience</span>
          </h2>

          <p>
            Virtual internship experiences that helped me develop
            practical programming and application development skills.
          </p>

        </div>

        <div className="experience-container">


          {/* EXPERIENCE 1 */}

          <article className="experience-card">

            <div className="experience-top">

              <span className="experience-number">
                01
              </span>

              <span className="experience-duration">
                120 Hours · Jul 2025
              </span>

            </div>

            <h3>
              Full Stack Java Intern
            </h3>

            <h4>
              Talent Shine India Pvt. Ltd. · Under APSCHE
            </h4>

            <ul className="experience-details">

              <li>
                Completed a 120-hour short-term virtual internship
                focused on Full Stack Java development, covering
                frontend, backend and database concepts.
              </li>

              <li>
                Gained practical exposure to Java-based application
                development and full-stack development workflows
                through hands-on tasks.
              </li>

              <li>
                Strengthened programming, problem-solving and
                application development skills through project-based
                learning.
              </li>

            </ul>

          </article>


          {/* EXPERIENCE 2 */}

          <article className="experience-card">

            <div className="experience-top">

              <span className="experience-number">
                02
              </span>

              <span className="experience-duration">
                120 Hours · Aug 2024
              </span>

            </div>

            <h3>
              Full Stack Python Intern
            </h3>

            <h4>
              Talent Shine India Pvt. Ltd. · Under APSCHE
            </h4>

            <ul className="experience-details">

              <li>
                Completed a 120-hour short-term virtual internship
                focused on Full Stack Python development and web
                application concepts.
              </li>

              <li>
                Gained practical exposure to Python programming,
                frontend development and backend application
                workflows.
              </li>

              <li>
                Strengthened coding, logical thinking and
                problem-solving skills through hands-on development
                activities.
              </li>

            </ul>

          </article>


          {/* EXPERIENCE 3 */}

          <article className="experience-card">

            <div className="experience-top">

              <span className="experience-number">
                03
              </span>

              <span className="experience-duration">
                Dec 2025 – Apr 2026
              </span>

            </div>

            <h3>
              AI with Machine Learning Intern
            </h3>

            <h4>
              Council for Skills and Competencies (CSC India) · Under APSCHE
            </h4>

            <ul className="experience-details">

              <li>
                Completed a long-term virtual internship focused
                on Artificial Intelligence and Machine Learning
                concepts.
              </li>

              <li>
                Gained practical exposure to fundamental
                machine-learning workflows, data processing and
                AI-related applications.
              </li>

              <li>
                Developed an understanding of applying
                machine-learning concepts to practical
                problem-solving scenarios.
              </li>

            </ul>

          </article>

        </div>

      </section>


      {/* =========================
          CERTIFICATIONS
      ========================= */}

      <section id="certifications" className="section certifications-section">

        <div className="section-label">
          <span>07</span>
          🏆 CREDENTIALS & ACHIEVEMENTS
        </div>

        <div className="section-heading">

          <h2>
            Credentials & <span>Certifications</span>
          </h2>

          <p>
            Professional learning credentials and certifications
            earned through structured courses and programs.
          </p>

        </div>

        <div className="certifications-container">


          {/* CLOUD COMPUTING */}

          <article className="certificate-card">

            <div className="certificate-number">
              01
            </div>

            <div className="certificate-content">

              <h3>
                Cloud Computing
              </h3>

              <p className="certificate-provider">
                NPTEL · IIT Kharagpur
              </p>

              <p>
                Completed a 12-week Cloud Computing course conducted
                from January to April 2025. Earned a score of 64%
                and received an Elite certificate.
              </p>

              <div className="project-tech">

                <span>Cloud Computing</span>
                <span>12 Weeks</span>
                <span>Elite</span>

              </div>

              <a
                href={cloudCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
                <span>↗</span>
              </a>

            </div>

          </article>


          {/* FULL STACK JAVA */}

          <article className="certificate-card">

            <div className="certificate-number">
              02
            </div>

            <div className="certificate-content">

              <h3>
                Full Stack Java Development
              </h3>

              <p className="certificate-provider">
                Talent Shine India Pvt. Ltd. · Under APSCHE
              </p>

              <p>
                Successfully completed a 120-hour Short-Term Virtual
                Internship focused on Full Stack Java development.
                Certificate issued on 10 July 2025 in Visakhapatnam.
              </p>

              <div className="project-tech">

                <span>Java</span>
                <span>Full Stack</span>
                <span>120 Hours</span>

              </div>

              <a
                href={javaCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
                <span>↗</span>
              </a>

            </div>

          </article>


          {/* FULL STACK PYTHON */}

          <article className="certificate-card">

            <div className="certificate-number">
              03
            </div>

            <div className="certificate-content">

              <h3>
                Full Stack Python Development
              </h3>

              <p className="certificate-provider">
                Talent Shine India Pvt. Ltd. · Under APSCHE
              </p>

              <p>
                Successfully completed a 120-hour Short-Term Virtual
                Internship focused on Full Stack Python development
                and web application concepts. Certificate issued on
                12 August 2024.
              </p>

              <div className="project-tech">

                <span>Python</span>
                <span>Full Stack</span>
                <span>120 Hours</span>

              </div>

              <a
                href={pythonCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
                <span>↗</span>
              </a>

            </div>

          </article>


          {/* AI WITH MACHINE LEARNING */}

          <article className="certificate-card">

            <div className="certificate-number">
              04
            </div>

            <div className="certificate-content">

              <h3>
                AI with Machine Learning
              </h3>

              <p className="certificate-provider">
                Council for Skills and Competencies (CSC India) · Under APSCHE
              </p>

              <p>
                Successfully completed a Long-Term Virtual Internship
                conducted from December 2025 to April 2026, focused
                on Artificial Intelligence and Machine Learning
                concepts and practical learning.
              </p>

              <div className="project-tech">

                <span>AI</span>
                <span>Machine Learning</span>
                <span>Long Term</span>

              </div>

              <a
                href={aiCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
                <span>↗</span>
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section id="contact" className="section contact">

        <div className="contact-glow"></div>

        <div className="section-label">
          <span>08</span>
          ✉ CONTACT
        </div>

        <div className="contact-content">

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            I'm open to entry-level opportunities where I can learn,
            contribute and grow as a developer. If you're looking
            for a passionate fresher, I'd love to hear from you.
          </p>

          <div className="contact-links">


            <a
              href="mailto:sspbejjavarapu@gmail.com"
              className="contact-card"
            >

              <span className="contact-icon">
                ✉
              </span>

              <span className="contact-info">
                <small>Email</small>
                <strong>Get in touch</strong>
              </span>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="https://www.linkedin.com/in/priyabejjavarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <span className="contact-icon">
                in
              </span>

              <span className="contact-info">
                <small>LinkedIn</small>
                <strong>Connect with me</strong>
              </span>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="https://github.com/saisanthipriya/react-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <span className="contact-icon">
                &lt;/&gt;
              </span>

              <span className="contact-info">
                <small>GitHub</small>
                <strong>View my work</strong>
              </span>

              <span className="contact-arrow">
                ↗
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-main">

          <a href="#home" className="footer-logo">
            Sai Santhi Priya
          </a>

          <p>
            Frontend Developer & Full Stack Java Developer
          </p>

          <a href="#home" className="back-top">
            Back to top ↑
          </a>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Sai Santhi Priya. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;

