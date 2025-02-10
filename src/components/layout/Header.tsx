import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import botpressImg from "../../assets/icons/botpress.png";
import userAvatar from "../../assets/icons/userAvatar.png";
import ThemeToggle from "../common/ThemeToggle";
import { Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const user = isAuthenticated ? { name: "Vinícius Sanches", email: "vsgeniselli@gmail.com" } : null;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={botpressImg} className="h-8 mix-blend-multiply" alt="Botpress Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Botpress</span>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* Menu de navegação - visível em telas grandes */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Início</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Menu 1</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Menu 2</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Menu 3</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Menu 4</a>
                            </li>
                        </ul>

                        {/* ThemeToggle entre os menus e os botões de login */}
                        <ThemeToggle />
                    </div>

                    {/* Botões de login e cadastro */}
                    {isAuthenticated ? (
                        <div className="relative">
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                onClick={toggleDropdown}
                            >
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={userAvatar} alt="User Avatar" />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">{user?.name}</span>
                                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                    </div>
                                    <ul className="py-2">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Preferências</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={() => setIsAuthenticated(false)}>Sair</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex space-x-3">
                            <button className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" onClick={() => setIsAuthenticated(true)}>Login</button>
                            <Link to="/register" className="text-white px-4 py-2 rounded-lg bg-primary-700 hover:bg-primary-800 transition">
                                Cadastro
                            </Link>
                        </div>
                    )}

                    {/* Botão de Menu Responsivo */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-5 h-5" />
                    </button>
                </div>

                {/* Dropdown do Menu Responsivo - exibido em telas pequenas */}
                {isOpen && (
                    <div className="w-full lg:hidden flex flex-col pt-3">
                        <ul className="flex flex-col font-medium p-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Início</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Menu 1</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Menu 2</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Menu 3</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Menu 4</a>
                            </li>
                        </ul>
                        {/* Em telas pequenas, o toggle de tema aparece dentro do dropdown com uma linha de separação */}
                        <div className="px-4 py-3">
                            <hr className="my-2 border-gray-300 dark:border-gray-600" />
                            <ThemeToggle />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
