import { type FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export interface AdCardProps {
    title: string;
    subtitle: string;
    image: string;
}
export const AdCard: FC<AdCardProps> = ({ title, subtitle, image }) => {
    const { i18n } = useTranslation();
    const buttonText = i18n.language === "ar" ? "تسوق الآن" : "SHOP NOW";
    const arrowClasses = classNames({ "rotate-180": i18n.language === "ar" });

    return (
        <div className="relative flex flex-col items-start bg-white rounded-md h-90 overflow-hidden">
            <img
                src={image}
                className="content-cover absolute w-3/4 z-[0] end-0 bottom-0"
            />
            <div className=" z-[1] flex flex-col gap-2 items-start p-12">
                <h4 className="text-2xl font-bold font-merriweather!">
                    {title}
                </h4>
                <p className="text-md opacity-75">{subtitle}</p>
                <CustomButton
                    link={"/products"}
                    className="py-3 px-6 mt-4 text-sm"
                >
                    <span>{buttonText}</span>
                    <FaArrowRight className={arrowClasses} />
                </CustomButton>
            </div>
        </div>
    );
};
