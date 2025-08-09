import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import Brand from "../assets/brand.svg";
import { Dropdown } from "./Dropdown";
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { CartPreview } from "../features/cart/CartPreviewModal";
import i18n from "../config/i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    const cartState = useSelector((state: RootState) => state.cart);
    const cartItemsCounter = cartState.items.reduce((acc, cur) => {
        acc += cur.count;
        return acc;
    }, 0);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartPreviewIsOpen, setCartPreviewOpen] = useState(false);

    const toggleCartPreview = (nextState?: boolean) => {
        setCartPreviewOpen((prev) => nextState ?? !prev);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleChangeLanguage = (lang: "ar" | "en") => {
        i18n.changeLanguage(lang);
    };

    const navItems = [
        { name: t("Nav.About"), href: "about" },
        { name: t("Nav.Everything"), href: "products" },
        { name: t("Nav.Groceries"), href: "products?category=Groceries" },
        { name: t("Nav.Juice"), href: "products?category=Juice" },
        { name: t("Nav.Contact"), href: "contact" },
    ];

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            to="/"
                            className="w-36 h-auto flex items-center justify-center"
                        >
                            <img src={Brand} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-gray-700 hover:text-green-primary px-3 py-2 text-md font-normal transition-colors duration-200 flex items-center space-x-1"
                                >
                                    <span>{item.name}</span>
                                </Link>
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
                                    {
                                        content: "AR",
                                        clickHandler: () =>
                                            handleChangeLanguage("ar"),
                                    },
                                    {
                                        content: "EN",
                                        clickHandler: () =>
                                            handleChangeLanguage("en"),
                                    },
                                ]}
                            />
                        </div>
                        <div
                            className="relative cursor-pointer"
                            onClick={() => toggleCartPreview(true)}
                        >
                            <CartPreview
                                isOpen={cartPreviewIsOpen}
                                toggleOpen={toggleCartPreview}
                            />
                            <FiShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-primary transition-colors duration-200" />
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
