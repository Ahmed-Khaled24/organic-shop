import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getProductById, type Product } from "../../utils/db";

interface CartState {
    items: CartItem[];
}

interface CartItem {
    product: Product;
    count: number;
}

interface CartItemPayload {
    productId: string;
    count: number;
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(
            state: CartState,
            { payload: cartItem }: PayloadAction<CartItemPayload>,
        ) {
            // Check if the item already exist
            const itemIndex = state.items.findIndex(
                (item) => item.product.id === cartItem.productId,
            );

            // If not found, add it directly
            if (itemIndex == -1) {
                const product = getProductById(cartItem.productId)!;
                state.items.push({
                    product,
                    count: cartItem.count,
                });
            } else {
                // Increment the count for the found item
                state.items[itemIndex].count += cartItem.count;
            }
        },
        removeFromCart(
            state: CartState,
            { payload: productId }: PayloadAction<string>,
        ) {
            state.items = state.items.filter(
                (item) => item.product.id !== productId,
            );
        },
        updateItemCount(
            state: CartState,
            { payload }: PayloadAction<CartItemPayload>,
        ) {
            const newItems = state.items.map((item) => {
                if (item.product.id === payload.productId) {
                    return {
                        ...item,
                        count: payload.count,
                    };
                }
                return item;
            });
            state.items = newItems;
        },
        clearCart(state: CartState) {
            state.items = [];
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart, updateItemCount } =
    cartSlice.actions;
