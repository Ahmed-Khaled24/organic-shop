import ProductCard from "../../components/ProductCard";
import leafImage from "../../assets/leaf.png";
import { db } from "../../utils/db";

export const TrendingProductsSection = () => {
    return (
        <section className="px-16 py-24 flex flex-col gap-8 max-w-7xl mx-auto">
            <h1 className="font-merriweather! text-4xl text-center font-bold">
                Trending Products
            </h1>
            <img src={leafImage} className="w-18 mx-auto" />
            <div className="grid grid-cols-4 gap-x-4 justify-center items-center mt-16">
                {db.products.slice(1).map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
};
