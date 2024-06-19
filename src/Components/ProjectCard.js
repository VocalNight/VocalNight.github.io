export default function ProjectCard({ project }) {

    return (
        <>
            <div className='border-solid border-2 m-2 border-black size-52 shadow-md bg-slate-200'>
                <a href={project.link}>
                    <div>
                        {project.image}
                    </div>
                    <div>
                        {project.title}
                    </div>
                    <div>
                        {project.description}
                    </div>
                </a>
            </div>
        </>
    );
}
