import { Field, Input, Label } from "@headlessui/react";
import CustomInput from "../components/CustomInput";
import CustomTextarea from "../components/CustomTextarea";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { calculateFormattedDiscountedPrice } from "../utils/discount-price";
import { formatPrice } from "../utils/format-price";
import { IoIosLock } from "react-icons/io";
import { useState } from "react";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router";

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const cartSubtotal = cartItems.reduce((acc, cur) => {
        const { currentPrice } = calculateFormattedDiscountedPrice(cur.product);
        const curTotal = cur.count * currentPrice;
        return acc + curTotal;
    }, 0);
    const formattedSubtotal = formatPrice(cartSubtotal);

    const handleCheckout = () => {
        setIsCheckingOut(true);
        setTimeout(() => {
            setIsCheckingOut(false);
            dispatch(clearCart());
            navigate("/");
        }, 2000);
    };

    return (
        <main className="w-full bg-linear-to-r from-white to-off-white border-t-1 border-gray-300">
            <div className="max-w-7xl mx-auto w-full flex ">
                {/* Form */}
                <section className="w-1/2 p-10 border-r-1 border-gray-300 flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-merriweather! font-bold text-xl mb-2">
                            Contact
                        </h1>
                        <CustomInput
                            label="Email Address"
                            labelPosition="embedded"
                            rounded="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-merriweather! font-bold text-xl mb-2">
                            Billing Details
                        </h1>
                        <div className="flex gap-2 w-full">
                            <CustomInput
                                label="First name *"
                                labelPosition="embedded"
                                rounded="rounded-md"
                                wrapperClassName="w-1/2"
                            />
                            <CustomInput
                                label="Last name *"
                                labelPosition="embedded"
                                rounded="rounded-md"
                                wrapperClassName="w-1/2"
                            />
                        </div>
                        <CustomInput
                            label="Country / Region *"
                            labelPosition="embedded"
                            rounded="rounded-md"
                        />
                        <CustomInput
                            label="House number and street name *"
                            labelPosition="embedded"
                            rounded="rounded-md"
                        />
                        <CustomInput
                            label="Apartment, suite, unit, etc"
                            labelPosition="embedded"
                            rounded="rounded-md"
                        />
                        <div className="flex gap-2 w-full">
                            <CustomInput
                                label="Town / City"
                                labelPosition="embedded"
                                rounded="rounded-md"
                                wrapperClassName="min-w-0 w-1/3"
                            />
                            <CustomInput
                                label="State / County"
                                labelPosition="embedded"
                                rounded="rounded-md"
                                wrapperClassName="min-w-0 w-1/3"
                            />
                            <CustomInput
                                label="Postcode / ZIP"
                                labelPosition="embedded"
                                rounded="rounded-md"
                                wrapperClassName="min-w-0 w-1/3"
                            />
                        </div>
                        <CustomInput
                            label="Phone *"
                            labelPosition="embedded"
                            rounded="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-merriweather! font-bold text-xl mb-2">
                            Additional Information
                        </h1>
                        <CustomTextarea
                            label="Notes about your order, e.g. special notes for delivery"
                            labelPosition="embedded"
                            rounded="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-merriweather! font-bold text-xl mb-2">
                            Payment
                        </h1>
                        <fieldset className="border-1 border-gray-300 rounded-md">
                            <Field className="flex gap-2 p-3 border-b-1 border-gray-300">
                                <Input
                                    type="radio"
                                    className="w-4 accent-green-primary cursor-pointer"
                                    name="payment"
                                    value="check-payments"
                                    id="check-payments"
                                />
                                <Label
                                    htmlFor="check-payments"
                                    className={"select-none"}
                                >
                                    Check payments
                                </Label>
                            </Field>
                            <Field className="flex gap-2 p-3">
                                <Input
                                    type="radio"
                                    className="w-4 accent-green-primary cursor-pointer"
                                    value="cash-on-delivery"
                                    name="payment"
                                    id="cash-on-delivery"
                                />
                                <Label
                                    htmlFor="cash-on-delivery"
                                    className={"select-none"}
                                >
                                    Cash on delivery
                                </Label>
                            </Field>
                        </fieldset>
                    </div>
                    <CustomButton
                        className="flex gap-2 items-center"
                        onClick={handleCheckout}
                        loading={isCheckingOut}
                    >
                        <IoIosLock size={20} />
                        Place Order {formattedSubtotal}
                    </CustomButton>
                </section>
                {/* Products */}
                <section className="w-1/2 p-10 sticky top-0 bg-off-white flex flex-col gap-10">
                    <div className="flex flex-col gap-8">
                        {cartItems.map((item) => {
                            const { currentPrice } =
                                calculateFormattedDiscountedPrice(item.product);
                            return (
                                <div className="flex gap-6 items-center">
                                    <div className="w-18 relative">
                                        <img
                                            src={item.product.mainImage}
                                            alt={item.product.title}
                                        />
                                        <span className="absolute -top-2 -right-2 rounded-full bg-green-primary text-white w-6 h-6 flex items-center justify-center text-xs font-semibold">
                                            {item.count}
                                        </span>
                                    </div>
                                    <p className="text-sm">
                                        {item.product.title}
                                    </p>
                                    <p className="ml-auto text-sm">
                                        {formatPrice(currentPrice * item.count)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex gap-2 w-full">
                        <CustomInput
                            label="Coupon Code"
                            labelPosition="embedded"
                            background="white"
                            rounded="rounded-sm"
                            wrapperClassName="w-full"
                        />
                        <CustomButton className="rounded-sm text-sm">
                            Apply
                        </CustomButton>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            Subtotal
                            <span>{formattedSubtotal}</span>
                        </div>
                        <div className="flex justify-between text-xl">
                            Total
                            <span>{formattedSubtotal}</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Checkout;
