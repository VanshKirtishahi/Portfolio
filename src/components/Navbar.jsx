import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

 function Navbar()  {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const[isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-gray-200 dark:border-gray-800 p-4 sticky top-0 bg-white dark:bg-gray-900 z-50">
            <div className="container mx-auto flex justify-between items- center">
                <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Vansh.dev</Link>

                {/* Desktop Menu */}

                <div className="hidden md:flex items-center space-x-6">
                    <Link to='/' className=" hover:text-indigo-500 transform">Home</Link>
                    <Link to='/projects' className=" hover:text-indigo-500 transform" >Projects</Link>
                    <Link to='/contacts' className=" hover:text-indigo-500 transform">Contact</Link>
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        {theme === "dark" ? <FiSun size={20}/> : <FiMoon size={20}/> }
                    </button>
                </div>
            </div>

            {/* Mobile Menu Toggle */}

            <div className="md:hidden flex items-center">
                <button onClick={toggleTheme} className="p-2 mr-2">
                    {theme === "dark" ? <FiSun size={24}/> : <FiMoon size={24}/>}
                </button>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
                </button>
            </div>

            {/* Mobile Dropdown */}

            {isOpen &&(
                <div className="md:hidden flex flex-col space-y-4 pt-4 pb-2 text-center">
                    <Link to='/' className=" hover:text-indigo-500 transform">Home</Link>
                    <Link to='/projects' className=" hover:text-indigo-500 transform" >Projects</Link>
                    <Link to='/contacts' className=" hover:text-indigo-500 transform">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;