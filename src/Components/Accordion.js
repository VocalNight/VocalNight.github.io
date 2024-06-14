import React, { useState } from 'react'
import ProjectCard from './ProjectCard';

export default function Accordion({ title, projects }) {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className='accordion border-solid border-2 m-2 border-black size-52 shadow-md'>
        <div className='accordion-item' 
        onClick={() => setIsActive(!isActive)}>
          <div className='accordion-title'>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className='accordion-content'>
            <div 
              style={{ padding: '3px', display: 'flex', flex: 1, flexDirection: 'row' }}>
              {projects.map((project, index) => {
                return (
                  <ProjectCard project={project}></ProjectCard>
                );
              })}
            </div>
          </div>}
        </div>
      </div>

    </>
  );
}
