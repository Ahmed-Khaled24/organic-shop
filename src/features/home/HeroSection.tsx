import { FiShoppingCart } from "react-icons/fi";
import MainImage from "../../assets/hero-section-main-image.png";
import SecondaryImage from "../../assets/leaf.png";
import CustomButton from "../../components/CustomButton";

export const HeroSection = () => {
    return (
        <section className="bg-[#f8f6f3]">
            <div className="relative flex gap-8 max-w-7xl mx-auto py-20 before:bg-[url(/hero-section-background.png)] before:bg-no-repeat before:bg-right-bottom before:bg-size-[25%] before:block before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:opacity-25 before:pointer-events-none">
                <div className="max-w-1/2">
                    <img src={MainImage} />
                </div>
                <div className="flex flex-col gap-4 items-start max-w-1/2">
                    <img src={SecondaryImage} />
                    <p className="font-bold text-md font-merriweather!">
                        Best Quality Products
                    </p>
                    <p className="font-bold text-6xl font-merriweather! leading-[1.25]">
                        Join The Organic Movement!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                    </p>
                    <CustomButton
                        className="mt-6 py-3 text-sm gap-4"
                        link={"/products"}
                    >
                        <FiShoppingCart size={18} />
                        shop now
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};
