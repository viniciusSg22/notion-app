import botpressImg from '../assets/botpress.png';

export default function Navbar() {
    return (
        <nav className="flex justify-between p-6 px-4" data-config-id="toggle-mobile" data-config-target=".navbar-menu" data-config-class="hidden">
            <div className="flex justify-between items-center w-full">
                <div className="xl:w-1/3">
                    <a className="block max-w-max" href="#">
                        <img className="h-16" src={botpressImg} alt="Botpress Logo"/>
                    </a>
                </div>
                <div className="hidden xl:block xl:w-1/3">
                    <ul className="flex justify-center">
                        <li className="mr-12"><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#">Menu 1</a></li>
                        <li className="mr-12"><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#">Menu 2</a></li>
                        <li className="mr-12"><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#">Menu 3</a></li>
                        <li><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#">Menu 4</a></li>
                    </ul>
                </div>
                <div className="hidden xl:block xl:w-1/3">
                    <div className="flex items-center justify-end">
                        <a className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md" href="#">Log In</a>
                        <a className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md" href="#">Sign Up</a>
                    </div>
                </div>
                {/* ToDo: Botão de dropdown para menus quando a responsividade quebrar */}
            </div>
        </nav>
    );
}