import LeafImage from "../../assets/leaf.png";
import ProductCard from "../../components/ProductCard";
import { db } from "../../utils/db";

export const BestSellingSection = () => {
    return (
        <div className="px-16 py-24 flex flex-col gap-16 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col gap-8 items-center">
                <h1 className="text-4xl font-semibold font-merriweather!">
                    Best Selling Products
                </h1>
                <img src={LeafImage} alt="" />
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-4 gap-x-4 justify-center items-center">
                {db.products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};
