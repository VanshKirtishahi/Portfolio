import { Link, useParams } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";

const ProjectDetails = () => {
    const {id} = useParams();
    const {projects, loading, error} = useProjects();


    if(loading) return <div className="text-center py-20">Loading Details</div>
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>

    const project = projects?.find((p) => String(p.id) === id);

    if(!project) return <div className="text-center py-20">Project not found</div>

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <Link to="/projects" className="text-indigo-600 dark:text-indigo-400 mb-6 inline-block hover:underline">
            Back to Projects
            </Link>
            <h1 className="text-5xl font-bold mb-6">{project?.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
                {project?.techStack?.map((t, i) => (
                <span key={i} >{t}</span>
            ))}
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-inner">{project?.description}</p>
        </div>
    );
}

export default ProjectDetails;