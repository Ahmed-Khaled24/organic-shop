import { useTranslation } from "react-i18next";
import ProductCard from "../../components/ProductCard";
import { SectionTitle } from "../../components/SectionTitle";
import { db } from "../../utils/db";

export const TrendingProductsSection = () => {
    const { t } = useTranslation();
    return (
        <section className="px-16 py-24 flex flex-col gap-8 max-w-7xl mx-auto">
            <SectionTitle title={t("Home.TrendingProductsSection.Title")} />
            {/* Products */}
            <div className="grid grid-cols-4 gap-x-4 justify-center items-center mt-16">
                {db.products.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
};
