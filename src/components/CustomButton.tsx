import { Button } from "@headlessui/react";
import classNames from "classnames";
import type { FC, ReactNode } from "react";
import { Link } from "react-router";

interface CustomButtonProps {
    children: ReactNode;
    link?: string;
    className?: string;
    onClick?: () => void;
}
const CustomButton: FC<CustomButtonProps> = ({
    children,
    link,
    className,
    ...other
}) => {
    const classes = classNames(
        "text-white font-semibold text-center uppercase",
        "bg-green-primary rounded-md cursor-pointer flex gap-2 items-center justify-center px-10 py-2",
        "hover:bg-green-primary-bright transition-colors duration-300 ease-in-out",
        className,
    );

    return link ? (
        <Link to={link} className={classes} {...other}>
            {children}
        </Link>
    ) : (
        <Button className={classes} {...other}>
            {children}
        </Button>
    );
};

export default CustomButton;
