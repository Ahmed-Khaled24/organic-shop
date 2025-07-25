import { type FC } from "react";
import { Modal } from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { calculateFormattedDiscountedPrice } from "../../utils/discount-price";
import { formatPrice } from "../../utils/format-price";
import { Button } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { removeFromCart } from "./cartSlice";
import { Link } from "react-router";

interface CartPreviewProps {
    isOpen: boolean;
    toggleOpen: (nextState?: boolean) => void;
}
export const CartPreview: FC<CartPreviewProps> = (options) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const cartSubtotal = cartItems.reduce((acc, cur) => {
        const { currentPrice } = calculateFormattedDiscountedPrice(cur.product);
        const curTotal = cur.count * currentPrice;
        return acc + curTotal;
    }, 0);
    const formattedSubtotal = formatPrice(cartSubtotal);

    return (
        <Modal title="Shopping Cart" {...options}>
            <div className="mt-8">
                {/* Items */}
                <div className="px-8 flex flex-col gap-4">
                    {cartItems.map((item) => {
                        const { currentPrice: itemCurrentPrice } =
                            calculateFormattedDiscountedPrice(item.product);
                        const itemFormattedCurrentPrice =
                            formatPrice(itemCurrentPrice);
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
                                        {item.product.title}
                                    </Link>
                                    <p className="opacity-70 font-normal">
                                        {item.count} ×{" "}
                                        {itemFormattedCurrentPrice}
                                    </p>
                                </div>
                                <Button
                                    title="Remove this item"
                                    className="rounded-full w-6 h-6 opacity-50 border-2 border-black ml-auto hover:opacity-100 flex items-center justify-center transition-opacity ease-in-out duration-300 cursor-pointer"
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
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between mt-8 border-gray-300 border-t-1 border-b-1 py-4 px-8">
                    <span>Subtotal:</span>
                    <span>{formattedSubtotal}</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 p-4">
                    <Button className="bg-green-primary text-white font-semibold py-2 rounded-sm cursor-pointer">
                        Checkout
                    </Button>
                    <Button className="bg-green-primary text-white font-semibold py-2 rounded-sm cursor-pointer">
                        View Cart
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
