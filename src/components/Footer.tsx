import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaYelp } from "react-icons/fa";
import Brand from "../assets/brand-light.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    const websiteLinks = [
        { name: t("Footer.WebsiteLinks.About"), href: "#about" },
        { name: t("Footer.WebsiteLinks.Everything"), href: "#everything" },
        { name: t("Footer.WebsiteLinks.Groceries"), href: "#groceries" },
        { name: t("Footer.WebsiteLinks.Juice"), href: "#juice" },
        { name: t("Footer.WebsiteLinks.Contact"), href: "#contact" },
    ];

    const quickLinks = [
        { name: t("Footer.QuickLinks.KnowMoreAboutUs"), href: "#about-us" },
        { name: t("Footer.QuickLinks.VisitStore"), href: "#store" },
        { name: t("Footer.QuickLinks.LetsConnect"), href: "#connect" },
        { name: t("Footer.QuickLinks.LocateStores"), href: "#locations" },
    ];

    const siteLinks = [
        { name: t("Footer.SiteLinks.PrivacyPolicy"), href: "#privacy" },
        { name: t("Footer.SiteLinks.ShippingPolicy"), href: "#shipping" },
        { name: t("Footer.SiteLinks.RefundPolicy"), href: "#refund" },
        { name: t("Footer.SiteLinks.TermsOfService"), href: "#terms" },
    ];

    const socialLinks = [
        { name: "Facebook", icon: FaFacebook, href: "#facebook" },
        { name: "Twitter", icon: FaTwitter, href: "#twitter" },
        { name: "Instagram", icon: FiInstagram, href: "#instagram" },
    ];

    return (
        <footer className="bg-black text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1 me-8">
                        <a className="flex items-center mb-6" href="#">
                            <img src={Brand} />
                        </a>
                        <p className="text-white font-semibold italic text-md leading-relaxed">
                            {t("Footer.Bio")}
                        </p>
                    </div>

                    {/* Website Links */}
                    <div>
                        <h3 className="text-white font-semibold text-xl mb-4 font-merriweather!">
                            {t("Footer.WebsiteLinks.Title")}
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
                            {t("Footer.QuickLinks.Title")}
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
                            {t("Footer.SiteLinks.Title")}
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
                            {t("Footer.Copyrights")}
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
