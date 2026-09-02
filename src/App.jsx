import './App.css';
import resume from './assets/Sai_Santhi_Priya_Resume.pdf';

function App() {
return ( <div className="app">

```
  {/* Navigation */}
  <nav className="navbar">
    <h2 className="logo">Sai Santhi Priya</h2>

    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  {/* Hero Section */}
  <section id="home" className="hero">
    <div className="hero-content">
      <p className="intro">Hello, I'm</p>

      <h1>Sai Santhi Priya</h1>

      <h2>Frontend Developer & Full Stack Java Developer</h2>

      <p>
        I build responsive and user-friendly web applications using
        modern frontend technologies and Java-based backend development.
      </p>
      </div>
<div className="hero-buttons">
  <a href="#projects" className="primary-btn">
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
  </div>
        </section>

  {/* About Section */}
  <section id="about" className="section">
    <h2>About Me</h2>

    <p>
      I am a Computer Science and Engineering graduate with an interest
      in frontend development and full stack Java development. I enjoy
      creating clean, responsive and practical web applications while
      continuously improving my technical skills.
    </p>
  </section>

  {/* Skills Section */}
  <section id="skills" className="section">
    <h2>Skills</h2>

    <div className="skills-container">
      <span>Java</span>
      <span>HTML5</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>Spring Boot</span>
      <span>MySQL</span>
      <span>Python</span>
    </div>
  </section>

  {/* Projects Section */}
  <section id="projects" className="section">
    <h2>Projects</h2>

    <div className="projects-container">

      <div className="project-card">
        <h3>Real-Time Fraud Detection Dashboard</h3>

        <p>
          A financial transaction monitoring system that detects
          potentially fraudulent transactions and presents analytics
          through an interactive dashboard.
        </p>

        <p className="tech">
          Java • Spring Boot • MySQL • JavaScript • Chart.js
        </p>
      </div>

      <div className="project-card">
        <h3>7Lance Web Development</h3>

        <p>
          A web development project focused on creating a responsive
          and user-friendly web application interface.
        </p>

        <p className="tech">
          HTML5 • CSS • JavaScript • React
        </p>
      </div>

    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="section contact">
    <h2>Contact Me</h2>

    <p>
      I'm open to opportunities where I can learn, contribute and grow
      as a developer.
    </p>

    <button className="primary-btn">Get In Touch</button>
  </section>

  {/* Footer */}
  <footer>
    <p>© 2026 Sai Santhi Priya. All rights reserved.</p>
  </footer>

</div>

);
}

export default App;
