import { FaRecycle, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdLocalShipping, MdOutlinePermContactCalendar } from "react-icons/md";

export const FeaturesBanner = () => {
    const features = [
        {
            icon: <MdLocalShipping size={36} />,
            title: "Free Shipping",
            subtitle: "Above $5 Only",
        },
        {
            icon: <MdOutlinePermContactCalendar size={36} />,
            title: "Certified Organic",
            subtitle: "100% Guarantee",
        },
        {
            icon: <FaRegMoneyBillAlt size={36} />,
            title: "Huge Savings",
            subtitle: "At Lowest Price",
        },
        {
            icon: <FaRecycle size={36} />,
            title: "Easy Returns",
            subtitle: "No Questions Asked",
        },
    ];

    return (
        <div className="bg-black flex gap-8 items-center justify-center py-12">
            {features.map(({ icon, title, subtitle }) => (
                <div className="flex gap-4 bg-gray-primary rounded-lg text-white p-8">
                    <div className="text-green-primary">{icon}</div>
                    <div className="flex flex-col">
                        <p className="text-lg font-merriweather! font-semibold">
                            {title}
                        </p>
                        <p>{subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
