import React from "react";
import { calculateFormattedDiscountedPrice } from "../../utils/discount-price";
import { removeFromCart, updateItemCount } from "./cartSlice";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Button, Input } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";
import { formatPrice } from "../../utils/format-price";
import CustomButton from "../../components/CustomButton";

export const ProductsTable = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state: RootState) => state.cart);
    const trClasses = classNames("border-1 border-gray-300 p-4");

    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className={`${trClasses} bg-white font-semibold`}>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cartState.items.map((item) => {
                    const { currentPrice } = calculateFormattedDiscountedPrice(
                        item.product,
                    );

                    const handleRemoveItem = () => {
                        dispatch(removeFromCart(item.product.id));
                    };
                    const handleUpdateCount = (
                        e: React.ChangeEvent<HTMLInputElement>,
                    ) =>
                        dispatch(
                            updateItemCount({
                                productId: item.product.id,
                                count: Number.parseInt(e.target.value),
                            }),
                        );

                    return (
                        <tr className={trClasses}>
                            {/* Remove from cart */}
                            <td>
                                <Button
                                    title="Remove this item"
                                    className="rounded-full w-6 h-6 opacity-50 border-2 border-black hover:opacity-100 flex items-center justify-center transition-opacity ease-in-out duration-300 cursor-pointer"
                                    onClick={handleRemoveItem}
                                >
                                    <IoClose size={18} />
                                </Button>
                            </td>
                            {/* Product image */}
                            <td>
                                <img
                                    src={item.product.mainImage}
                                    className="w-16"
                                />
                            </td>
                            {/* Product title */}
                            <td>
                                <Link
                                    to={`/products/${item.product.id}`}
                                    className="text-green-primary"
                                >
                                    {item.product.title}
                                </Link>
                            </td>
                            {/* Product price */}
                            <td>{formatPrice(currentPrice)}</td>
                            {/* Items count */}
                            <td>
                                <Input
                                    min={1}
                                    type="number"
                                    value={item.count}
                                    onChange={handleUpdateCount}
                                    className="bg-white border-1 border-gray-300 rounded-none min-w-0 data-focus:outline-none p-2 w-16"
                                />
                            </td>
                            {/* Subtotal */}
                            <td>{formatPrice(item.count * currentPrice)}</td>
                        </tr>
                    );
                })}
                {cartState.items.length === 0 && (
                    <tr className="text-2xl opacity-50 border-1 border-gray-300">
                        <td colSpan={100} className="py-16! text-center!">
                            Your cart is empty.
                        </td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr className={`${trClasses}`}>
                    <td colSpan={100}>
                        <div className="flex items-center">
                            <Input
                                className="bg-white p-2 border-1 border-gray-300 rounded-sm data-focus:outline-none"
                                placeholder="Coupon Code"
                            />
                            <CustomButton className="px-6! ml-2 rounded-sm text-sm">
                                apply coupon
                            </CustomButton>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};
