import { FiShoppingCart } from "react-icons/fi";
import { db } from "../../utils/db";
import { ReviewCard } from "./ReviewCard";
import { SectionTitle } from "../../components/SectionTitle";
import CustomButton from "../../components/CustomButton";
import { useTranslation } from "react-i18next";

export const ReviewsSection = () => {
    const { t } = useTranslation();
    return (
        <section className="relative px-16 py-24 flex flex-col gap-8 before:bg-[url(/hero-section-background.png)] before:bg-no-repeat before:bg-left-top before:bg-size-[30%] before:block before:absolute before:start-0 before:bottom-0 before:w-full before:h-full before:opacity-25 before:pointer-events-none before:z-[-1]">
            <SectionTitle title={t("Home.ReviewsSection.Title")} />

            {/* Reviews  */}
            <div className="flex gap-8 max-w-7xl mx-auto mt-16 items-end">
                {db.reviews.slice(0, 2).map((review, index) => {
                    if (index == 0) {
                        return (
                            <>
                                <ReviewCard {...review} />
                                <div className="relative flex flex-col rounded-md before:rounded-md p-8 w-sm h-110 items-center gap-8 text-white bg-[url(review-bg.jpg)] bg-no-repeat bg-center bg-cover before:w-full before:h-full before:absolute before:z-[0] before:top-0 before:bg-gray-800/50 hover:before:bg-black/75 before:transition-color before:duration-500 before:ease-in-out">
                                    <h3 className="font-merriweather! text-4xl text-center font-bold z-[0] leading-tight">
                                        {t(
                                            "Home.ReviewsSection.MiddleCardText",
                                        )}
                                    </h3>
                                    <p className="text-center z-[0]">
                                        {t(
                                            "Home.ReviewsSection.MiddleCardSubText",
                                        )}
                                    </p>
                                    <CustomButton
                                        link={"/products"}
                                        className="py-3 px-8 gap-3 mt-auto z-[0] text-sm"
                                    >
                                        <FiShoppingCart size={18} />
                                        {t(
                                            "Home.ReviewsSection.MiddleCardButtonText",
                                        )}
                                    </CustomButton>
                                </div>
                            </>
                        );
                    }
                    return <ReviewCard {...review} />;
                })}
            </div>
        </section>
    );
};
