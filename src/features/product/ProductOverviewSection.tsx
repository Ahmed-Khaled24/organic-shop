import { useState, type FC } from "react";
import type { Product } from "../../utils/db";
import Zoom from "react-medium-image-zoom";
import { Input } from "@headlessui/react";
import { Link } from "react-router";
import AESVG from "../../assets/payment-icons/ae.svg";
import VisaSVG from "../../assets/payment-icons/visa.svg";
import MastercardSVG from "../../assets/payment-icons/mastercard.svg";
import DiscoverSVG from "../../assets/payment-icons/discover.svg";
import { addToCart } from "../cart/cartSlice";
import { useDispatch } from "react-redux";
import { calculateFormattedDiscountedPrice } from "../../utils/discount-price";
import CustomButton from "../../components/CustomButton";
import { successToast } from "../../utils/toasters";
import { useTranslation } from "react-i18next";

const ProductOverviewSection: FC<Partial<Product>> = (product) => {
    const {
        t,
        i18n: { language },
    } = useTranslation();
    const [cartCounter, setCartCounter] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const dispatch = useDispatch();

    const { formattedCurrentPrice, formattedOriginalPrice } =
        calculateFormattedDiscountedPrice(product as Required<Product>);

    const addToCartHandler = () => {
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
            dispatch(
                addToCart({
                    productId: product.id!,
                    count: cartCounter,
                }),
            );
            successToast(t("Toasters.Success.AddToCart"));
        }, 1000);
    };

    const addToCartButtonText =
        language === "ar" ? "إضافة إلى السلة" : "Add to cart";
    const productTitle = language === "ar" ? product?.title_ar : product?.title;
    const productDescription =
        language === "ar" ? product?.description_ar : product?.description;
    const path =
        language === "ar"
            ? `الرئيسية / ${product?.category_ar} / ${product?.title_ar}`
            : `Home / ${product?.category} / ${product?.title}`;

    return (
        <section className="grid grid-cols-2 gap-24 w-full h-auto">
            <Zoom>
                <img
                    loading="lazy"
                    src={product?.mainImage}
                    className="w-full"
                />
            </Zoom>
            <div className="flex flex-col gap-2">
                {/* Path */}
                <p className="text-black/60">{path}</p>

                {/* Title */}
                <h2 className="text-3xl font-merriweather! font-bold mb-4">
                    {productTitle}
                </h2>

                {/* Price */}
                <div className="flex gap-2 items-center text-2xl font-bold">
                    {product?.hasDiscount && (
                        <del className="text-black/40 font-normal">
                            {formattedOriginalPrice}
                        </del>
                    )}
                    <p>{formattedCurrentPrice}</p>
                    <span className="text-base font-normal self-end">
                        + {t("Product.FreeShipping")}
                    </span>
                </div>

                {/* Description */}
                <p>{productDescription}</p>

                {/* Add to cart */}
                <div className="flex gap-4">
                    <Input
                        type="number"
                        min={1}
                        value={cartCounter}
                        onChange={(e) =>
                            setCartCounter(Number.parseInt(e.target.value))
                        }
                        className="bg-white border-1 border-gray-300 rounded-none min-w-0 data-focus:outline-none p-2 w-16"
                    />
                    <CustomButton
                        loading={isAdding}
                        className="rounded-sm w-full"
                        onClick={addToCartHandler}
                    >
                        {addToCartButtonText}
                    </CustomButton>
                </div>

                <hr className="border-gray-300 my-4" />

                <p>
                    {language === "ar" ? "الفئة: " : "Category: "}
                    <Link
                        to={`/products?category=${product?.category}`}
                        className="text-green-primary"
                    >
                        {language === "ar"
                            ? product?.category_ar
                            : product?.category}
                    </Link>
                </p>

                <div className="relative p-6 flex gap-2 justify-center items-center border-1 border-gray-300 mt-6">
                    <span className="absolute top-0 left-1/2 bg-off-white -translate-x-1/2 -translate-y-1/2 font-semibold">
                        {language === "ar"
                            ? "تسوق آمن ومضمون"
                            : "Guaranteed Safe Checkout"}
                    </span>
                    <img src={VisaSVG} alt="visa" className="w-12" />
                    <img
                        src={MastercardSVG}
                        alt="mastercard"
                        className="w-12"
                    />
                    <img src={AESVG} alt="american express" className="w-12" />
                    <img src={DiscoverSVG} alt="discover" className="w-12" />
                </div>
            </div>
        </section>
    );
};

export default ProductOverviewSection;
