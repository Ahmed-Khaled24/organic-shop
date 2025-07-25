import type { Product } from "./db";
import { formatPrice } from "./format-price";

export function calculateFormattedDiscountedPrice(product: Product) {
    let currentPrice = product.price;

    if (product.hasDiscount) {
        currentPrice = Math.trunc(
            product.price - product.price * (product.discountPercentage! / 100),
        );
    }

    const formattedOriginalPrice = formatPrice(product.price);
    const formattedCurrentPrice = formatPrice(currentPrice);

    return {
        formattedOriginalPrice,
        formattedCurrentPrice,
        currentPrice,
        originalPrice: product.price,
    };
}
