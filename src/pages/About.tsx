import { useTranslation } from "react-i18next";
import leafImg from "../assets/basil-leaf.png";
import grapesImg from "../assets/grapes.jpg";

export const About = () => {
    const { t } = useTranslation();
    return (
        <main>
            <h1 className="relative text-center text-5xl font-bold font-merriweather! py-24 bg-[#f8f6f3]">
                {t("About.Title")}
                <img
                    src={leafImg}
                    className="absolute w-40 translate-x-[-50%] translate-y-[50%] bottom-0 left-1/2"
                />
            </h1>
            {/* We are your favorite store */}
            <section className="flex max-w-7xl mx-auto py-24 gap-16 items-center">
                <div className="w-1/2 flex flex-col gap-8 p-16">
                    <h2 className="font-bold font-merriweather! text-4xl">
                        {t("About.ParagraphsTitle")}
                    </h2>
                    <p>{t("About.Paragraph1")}</p>
                    <p>{t("About.Paragraph2")}</p>
                </div>
                <div className="w-1/2">
                    <img src={grapesImg} className="" />
                </div>
            </section>
        </main>
    );
};
