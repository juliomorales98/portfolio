import React, { Component } from "react";
import "./App.css";
import Information from "./Information/information";
import Menu from "./Menu/menu";
import Project from "./Project/project";
import perfil from "./assets/img/perfil.jpeg";
import sections from "./sections.js";
import projects from "./projects.js";

class App extends Component {
  state = {
    sectionShowing: 0,
    projectShowing: 0,
  };

  changeProjectShowingHandler = (index) => {
    this.setState({ projectShowing: index });
  };
  changeSectionShowingHandler = (index) => {
    this.setState({ sectionShowing: index });
  };

  render() {
    // add buttons to the projects sections depending on how many projects are
    sections[2].extra = (
      <div>
        {projects.map((project, index) => {
          return (
            <button onClick={() => this.changeProjectShowingHandler(index)}>
              {project.short}
            </button>
          );
        })}
      </div>
    );
    let project = null;
    if (this.state.sectionShowing === 2) {
      project = (
        <Project
          title={projects[this.state.projectShowing].name}
          description={projects[this.state.projectShowing].description}
          img={projects[this.state.projectShowing].img}
        ></Project>
      );
    } else {
      project = null;
    }
    return (
      <div className="App">
        <aside>
          <Menu name="Julio Cesar Morales Ramos" img={perfil}>
            <ul>
              <li onClick={this.changeSectionShowingHandler.bind(this, 0)}>
                <i className="fa fa-user"></i>
                <p> Information</p>
              </li>
              <li onClick={this.changeSectionShowingHandler.bind(this, 1)}>
                <i className="fa fa-star"></i>
                <p> Skills</p>
              </li>
              <li onClick={this.changeSectionShowingHandler.bind(this, 2)}>
                <i className="fa fa-folder-open"></i>
                <p> Projects</p>
              </li>
            </ul>
          </Menu>
        </aside>
        <main>
            <Information
              title={sections[this.state.sectionShowing].title}
              par={sections[this.state.sectionShowing].par}
            >
              {sections[this.state.sectionShowing].extra}
            </Information>
            {project}
        </main>
      </div>
    );
  }
}

export default App;
