export default function ProjectCard({ project }) {

    return (
        <>
            <a href={project.link} target="_blank"> <div
            key={project.title} className='cards border-solid border-2 m-2 size-52 shadow-md p-1'>

                <div>
                    {project.image}
                </div>
                <div className="cardTitle text-xl">
                    {project.title}
                </div>
                <div>
                    {project.description}
                </div>

            </div>
            </a>
        </>
    );
}
