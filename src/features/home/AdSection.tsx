import { AdCard, type AdCardProps } from "./AdCard";
import img1 from "../../assets/ad-cards/1.jpg";
import img2 from "../../assets/ad-cards/2.jpg";
import img3 from "../../assets/ad-cards/3.jpg";

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
        <section className="bg-[#f8f6f3] relative py-12">
            <div className="flex gap-4 mx-auto max-w-7xl">
                {cards.map((card) => (
                    <AdCard key={card.title} {...card} />
                ))}
            </div>
        </section>
    );
};
