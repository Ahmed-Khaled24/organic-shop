import { ProductsTable } from "../features/cart/ProductsTable";
import { TotalsTable } from "../features/cart/TotalsTable";

const Cart = () => {
    return (
        <main className="bg-off-white py-24">
            <div className="max-w-7xl mx-auto flex flex-col">
                <h1 className="font-bold text-3xl font-merriweather! mb-8">
                    Cart
                </h1>
                <ProductsTable />
                <TotalsTable />
            </div>
        </main>
    );
};

export default Cart;
