import { Button } from "@headlessui/react";
import classNames from "classnames";
import { type FC, type ReactNode } from "react";
import { Link } from "react-router";
import { Oval } from "react-loader-spinner";

interface CustomButtonProps {
    children: ReactNode;
    link?: string;
    className?: string;
    loading?: boolean;
    onClick?: () => void;
}
const CustomButton: FC<CustomButtonProps> = ({
    children,
    link,
    className,
    loading,
    ...other
}) => {
    const classes = classNames(
        "text-white font-semibold text-center uppercase",
        "bg-green-primary rounded-md cursor-pointer flex gap-2 items-center justify-center px-10 py-2",
        "hover:bg-green-primary-bright transition-colors duration-300 ease-in-out",
        className,
    );

    if (loading) {
        return (
            <Button className={classes} {...other} disabled={loading}>
                <Oval color="white" height={24} strokeWidth={4} />
            </Button>
        );
    }

    return link ? (
        <Link to={link} className={classes} {...other}>
            {children}
        </Link>
    ) : (
        <Button className={classes} {...other} disabled={loading}>
            {children}
        </Button>
    );
};

export default CustomButton;
