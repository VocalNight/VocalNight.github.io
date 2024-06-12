export default function ProjectCard({ project }) {

    return (
        <>
            <div>
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
