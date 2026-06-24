import { Link } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";

const Projects = () => {

    const { projects, loading, error } = useProjects();

    if(loading) return <div className="text-center py-20 text-xl font-semibold animate-pulse">Loading amazing projects</div>
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>

    return (
        <div className="py-10 px-4 container mx-auto">
            <h2 className="text-4xl font-bold mb-10 border-b-4 border-indigo-600 inline-block pb-2">
                My Projects
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects?.map((project) => (
                    <div key={project?.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col h-full">
                        <h3 className="text-2xl font-bold mb-2">{project?.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 grow">{project?.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project?.techStack?.map((techStackItem, index) => (
                                <span key={index} className="text-xs bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-1 rounded">{techStackItem}</span>
                            ))}
                        </div>
                        <Link to={`/projects/${project?.id}`} className="text-indigo-800 dark:text-indigo-400 font-semibold hover:underline">
                        Veiw Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Projects;