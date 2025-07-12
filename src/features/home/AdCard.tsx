import classNames from "classnames";
import { type FC } from "react";
import { Link } from "react-router";

export interface AdCardProps {
    title: string;
    subtitle: string;
    image: string;
}
export const AdCard: FC<AdCardProps> = ({ title, subtitle, image }) => {
    const className = classNames(
        `before:bg-[url(${image})]`,
        "relative flex flex-col items-start bg-white gap-3 p-8 rounded-md",
        "before:bg-no-repeat before:bg-right-bottom before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:pointer-events-none]",
    );
    return (
        <div className={className}>
            <h4 className="text-lg font-bold font-merriweather!">{title}</h4>
            <p className="text-md opacity-75">{subtitle}</p>
            <Link
                to={"/products"}
                className="bg-green-primary py-2 px-8 rounded-md text-white"
            >
                Shop now
            </Link>
        </div>
    );
};
