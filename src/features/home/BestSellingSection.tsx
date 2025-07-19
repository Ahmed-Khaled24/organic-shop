import ProductCard from "../../components/ProductCard";
import { db } from "../../utils/db";
import { SectionTitle } from "../../components/SectionTitle";

export const BestSellingSection = () => {
    return (
        <div className="px-16 py-24 flex flex-col gap-16 max-w-7xl mx-auto">
            <SectionTitle title="Best Selling Products" />

            {/* Product Cards */}
            <div className="grid grid-cols-4 gap-x-4 justify-center items-center">
                {db.products.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};
