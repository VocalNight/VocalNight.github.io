import './App.css';
import { consoleProjects } from './Projects/ConsoleProjects';
import { angularProjects } from './Projects/AngularProjects';
import { reactProjects } from './Projects/ReactProjects';
import { laravelProjects } from './Projects/LaravelProjects';
import Accordion from './Components/Accordion';

function App() {

  return (
    <div className="App">
       <nav>
        <a href='https://github.com/VocalNight'>Github</a>
        <a href='#projects'>My Work</a>
        Contact
        Download Resume
      </nav>
      <header className="App-header">
        
        Hi i'm Victor, i program things and fix bugs.
        I'm used to both front-end and back end, but really enjoy the back end side of things in systems.
      </header>

      <div id='projects'>
      Projects done:
      </div>
      <div>
CSharp 
Console projects i made while learning C#. I'm revisiting them and adding new things as i learn more about the language.
</div>

<Accordion title="C# Projects" projects={consoleProjects} />
<Accordion title="Angular Projects" projects={angularProjects} />
<Accordion title="React Projects" projects={reactProjects} />


      <div>

      Projects in the pipeline


Laravel
I'm learning Laravel and PHP! For that i'm building a small bugtracker for my personal use and plan to add to it over time, so this one will be in progress for a good while, but you are free to check it out.


<Accordion title="Laravel Projects" projects={laravelProjects} />

      </div>
    </div>
  );
}

export default App;
