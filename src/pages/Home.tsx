import { AdSection } from "../features/home/AdSection";
import { BestSellingSection } from "../features/home/BestSellingSection";
import { FeaturesBanner } from "../features/home/FeaturesBanner";
import { HeroSection } from "../features/home/HeroSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesBanner />
            <BestSellingSection />
            <AdSection />
        </>
    );
};

export default Home;
