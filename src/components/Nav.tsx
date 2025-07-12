import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import Brand from "../assets/brand.svg";
import { Dropdown } from "./Dropdown";
import { IoLanguageOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [cartItemsCounter] = useState<number>(0);

    const navItems = [
        { name: "About" },
        { name: "Everything" },
        { name: "Groceries" },
        { name: "Juice" },
        { name: "Contact" },
    ];

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="w-36 h-8 flex items-center justify-center">
                            <img src={Brand} />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={`#${item.name.toLowerCase()}`}
                                    className="text-gray-700 hover:text-green-primary px-3 py-2 text-md font-normal transition-colors duration-200 flex items-center space-x-1"
                                >
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Cart and User Icons */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center justify-center">
                            <Dropdown
                                mainText={
                                    <IoLanguageOutline className="w-6 h-6 text-gray-700 hover:text-green-primary cursor-pointer transition-colors duration-200" />
                                }
                                menuItems={[
                                    { content: "AR" },
                                    { content: "EN" },
                                ]}
                            />
                        </div>
                        <div className="relative">
                            <FiShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-primary cursor-pointer transition-colors duration-200" />
                            <span className="absolute -top-2 -right-2 bg-green-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartItemsCounter}
                            </span>
                        </div>
                        <FiUser className="w-6 h-6 text-gray-700 hover:text-green-primary cursor-pointer transition-colors duration-200" />

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                            >
                                {isMenuOpen ? (
                                    <FiX className="block h-6 w-6" />
                                ) : (
                                    <FiMenu className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.name.toLowerCase()}`}
                                className="text-gray-700 hover:text-green-primary hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center space-x-3"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
