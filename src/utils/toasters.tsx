import { toast, type ToastPosition } from "react-hot-toast";
import { PiWarningFill } from "react-icons/pi";
import { FaInfo } from "react-icons/fa6";

export const successToast = (
    message: string,
    position: ToastPosition = "bottom-right",
    duration?: number,
) =>
    toast.success(message, {
        iconTheme: {
            primary: "rgba(40, 167, 69, 1)",
            secondary: "#fff",
        },
        position: position as ToastPosition,
        duration,
    });

export const errorToast = (
    message: string,
    position: ToastPosition = "bottom-right",
    duration?: number,
) =>
    toast.error(message, {
        iconTheme: {
            primary: "rgba(255, 0, 0, 1)",
            secondary: "#fff",
        },
        position,
        duration,
    });

export const warningToast = (
    message: string,
    position: ToastPosition = "bottom-right",
    duration?: number,
) => {
    toast(message, {
        icon: <PiWarningFill size={20} />,
        position,
        duration,
    });
};

export const infoToast = (
    message: string,
    position: ToastPosition = "bottom-right",
    duration?: number,
) => {
    toast(message, {
        icon: <FaInfo size={20} />,
        position,
        duration,
    });
};
