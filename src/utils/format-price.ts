export function formatPrice(price: number) {
    return new Intl.NumberFormat("en-En", {
        style: "currency",
        currency: "USD",
    }).format(price);
}
