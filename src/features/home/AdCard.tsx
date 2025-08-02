import { type FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import CustomButton from "../../components/CustomButton";

export interface AdCardProps {
    title: string;
    subtitle: string;
    image: string;
}
export const AdCard: FC<AdCardProps> = ({ title, subtitle, image }) => {
    return (
        <div
            className={
                "relative flex flex-col items-start bg-white gap- rounded-md h-90 overflow-hidden"
            }
        >
            <img
                src={image}
                alt=""
                className="content-cover absolute w-3/4 z-[0] right-0 bottom-0"
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
                    <span>SHOP NOW</span>
                    <FaArrowRight />
                </CustomButton>
            </div>
        </div>
    );
};
