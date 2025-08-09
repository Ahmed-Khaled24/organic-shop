import { FaPhone } from "react-icons/fa";
import leafImg from "../assets/basil-leaf.png";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { SectionTitle } from "../components/SectionTitle";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { IoMdArrowDropleft } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();
    const questions = t("Contact.FAQ", { returnObjects: true }) as {
        q: string;
        a: string;
    }[];
    return (
        <main>
            <h1 className="text-center text-5xl font-bold font-merriweather! py-36 bg-[#f8f6f3]">
                {t("Contact.Title")}
            </h1>
            <section className="relative w-7xl mx-auto translate-y-[-25%] bg-white flex gap-8 items-center justify-center p-16 shadow-lg shadow-gray-200">
                <img
                    src={leafImg}
                    className="absolute w-40 translate-x-[-50%] translate-y-[-50%] top-0 left-1/2"
                />
                <div className="w-1/3 p-8 flex flex-col gap-1 items-center border border-gray-200">
                    <FaPhone className=" text-green-primary mb-4" size={24} />
                    <span>+123 456 7890</span>
                    <span>+123 456 7890</span>
                </div>
                <div className="w-1/3 p-8 flex flex-col gap-1 items-center border border-gray-200">
                    <FiMail className=" text-green-primary mb-4" size={24} />
                    <span>info@example.com </span>
                    <span>support@example.com</span>
                </div>
                <div className="w-1/3 p-8 flex flex-col gap-1 items-center border border-gray-200">
                    <FaLocationDot
                        className=" text-green-primary mb-4"
                        size={24}
                    />
                    <pre className="text-center">{t("Contact.Address")}</pre>
                </div>
            </section>
            <section className="relative w-7xl mx-auto py-24 before:bg-[url(/hero-section-background.png)] before:bg-no-repeat before:bg-right-bottom before:bg-size-[50%] before:block before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:opacity-10 before:pointer-events-none">
                <SectionTitle title={t("Contact.FAQTitle")} />
                <div className="grid grid-cols-2 gap-4 gap-x-24 p-16 ">
                    {questions.map((question) => (
                        <div className="flex flex-col">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton
                                            className="cursor-pointer flex items-center gap-16 justify-between select-none border-gray-200 py-4 font-bold"
                                            style={{
                                                borderBottomWidth: open
                                                    ? "0"
                                                    : "1px",
                                            }}
                                        >
                                            {question.q}
                                            <IoMdArrowDropleft
                                                size={18}
                                                style={{
                                                    rotate: open
                                                        ? "-90deg"
                                                        : "0deg",
                                                }}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel
                                            transition
                                            className="transition duration-200 linear data-closed:-translate-y-4 data-closed:opacity-0 border-gray-200 py-4"
                                            style={{
                                                borderBottomWidth: open
                                                    ? "1px"
                                                    : "0",
                                            }}
                                        >
                                            {question.a}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};
