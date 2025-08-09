import { useEffect, type FC } from "react";
import { Modal } from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { calculateFormattedDiscountedPrice } from "../../utils/discount-price";
import { formatPrice } from "../../utils/format-price";
import { Button } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { removeFromCart } from "./cartSlice";
import { Link, useLocation } from "react-router";
import CustomButton from "../../components/CustomButton";
import { useTranslation } from "react-i18next";

interface CartPreviewProps {
    isOpen: boolean;
    toggleOpen: (nextState?: boolean) => void;
}
export const CartPreview: FC<CartPreviewProps> = (options) => {
    const {
        i18n: { language },
    } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        options.toggleOpen(false);
    }, [location]);

    const emptyCartMessage =
        language === "ar" ? "عربة التسوق فارغة." : "Your cart is empty.";
    const modalTitle = language === "ar" ? "عربة التسوق" : "Shopping Cart";

    const cartSubtotal = cartItems.reduce((acc, cur) => {
        const { currentPrice } = calculateFormattedDiscountedPrice(cur.product);
        const curTotal = cur.count * currentPrice;
        return acc + curTotal;
    }, 0);
    const formattedSubtotal = formatPrice(cartSubtotal);

    return (
        <Modal title={modalTitle} {...options}>
            <div className="mt-8 ">
                {/* Items */}
                <div className="px-8 flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
                    {cartItems.map((item) => {
                        const { currentPrice: itemCurrentPrice } =
                            calculateFormattedDiscountedPrice(item.product);
                        const itemFormattedCurrentPrice =
                            formatPrice(itemCurrentPrice);
                        const productTitle =
                            language === "ar"
                                ? item.product.title_ar
                                : item.product.title;
                        const productCount =
                            language === "ar"
                                ? Intl.NumberFormat("ar-EG").format(item.count)
                                : Intl.NumberFormat("en-US").format(item.count);
                        return (
                            <div
                                key={item.product.id}
                                className="flex gap-6 items-center"
                            >
                                <img
                                    className="w-20"
                                    src={item.product.mainImage}
                                    alt="product main image"
                                />
                                <div className="flex flex-col gap-1">
                                    <Link
                                        className="font-semibold"
                                        to={`/products/${item.product.id}`}
                                    >
                                        {productTitle}
                                    </Link>
                                    <p className="opacity-70 font-normal">
                                        {`${productCount} × ${itemFormattedCurrentPrice}`}
                                    </p>
                                </div>
                                <Button
                                    title="Remove this item"
                                    className="rounded-full w-6 h-6 opacity-50 border-2 border-black ms-auto hover:opacity-100 flex items-center justify-center transition-opacity ease-in-out duration-300 cursor-pointer"
                                    onClick={() =>
                                        dispatch(
                                            removeFromCart(item.product.id),
                                        )
                                    }
                                >
                                    <IoClose size={18} />
                                </Button>
                            </div>
                        );
                    })}
                    {cartItems.length === 0 && (
                        <p className="text-xl font-semibold text-center opacity-50">
                            {emptyCartMessage}
                        </p>
                    )}
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between mt-8 border-gray-300 border-t-1 border-b-1 py-4 px-8">
                    <span>
                        {language === "ar"
                            ? "المجموع قبل الضريبة:"
                            : "Subtotal:"}
                    </span>
                    <span>{formattedSubtotal}</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 p-4">
                    {cartItems.length > 0 ? (
                        <>
                            <CustomButton
                                className="rounded-sm"
                                link={"/checkout"}
                            >
                                {language === "ar" ? "إتمام الطلب" : "Checkout"}
                            </CustomButton>
                            <CustomButton
                                className="rounded-sm "
                                link={"/cart"}
                            >
                                {language === "ar" ? "عرض السلة" : "View Cart"}
                            </CustomButton>
                        </>
                    ) : (
                        <CustomButton
                            className="rounded-sm"
                            onClick={() => options.toggleOpen(false)}
                        >
                            {language === "ar"
                                ? "متابعة التسوق"
                                : "Continue Shopping"}
                        </CustomButton>
                    )}
                </div>
            </div>
        </Modal>
    );
};
