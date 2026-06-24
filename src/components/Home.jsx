import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                Hi, I'm <spam className="text-indigo-600 dark:text-Indigo-400">Vansh Kirtishahi</spam>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                A Passinate Full-Stack Developer specilization in the MERN Stack and building modern, scalable applications 
            </p>
            <div className="flex space-x-4 mb-8">
                <a href="https://github.com/VanshKirtishahi" target="_black" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-3xl transition">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/vansh-kirtishahi/" target="_black" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-3xl transition">
                <FaLinkedin />
                </a>
                <a href="mailto:vanshkirtishahi@gmail.com" target="_black" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-3xl transition">
                <FaEnvelope />
                </a>
                <Link to="/projects" className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
                Veiw My Work
                </Link>
            </div>
        </div>
    );
}

export default Home;