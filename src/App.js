import './App.css';
import cv from './cv.pdf'
import { useEffect, useState } from 'react';
import { consoleProjects } from './Projects/ConsoleProjects';
import { angularProjects } from './Projects/AngularProjects';
import { reactProjects } from './Projects/ReactProjects';
import { laravelProjects } from './Projects/LaravelProjects';
import PortfolioAbout from './Components/PortfolioAbout';
import ProjectView from './Components/ProjectView';

function App() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    ShowProjects([]);
  }, [])

  const ShowProjects = (projects) => {
    setProjectList(projects);

  }

  return (
    <div className="App" >
      <div className="App-header">
        <div className='mainGrid bg-black'>
         {projectList.length == 0 && 
          <PortfolioAbout></PortfolioAbout>
          }
          {projectList.length > 0 &&
          <ProjectView projects={projectList}></ProjectView>}
          <div className='headerProjects'>
            <button className='pt-10 hover:underline textConfig' onClick={() => ShowProjects([])}>About</button>
            <a href={cv} download="cv.pdf">
            <button className='textConfig hover:underline'>Download Resume</button></a>
            <button className='textConfig hover:underline' onClick={() => ShowProjects(consoleProjects)}>C# projects</button>
            <button className='textConfig hover:underline' onClick={() => ShowProjects(angularProjects)}>Angular projects</button>
            <button className='textConfig hover:underline' onClick={() => ShowProjects(reactProjects)}>React Projects</button>
            <button className='textConfig hover:underline' onClick={() => ShowProjects(laravelProjects)}>Other projects</button>
          </div>
          <div className='ContactInfo pt-10'>
            <a className='hover:underline textConfig' href='https://github.com/VocalNight' target="_blank">Github</a>
            <div className='textConfig'>Vocalebooks@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
