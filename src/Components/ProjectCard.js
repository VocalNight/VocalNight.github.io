export default function ProjectCard({ Title, Description, image, link }) {

    return (
        <>
            <div>
                <a href={link}>
                    <div>
                        {image}
                    </div>
                    <div>
                        {Title}
                    </div>
                    <div>
                        {Description}
                    </div>
                </a>
            </div>
        </>
    );
}
