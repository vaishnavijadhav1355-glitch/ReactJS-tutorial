
import React from "react";
import "./App.css";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Git"];

  const projects = [
    {
      title: "Weather App",
      description: "A weather application using an API.",
      link: "https://openweathermap.org/"
    },
    {
      title: "Todo List",
      description: "Manage daily tasks easily.",
      link: "https://react.dev/"
    },
    {
      title: "E-commerce Website",
      description: "An online shopping page with cart features.",
      link: "https://developer.mozilla.org/"
    }
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>MyPortfolio</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div>
          <p className="welcome">HELLO, WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Vaishnavi</span></h1>
          <h2>Frontend Developer</h2>
          <p>
            I build beautiful and responsive websites
            using HTML, CSS, JavaScript and React.
          </p>
          <a className="btn" href="#projects">View My Projects</a>
        </div>

        <div className="profile">
          <div className="profile-letter">V</div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer who enjoys
          creating modern, user-friendly websites.
          I love learning new technologies and building
          projects that solve real-world problems.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>
        <div className="skills">
          {skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-icon">{"</>"}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                className="btn"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Let's connect and create something amazing!</p>
        <a href="mailto:yourname@example.com" className="btn">
          Send Me an Email
        </a>
      </section>

      <footer>
        <p>© 2026 Vaishnavi | My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;

