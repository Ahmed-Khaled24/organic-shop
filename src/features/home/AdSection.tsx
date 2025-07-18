import { AdCard, type AdCardProps } from "./AdCard";
import img1 from "../../assets/ad-cards/1.jpg";
import img2 from "../../assets/ad-cards/2.jpg";
import img3 from "../../assets/ad-cards/3.jpg";
import leafImg from "../../assets/basil-leaf.png";
import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";

export const AdSection = () => {
    const cards: AdCardProps[] = [
        {
            title: "Farm Fresh Fruits",
            subtitle:
                "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
            image: img1,
        },
        {
            title: "Fresh Vegetables",
            subtitle:
                "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
            image: img2,
        },
        {
            title: "Organic Legume",
            subtitle:
                "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
            image: img3,
        },
    ];
    return (
        <section>
            <div className="bg-[#f8f6f3] relative py-24">
                <img
                    src={leafImg}
                    className="absolute top-0 right-[50%] translate-x-[50%] translate-y-[-50%] w-42"
                />
                {/* Cards */}
                <div className="flex gap-8 mx-auto max-w-6xl">
                    {cards.map((card) => (
                        <AdCard key={card.title} {...card} />
                    ))}
                </div>
            </div>

            <div className="flex py-14 bg-black text-white justify-center items-center gap-4 px-64">
                <p className="font-merriweather! font-bold text-4xl">
                    Get 25% Off On Your First Purchase!
                </p>
                <Link
                    to={"/products"}
                    className="bg-green-primary py-3 px-8 rounded-md text-white flex items-center gap-3 ml-auto"
                >
                    <FiShoppingCart />
                    <span className="font-semibold text-sm">SHOP NOW</span>
                </Link>
            </div>

            <div className="bg-[#f8f6f3] text-2xl text-center font-merriweather! py-8 font-bold">
                Try It For Free. No Registration Needed.
            </div>
        </section>
    );
};
