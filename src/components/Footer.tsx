import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaYelp } from "react-icons/fa";
import Brand from "../assets/brand-light.png";

const Footer = () => {
    const websiteLinks = [
        { name: "About", href: "#about" },
        { name: "Everything", href: "#everything" },
        { name: "Groceries", href: "#groceries" },
        { name: "Juice", href: "#juice" },
        { name: "Contact", href: "#contact" },
    ];

    const quickLinks = [
        { name: "Know More About Us", href: "#about-us" },
        { name: "Visit Store", href: "#store" },
        { name: "Let's Connect", href: "#connect" },
        { name: "Locate Stores", href: "#locations" },
    ];

    const siteLinks = [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Shipping Details", href: "#shipping" },
        { name: "Offers Coupons", href: "#offers" },
        { name: "Terms & Conditions", href: "#terms" },
    ];

    const socialLinks = [
        { name: "Yelp", icon: FaYelp, href: "#yelp" },
        { name: "Facebook", icon: FaFacebook, href: "#facebook" },
        { name: "Twitter", icon: FaTwitter, href: "#twitter" },
        { name: "Instagram", icon: FiInstagram, href: "#instagram" },
    ];

    return (
        <footer className="bg-black text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1 mr-8">
                        <a className="flex items-center mb-6" href="#">
                            <img src={Brand} />
                        </a>
                        <p className="text-white font-semibold italic text-md leading-relaxed">
                            Bringing you the freshest organic produce and
                            natural products sourced directly from local farms.
                            Your health and our planet matter to us.
                        </p>
                    </div>

                    {/* Website Links */}
                    <div>
                        <h3 className="text-white font-semibold text-xl mb-4 font-merriweather!">
                            Website
                        </h3>
                        <ul className="space-y-1">
                            {websiteLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-green-primary transition-colors duration-200 flex items-center space-x-2 text-md"
                                    >
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-xl mb-4 font-merriweather!">
                            Quick Links
                        </h3>
                        <ul className="space-y-1">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-green-primary transition-colors duration-200 flex items-center space-x-2 text-md"
                                    >
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Site Links */}
                    <div>
                        <h3 className="text-white font-semibold text-xl mb-4 font-merriweather!">
                            Site Links
                        </h3>
                        <ul className="space-y-1">
                            {siteLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-green-primary transition-colors duration-200 flex items-center space-x-2 text-md"
                                    >
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="text-white font-normal text-md mb-4 md:mb-0">
                            Copyright © 2025 | Organic Store
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 hover:text-green-primary transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
