import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="grid cursor-pointer place-items-center mr-1">
            <input
                type="checkbox" // Alterado para checkbox para permitir alternância
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="hidden"
            />
            <div className={`flex items-center transition-all duration-300 ${theme === 'dark' ? 'bg-purple-800' : 'bg-blue-400'} w-16 h-8 rounded-full`}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}`}>
                    {theme === 'dark' ? (
                        <FontAwesomeIcon icon={faMoon} className="text-blue-500" />
                    ) : (
                        <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
                    )}
                </div>
            </div>
        </label>
    );
}