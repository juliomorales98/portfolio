import React, { Component } from 'react';
import './App.css';
import Information from './Information/information';
import Menu from './Menu/menu';
import Project from './Project/project';
import perfil from './assets/img/perfil.jpeg';
import teachme from './assets/img/teachme.png';
import tangerine from './assets/img/tangerine.jpg';
class App extends Component {
  state = {
    projects: [
      { name: "TeachMe", description: "E-learning platform for UdeG community.", img: teachme },
      { name: "Tangerine", description: "C# application for data maning and data visualization (Only Windows)", img: tangerine },
      { name: "", description: "", img: "" }
    ],
    projectShowing: 0
  };
  changeProjectShowingHandler = () => {
    let aux = this.state.projectShowing === 0 ? 1 : 0;
    this.setState({ projectShowing: aux });
  }
  render() {
    return (
      <div className="App">
        <Menu name="Julio Cesar Morales Ramos" img={perfil}>
          <ul>
            <li>Information</li>
            <li>Skills</li>
            <li>Projects
              <ul>
                <li onClick={this.changeProjectShowingHandler}>TeachMe</li>
                <li onClick={this.changeProjectShowingHandler}>Tangerine</li>
              </ul>
            </li>
          </ul>
        </Menu>
        <Project title={this.state.projects[this.state.projectShowing].name}
          description={this.state.projects[this.state.projectShowing].description}
          img={this.state.projects[this.state.projectShowing].img}
        >
        </Project>
      </div>
    );
  }
}

export default App;
