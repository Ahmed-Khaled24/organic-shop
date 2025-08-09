import { useTranslation } from "react-i18next";
import { FaRecycle, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdLocalShipping, MdOutlinePermContactCalendar } from "react-icons/md";

export const FeaturesBanner = () => {
    const { t } = useTranslation();

    const featuresWithTranslation = t("Home.FeaturesBanner", {
        returnObjects: true,
    }) as { Title: string; SubTitle: string }[];

    const features = [
        {
            icon: <MdLocalShipping size={36} />,
            title: featuresWithTranslation[0].Title,
            subtitle: featuresWithTranslation[0].SubTitle,
        },
        {
            icon: <MdOutlinePermContactCalendar size={36} />,
            title: featuresWithTranslation[1].Title,
            subtitle: featuresWithTranslation[1].SubTitle,
        },
        {
            icon: <FaRegMoneyBillAlt size={36} />,
            title: featuresWithTranslation[2].Title,
            subtitle: featuresWithTranslation[2].SubTitle,
        },
        {
            icon: <FaRecycle size={36} />,
            title: featuresWithTranslation[3].Title,
            subtitle: featuresWithTranslation[3].SubTitle,
        },
    ];

    return (
        <div className="bg-black flex gap-8 items-center justify-center py-12">
            {features.map(({ icon, title, subtitle }) => (
                <div
                    key={title}
                    className="flex gap-4 bg-gray-primary rounded-lg text-white p-8 min-w-60"
                >
                    <div className="text-green-primary">{icon}</div>
                    <div className="flex flex-col gap-1">
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
