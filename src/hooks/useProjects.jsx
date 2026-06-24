import { useEffect, useState } from "react";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                const data = [
                    {
                        id: 1,
                        title: "E-Commerce Store UI",
                        description: "A modern shopping interface with product listing, filters, cart, and responsive design.",
                        techStack: ["React", "Tailwind CSS", "Redux"],
                        
                    },
                    {
                        id: 2,
                        title: "Portfolio Website",
                        description: "A personal portfolio site to showcase projects, skills, and contact details.",
                        techStack: ["Next.js", "Tailwind CSS"],
                        
                    },
                    {
                        id: 3,
                        title: "Task Manager App",
                        "slug": "task-manager-app",
                        description: "A task management dashboard with CRUD operations, filtering, and local state handling.",
                        techStack: ["React", "Node.js", "MongoDB"],
                    }
                ];

                setProjects(data);
            }catch (err) {
                setError('Failed to load projects. Please try Again');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();

    }, []);

    return {projects, loading, error};
};