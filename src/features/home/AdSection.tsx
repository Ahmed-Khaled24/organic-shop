import { AdCard, type AdCardProps } from "./AdCard";
import img1 from "../../assets/ad-cards/1.jpg";
import img2 from "../../assets/ad-cards/2.jpg";
import img3 from "../../assets/ad-cards/3.jpg";
import leafImg from "../../assets/basil-leaf.png";
import { FiShoppingCart } from "react-icons/fi";
import CustomButton from "../../components/CustomButton";
import { useTranslation } from "react-i18next";

export const AdSection = () => {
    const { t } = useTranslation();
    const translatedCards = t("Home.AdSection.Cards", {
        returnObjects: true,
    }) as { Title: string; SubTitle: string }[];
    const cards: AdCardProps[] = [
        {
            title: translatedCards[0].Title,
            subtitle: translatedCards[0].SubTitle,
            image: img1,
        },
        {
            title: translatedCards[1].Title,
            subtitle: translatedCards[1].SubTitle,
            image: img2,
        },
        {
            title: translatedCards[2].Title,
            subtitle: translatedCards[2].SubTitle,
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
                    {t("Home.AdSection.BannerText")}
                </p>
                <CustomButton
                    link={"/products"}
                    className="py-3 px-8 gap-3 ms-auto text-sm"
                >
                    <FiShoppingCart size={18} />
                    {t("Home.AdSection.BannerButtonText")}
                </CustomButton>
            </div>

            <div className="bg-[#f8f6f3] text-2xl text-center font-merriweather! py-8 font-bold">
                {t("Home.AdSection.BannerSubText")}
            </div>
        </section>
    );
};
