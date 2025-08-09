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
import { useTranslation } from "react-i18next";

export const ProductsTable = () => {
    const {
        t,
        i18n: { language },
    } = useTranslation();
    const dispatch = useDispatch();
    const cartState = useSelector((state: RootState) => state.cart);
    const trClasses = classNames("border-1 border-gray-300 p-4");

    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className={`${trClasses} bg-white font-semibold`}>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">{t("Cart.ItemsTable.Headers.Product")}</th>
                    <th scope="col">{t("Cart.ItemsTable.Headers.Price")}</th>
                    <th scope="col">{t("Cart.ItemsTable.Headers.Quantity")}</th>
                    <th scope="col">{t("Cart.ItemsTable.Headers.Subtotal")}</th>
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
                                    {language === "ar"
                                        ? item.product.title_ar
                                        : item.product.title}
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
                            {t("Cart.ItemsTable.EmptyMessage")}
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
                                placeholder={t(
                                    "Cart.ItemsTable.CouponInputPlaceholder",
                                )}
                            />
                            <CustomButton className="px-6! ms-2 rounded-sm text-sm">
                                {t("Cart.ItemsTable.ApplyButton")}
                            </CustomButton>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};
