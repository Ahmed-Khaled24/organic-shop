import { Field, Label, Textarea } from "@headlessui/react";
import classNames from "classnames";
import { useState, type FC } from "react";

interface CustomTextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    rounded?: string;
    background?: "white" | "transparent";
    labelPosition?: "embedded" | "separate";
    wrapperClassName?: string;
}

const CustomTextarea: FC<CustomTextareaProps> = ({
    label,
    rounded = "rounded-none",
    background = "transparent",
    labelPosition = "separate",
    wrapperClassName,
    ...other
}) => {
    const [hasText, setHasText] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHasText(e.target.value.length > 0);
        other.onChange && other.onChange(e);
    };

    const wrapperClasses = classNames(
        "relative flex flex-col gap-2",
        {
            "bg-white": labelPosition === "embedded" && background === "white",
            "bg-transparent":
                labelPosition === "embedded" && background === "transparent",
            "border-gray-300 border-1": labelPosition === "embedded",
            [`${rounded}`]: labelPosition === "embedded" && !!rounded,
        },
        wrapperClassName,
    );

    const labelClasses = classNames("", {
        hidden: labelPosition === "embedded" && !hasText,
        "absolute top-1 left-4 text-sm": labelPosition === "embedded",
        "opacity-50": labelPosition === "embedded",
    });

    const inputClasses = classNames("p-3 text-sm", {
        "p-4": labelPosition === "embedded",
        "pt-6 pb-2": labelPosition === "embedded" && hasText,
        "bg-white": labelPosition === "separate" && background === "white",
        "bg-transparent":
            labelPosition === "separate" && background === "transparent",
        "border-gray-300 border-1": labelPosition === "separate",
        [`${rounded}`]: labelPosition === "separate" && !!rounded,
    });

    return (
        <Field className={wrapperClasses}>
            <Label className={labelClasses}>{label}</Label>
            <Textarea
                {...other}
                className={inputClasses}
                placeholder={
                    labelPosition === "separate" ? other.placeholder : label
                }
                onChange={handleChange}
            />
        </Field>
    );
};

export default CustomTextarea;
