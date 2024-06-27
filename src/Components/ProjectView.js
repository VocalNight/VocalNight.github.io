export default function ProjectView({projects}) {

    return(
        <>
            <div 
              style={{ padding: '3px', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
              {projects.map((project, index) => {
                return (
                  <ProjectCard project={project}></ProjectCard>
                );
              })}
            </div>
        </>
    )
}
