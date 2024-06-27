import './App.css';
import cv from './cv.pdf'
import { useEffect, useState } from 'react';
import { consoleProjects } from './Projects/ConsoleProjects';
import { angularProjects } from './Projects/AngularProjects';
import { reactProjects } from './Projects/ReactProjects';
import { laravelProjects } from './Projects/LaravelProjects';
import Accordion from './Components/Accordion';
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
    <div className="App bg-slate-200" >
      <nav style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center', height: '35px' }} className='text-purple-800 font-bold bg-slate-100'>
        <div>

        </div>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
          <a href='https://github.com/VocalNight'>Github</a>
          <a href='#projects'>My Work</a>
          <a href='#contact'>Contact</a>
          <a href={cv} download="cv.pdf">
            <button>Download Resume</button></a>
        </div>
      </nav>
      <div className="App-header bg-slate-500">
        <div className='mainGrid'>
         {projectList.length == 0 && 
          <PortfolioAbout></PortfolioAbout>
          }
          {projectList.length > 0 &&
          <ProjectView projects={projectList}></ProjectView>}
          <div className='headerProjects'>
            <h2>Projects</h2>
            <button onClick={() => ShowProjects(consoleProjects)}>C# projects</button>
            <button onClick={() => ShowProjects(angularProjects)}>Angular projects</button>
            <button onClick={() => ShowProjects(reactProjects)}>React Projects</button>
            <button onClick={() => ShowProjects(laravelProjects)}>Other projects</button>
          </div>
        </div>

      </div>

      <div id='projects' className='bg-slate-200'>
        Projects done:
      </div>
      <div className='bg-slate-200'>
        CSharp
        Console projects i made while learning C#. I'm revisiting them and adding new things as i learn more about the language.
      </div>

      <Accordion title="C# Projects" projects={consoleProjects} />
      <Accordion title="Angular Projects" projects={angularProjects} />
      <Accordion title="React Projects" projects={reactProjects} />


      <div className='bg-slate-200'>

        Projects in the pipeline


        Laravel
        I'm learning Laravel and PHP! For that i'm building a small bugtracker for my personal use and plan to add to it over time, so this one will be in progress for a good while, but you are free to check it out.


        <Accordion title="Laravel Projects" projects={laravelProjects} />

      </div>

      <div id='contact' className='contactMe bg-slate-500'>
        <div>
          <p className='text-5xl text-purple-800'>
            Contact Me!
          </p>
        </div>
        <div>
          <div className='contactInfo'>
            <div className='contactLines'>
              <div className='text-2xl'>
                <p className='textDesc text-purple-800'>E-mail:</p> vocalebooks@gmail.com</div>
            </div>
            <div className='contactLines'>
              <div className='text-2xl'>
                <p className='textDesc text-purple-800'>Github: </p>
                https://github.com/VocalNight</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
