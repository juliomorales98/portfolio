import React from "react";

const sections = [
  {
    title: "Information",
    par: (
      <div>
        <p>
          My name is Julio Cesar Morales Ramos, I'm 22 years old and I'm a
          Computer Science graduate from Universidad de Guadalajara.
        </p>
        <p>FOSS, music and basquetball enthusiast, I do not use Arch btw.</p>
      </div>
    ),
    extra: (
      <div>
        <a
          href="mailto:juliocesar.mr@protonmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="envelope"
        >
          <i className="fa fa-envelope-square"></i> E-mail
        </a>
        <a
          href="https://www.linkedin.com/in/julio-morales-2336a11b0/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <i className="fab fa-linkedin-in"></i> Linkedin
        </a>
        <a
          href="https://github.com/juliomorales98"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    ),
  },
  {
    title: "Skills",
    par: (
      <div>
        <p>
          My skills are focused on desktop development and server
          administration, but I have Web development experience as well.
        </p>
      </div>
    ),
    extra: (
      <div>
        <ul>
          <li>
            <i className="fab fa-java"></i> Java
          </li>
          <li>
            <i className="fab fa-python"></i> Python3/Django
          </li>
          <li>
            <i className="fab fa-stack-overflow"></i> JavaScript/React
          </li>
          <li>
            <i className="fab fa-html5"></i> Web Development
          </li>
          <li>
            <i className="fa fa-table"></i> SQL
          </li>
          <li>
            <i className="fab fa-linux"></i> Linux
          </li>
          <li>
            <i className="fab fa-unity"></i> C# / Unity
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Projects",
    par: (
      <div>
        <p>Personal and teamed-up projects.</p>
      </div>
    ),
    extra: "",
  },
];

export default sections;
