import { AdSection } from "../features/home/AdSection";
import { BestSellingSection } from "../features/home/BestSellingSection";
import { FeaturesBanner } from "../features/home/FeaturesBanner";
import { HeroSection } from "../features/home/HeroSection";
import { ReviewsSection } from "../features/home/ReviewsSection";
import { TrendingProductsSection } from "../features/home/TrendingProductsSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesBanner />
            <BestSellingSection />
            <AdSection />
            <TrendingProductsSection />
            <ReviewsSection />
        </>
    );
};

export default Home;
