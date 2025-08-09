import i18n from "../config/i18n";
export function formatPrice(price: number) {
    const lang = i18n.language;
    const locale = lang === "en" ? "en-EN" : "ar-EG";
    console.log(locale);

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
        currencyDisplay: "name",
    }).format(price);
}
