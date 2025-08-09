import { useTranslation } from "react-i18next";
import { ProductsTable } from "../features/cart/ProductsTable";
import { TotalsTable } from "../features/cart/TotalsTable";

const Cart = () => {
    const { t } = useTranslation();
    return (
        <main className="bg-off-white py-24">
            <div className="max-w-7xl mx-auto flex flex-col">
                <h1 className="font-bold text-3xl font-merriweather! mb-8">
                    {t("Cart.Title")}
                </h1>
                <ProductsTable />
                <TotalsTable />
            </div>
        </main>
    );
};

export default Cart;
