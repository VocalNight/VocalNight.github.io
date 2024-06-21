import './App.css';
import cv from './cv.pdf'
import { consoleProjects } from './Projects/ConsoleProjects';
import { angularProjects } from './Projects/AngularProjects';
import { reactProjects } from './Projects/ReactProjects';
import { laravelProjects } from './Projects/LaravelProjects';
import Accordion from './Components/Accordion';

function App() {

  return (
    <div className="App bg-slate-200" >
      <nav style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center', height: '35px' }} className='text-purple-800 font-bold bg-slate-100'>
        <div>

        </div>
        <div style={{display: 'flex', flex: 1, justifyContent: 'space-around'}}>
        <a href='https://github.com/VocalNight'>Github</a>
        <a href='#projects'>My Work</a>
        <a href='#contact'>Contact</a>
        <a href={cv} download="cv.pdf">
          <button>Download Resume</button></a>
        </div>
      </nav>
      <header className="App-header bg-slate-500">

        <div className='text-5xl'>
         Hey, i'm <p style={{display: 'inline'}} className='text-purple-800'>Victor</p>
        </div>
        <div>
        I'm a self-taught developer from Brazil. I like programming things and fixing bugs.
        I'm used to both front-end and back end, but really enjoy the back end side of things in systems.
        </div>
        <div>
        I also enjoy math and language learning. I'm fluent in english and know a bit of Japanese.
        </div>

        
      </header>

      <div id='projects' className='bg-slate-200'>
        Projects done:
      </div>
      <div className='bg-slate-200'>
        CSharp
        Console projects i made while learning C#. I'm revisiting them and adding new things as i learn more about the language.
      </div>

      <Accordion  title="C# Projects" projects={consoleProjects} />
      <Accordion title="Angular Projects" projects={angularProjects} />
      <Accordion title="React Projects" projects={reactProjects} />


      <div className='bg-slate-200'>

        Projects in the pipeline


        Laravel
        I'm learning Laravel and PHP! For that i'm building a small bugtracker for my personal use and plan to add to it over time, so this one will be in progress for a good while, but you are free to check it out.


        <Accordion title="Laravel Projects" projects={laravelProjects} />

      </div>

      <div id='contact' className='contactMe bg-slate-500'>
        Contact Me!

        E-mail
        vocalebooks@gmail.com

      </div>
    </div>
  );
}

export default App;
