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
    sections : [
      {title: "Infomation", par: "My name is Julio Cesar Morales Ramos, and I'm a Computer Science graduate from Universidad\
      de Guadalajara.",extra:
      <div>
        <a href="mailto:juliocesar.mr@protonmail.com" target="_blank" className="envelope"><i class="fa fa-envelope-square"></i> E-mail</a>
        <a href='https://www.linkedin.com/in/julio-morales-2336a11b0/' target='_blank' class="linkedin"><i class="fab fa-linkedin-in"></i> Linkedin</a>
        <a href='https://github.com/juliomorales98' target='_blank' class="github"><i class="fab fa-github"></i> GitHub</a>
        <a href='' target='_blank'></a>
      </div>},
      {title: "Skills", par: "My skills are focused on desktop development and server administration,\
      but I have Web development experience as well.",extra: <div>
        <ul>
          <li><i className='fab fa-java'></i> Java</li>
          <li><i className='fab fa-python'></i> Python3/Django</li>
          <li><i className='fab fa-stack-overflow'></i> JavaScript</li>
          <li><i className='fab fa-html5'></i> Web Development</li>
          <li><i className='fa fa-table'></i> SQL</li>
          <li><i className='fab fa-linux'></i> Linux</li>
          <li><i className='fab fa-unity'></i> C# / Unity</li>
        </ul>
      </div>},
      {title: "Projects", par: "",extra: <div></div>}
    ],
    sectionShowing : 0,
    projects: [
      { name: "", description: "", img: "" },
      { name: "TeachMe", description: "E-learning platform for UdeG community.", img: teachme },
      { name: "Tangerine", description: "C# application for data maning and data visualization (Only Windows)", img: tangerine }
    ],
    projectShowing: 1
  };
  changeProjectShowingHandler = (index) => {
    this.setState({ projectShowing: index });
  }
  changeSectionShowingHandler = (index) => {
    this.setState({ sectionShowing: index });
    
  }
  render() {
    return (
      <div className="App">
        <Menu name="Julio Cesar Morales Ramos" img={perfil}>
          <ul>
            <li onClick={this.changeSectionShowingHandler.bind(this,0)}><i className="fa fa-user"></i><p> Information</p></li>
            <li onClick={this.changeSectionShowingHandler.bind(this,1)}><i className="fa fa-star"></i><p> Skills</p></li>
            <li onClick={this.changeSectionShowingHandler.bind(this,2)}><i className="fa fa-folder-open"></i><p> Projects</p></li>
          </ul>
        </Menu>
        <Information 
          title = {this.state.sections[this.state.sectionShowing].title}
          par = {this.state.sections[this.state.sectionShowing].par}
        >
          {this.state.sections[this.state.sectionShowing].extra}  
        </Information> 
        {/* <Project title={this.state.projects[this.state.projectShowing].name}
          description={this.state.projects[this.state.projectShowing].description}
          img={this.state.projects[this.state.projectShowing].img}
        >
        </Project>  */}
      </div>
    );
  }
}

export default App;
