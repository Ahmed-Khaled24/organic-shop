import { formatPrice } from "../../utils/format-price";
import { useSelector } from "react-redux";
import { calculateFormattedDiscountedPrice } from "../../utils/discount-price";
import type { RootState } from "../../app/store";
import classNames from "classnames";
import CustomButton from "../../components/CustomButton";

export const TotalsTable = () => {
    const cartState = useSelector((state: RootState) => state.cart);
    const cartSubtotal = cartState.items.reduce((acc, cur) => {
        const { currentPrice } = calculateFormattedDiscountedPrice(cur.product);
        const curTotal = cur.count * currentPrice;
        return acc + curTotal;
    }, 0);
    const formattedSubtotal = formatPrice(cartSubtotal);

    const trClasses = classNames("border-1 border-gray-300 p-4");

    return (
        <table className="mt-12 w-1/2 self-end">
            <thead>
                <tr className={`bg-white ${trClasses}`}>
                    <th colSpan={2} className="font-merriweather! text-xl">
                        Cart totals
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={`${trClasses}`}>
                    <td>Subtotal</td>
                    <td>{formattedSubtotal}</td>
                </tr>
                <tr className={`${trClasses}`}>
                    <td>Total</td>
                    <td>{formattedSubtotal}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr className={`${trClasses}`}>
                    <td colSpan={2} className="p-4!">
                        <CustomButton link="/checkout" className="py-3 w-full">
                            PROCEED TO CHECKOUT
                        </CustomButton>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};
