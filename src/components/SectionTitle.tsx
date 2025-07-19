import type { FC } from "react";
import LeafImage from "../assets/leaf.png";

interface SectionTitleProps {
    title: string;
}
export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className="flex flex-col gap-8 items-center">
            <h1 className="text-4xl font-semibold font-merriweather!">
                {title}
            </h1>
            <img src={LeafImage} alt="leaf image" />
        </div>
    );
};
