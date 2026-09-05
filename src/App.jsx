```jsx
import './App.css';
import resume from './assets/Sai_Santhi_Priya_Resume.pdf';

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">Sai Santhi Priya</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="intro">Hello, I'm</p>

          <h1>Sai Santhi Priya</h1>

          <h2>
            <span className="highlight">Frontend Developer</span>
            &nbsp; &amp; &nbsp;
            <span className="highlight">Full Stack Java Developer</span>
          </h2>

          <p className="hero-description">
            I am a Computer Science and Engineering graduate and a Fresher
            passionate about building responsive, user-friendly and practical
            web applications using React, Java, Spring Boot and MySQL.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="secondary-btn">
              View Projects
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              View Resume
            </a>

            <a
              href="https://github.com/saisanthipriya/react-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science and Engineering graduate and a Fresher
          passionate about frontend development and Full Stack Java.
          I enjoy building responsive, user-friendly web applications
          and turning ideas into practical solutions.
        </p>

        <p>
          I have hands-on project experience with React, Java, Spring Boot,
          MySQL, JavaScript, HTML5 and CSS. I am continuously learning,
          improving my development skills, and looking forward to starting
          my career as a developer.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>

        <div className="skills-container">

          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="skill-list">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Backend</h3>
            <div className="skill-list">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Programming Languages</h3>
            <div className="skill-list">
              <span>Java</span>
              <span>C++</span>
              <span>Python</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Database</h3>
            <div className="skill-list">
              <span>MySQL</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Currently Learning</h3>
            <div className="skill-list">
              <span>Oracle</span>
              <span>Spring AI</span>
              <span>Generative AI</span>
            </div>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>B.Tech — Computer Science &amp; Engineering</h3>

            <p>
              DNR College of Engineering &amp; Technology
            </p>

            <p>
              Affiliated to JNTUK
            </p>

            <div className="project-tech">
              <span>Computer Science &amp; Engineering</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Intermediate</h3>

            <p>
              S G V R Government Junior College
            </p>

            <div className="project-tech">
              <span>2020 – 2022</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Secondary School Education</h3>

            <p>
              ARKR Municipal High School, Bhimavaram
            </p>

            <div className="project-tech">
              <span>2019 – 2020</span>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-container">

          {/* Project 1 */}
          <div className="project-card">
            <h3>Real-Time Fraud Detection Dashboard</h3>

            <p>
              A financial transaction monitoring application designed to
              identify potentially fraudulent transactions and display
              transaction insights through an interactive dashboard.
            </p>

            <p>
              I worked on the application using Spring Boot, MySQL and
              JavaScript, with fraud detection logic and dashboard
              analytics for monitoring transactions.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Spring Security</span>
              <span>MySQL</span>
              <span>JavaScript</span>
              <span>Chart.js</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>7Lance Web Development</h3>

            <p>
              A responsive web development project focused on creating
              a clean, user-friendly interface and providing a smooth
              experience across different screen sizes.
            </p>

            <p>
              I worked with modern frontend technologies to develop
              and structure the web application interface.
            </p>

            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <h2>Certifications</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>Full Stack Java Development</h3>

            <p>
              Certification covering Java programming, frontend development,
              backend development and full-stack application development.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Web Development</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Python Development</h3>

            <p>
              Certification covering Python programming and fundamental
              concepts used in application development.
            </p>

            <div className="project-tech">
              <span>Python</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>

        <p>
          I'm open to entry-level opportunities where I can learn,
          contribute and grow as a developer.
        </p>

        <div className="contact-links">

          <a
            href="mailto:sspbejjavarapu@gmail.com"
            className="secondary-btn"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/priyabejjavarapu"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/saisanthipriya/react-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            GitHub
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Sai Santhi Priya. All rights reserved.</p>
        <p>Frontend Developer &amp; Full Stack Java Developer</p>
      </footer>

    </div>
  );
}

export default App;
```
