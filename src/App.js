import './App.css';
import ProjectCard from './Components/ProjectCard';
import { consoleProjects } from './Projects/ConsoleProjects';
import { angularProjects } from './Projects/AngularProjects';
import { reactProjects } from './Projects/ReactProjects';
import { laravelProjects } from './Projects/LaravelProjects';

function App() {
  return (
    <div className="App">
       <nav>
        About me
        My Work
        Contact
        Download Resume
      </nav>
      <header className="App-header">
        
        Hi i'm Victor, i program things and fix bugs.
        I'm used to both front-end and back end, but really enjoy the back end side of things in systems.

       

        
        
      </header>
      <div>
      Projects done:

CSharp 
Console projects i made while learning C#. I'm revisiting them and adding new things as i learn more about the language.

{consoleProjects.map((project, index) => {
  return (
    <ProjectCard project={project}></ProjectCard>
  );
})}
      </div>

      <div>
      {angularProjects.map((project, index) => {
  return (
    <ProjectCard project={project}></ProjectCard>
  );
})}
      </div>

      <div>
      {reactProjects.map((project, index) => {
  return (
    <ProjectCard project={project}></ProjectCard>
  );
})}
      </div>

      <div>

      Projects in the pipeline


Laravel
I'm learning Laravel and PHP! For that i'm building a small bugtracker for my personal use and plan to add to it over time, so this one will be in progress for a good while, but you are free to check it out.


      {laravelProjects.map((project, index) => {
  return (
    <ProjectCard project={project}></ProjectCard>
  );
})}
      </div>


     


    </div>
  );
}

export default App;
