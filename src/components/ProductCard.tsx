import { type FC } from "react";
import type { Product } from "../utils/db";
import { Link } from "react-router";
import { calculateFormattedDiscountedPrice } from "../utils/discount-price";
import { useTranslation } from "react-i18next";

const ProductCard: FC<Product> = (product) => {
    const { formattedOriginalPrice, formattedCurrentPrice } =
        calculateFormattedDiscountedPrice(product);

    const { i18n } = useTranslation();
    const lang = i18n.language;

    const title = lang === "en" ? product.title : product.title_ar;
    const category = lang === "en" ? product.category : product.category_ar;
    const saleBadgeText = lang === "en" ? "Sale!" : "خصم !";

    return (
        <Link to={`/products/${product.id}`} className="relative">
            <img src={product.mainImage} alt="" />

            {/* Text info */}
            <div className="flex flex-col items-center py-4">
                <p className="opacity-50 text-sm">{category}</p>
                <h6 className="font-merriweather!">{title}</h6>
                <div className="before:content-['☆☆☆☆☆']"></div>
                <div className="flex gap-2">
                    {product.hasDiscount && (
                        <del className="font-semibold text-sm opacity-50">
                            {formattedOriginalPrice}
                        </del>
                    )}
                    <p className="font-semibold text-sm">
                        {formattedCurrentPrice}
                    </p>
                </div>
            </div>

            {/* Sale badge */}
            {product.hasDiscount && (
                <div className="bg-green-primary font-semibold text-white text-xs rounded-full absolute -top-2 -right-2 h-10 w-10 flex items-center justify-center">
                    <span>{saleBadgeText}</span>
                </div>
            )}
        </Link>
    );
};

export default ProductCard;
