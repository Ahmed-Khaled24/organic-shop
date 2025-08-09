import { Link, useLocation } from "react-router";
import { db } from "../utils/db";
import { useEffect, useMemo, useState } from "react";
import {
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import ProductCard from "../components/ProductCard";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import CustomButton from "../components/CustomButton";
import { useTranslation } from "react-i18next";

export const Products = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const [products, setProducts] = useState(db.products);
    const sortingOptions = t("Products.SortingOptions", {
        returnObjects: true,
    }) as Record<string, string>;

    const category = (location.search || "?category=Everything").split("=")[1];
    const path = `${i18n.language === "ar" ? "الرئيسية" : "Home"} / ${t(`Products.${category}.Title`)}`;
    const showingAllResultsTitle =
        i18n.language === "ar"
            ? `عرض الجميع ${Intl.NumberFormat("ar-Eg").format(products.length)} منتج`
            : `Showing all ${products.length} results`;

    useEffect(() => {
        switch (category.toLowerCase()) {
            case "juice": {
                setProducts(
                    db.products.filter(
                        (product) => product.category.toLowerCase() == "juice",
                    ),
                );
                break;
            }
            case "groceries":
                {
                    setProducts(
                        db.products.filter(
                            (product) =>
                                product.category.toLowerCase() == "groceries",
                        ),
                    );
                }
                break;
            default:
                setProducts(db.products);
                break;
        }
    }, [category]);

    const [sortOption, setSortOption] = useState("Default");

    const handleSortProducts = (option: string) => {
        setSortOption(option);
        const sortedProducts = products.toSorted((a, b) => {
            let priceA = a.price;
            let priceB = b.price;

            if (a.hasDiscount) {
                priceA *= (100 - (a.discountPercentage ?? 0)) / 100;
            }

            if (b.hasDiscount) {
                priceB *= (100 - (b.discountPercentage ?? 0)) / 100;
            }

            return priceA - priceB;
        });
        switch (option) {
            case "PriceHighToLow": {
                setProducts(sortedProducts.toReversed());
                break;
            }
            case "PriceLowToHigh": {
                setProducts(sortedProducts);
                break;
            }
            default: {
                setProducts(db.products);
                break;
            }
        }
    };

    const juiceCount = useMemo(() => {
        const count = products.reduce((acc, product) => {
            product.category.toLowerCase() == "juice" ? acc++ : acc;
            return acc;
        }, 0);
        if (i18n.language === "ar") {
            return Intl.NumberFormat("ar-Eg").format(count);
        }
        return count;
    }, []);

    const groceriesCount = useMemo(() => {
        const count = products.reduce((acc, product) => {
            product.category.toLowerCase() == "groceries" ? acc++ : acc;
            return acc;
        }, 0);
        if (i18n.language === "ar") {
            return Intl.NumberFormat("ar-Eg").format(count);
        }
        return count;
    }, []);

    const categoriesDescriptions: Record<string, string> = {
        Juice: t("Products.Juice.Description"),
        Groceries: t("Products.Groceries.Description"),
        Everything: t("Products.Everything.Description"),
    };

    return (
        <main className="bg-[#f8f6f3]">
            <div className="flex max-w-7xl mx-auto py-24">
                {/* Filter panel */}
                <aside className="w-1/5 border-r-1 border-r-gray-300 px-4 flex flex-col gap-8">
                    {/* Search by name */}
                    <div className="flex gap-1">
                        <Input
                            placeholder={t("Products.SearchInputPlaceholder")}
                            type="text"
                            className={
                                "bg-white p-3 data-focus:outline-none border-1 border-gray-300 min-w-0 rounded-sm"
                            }
                        />
                        <CustomButton className="rounded-sm p-2! aspect-1">
                            <RiArrowRightSLine
                                size={32}
                                style={{
                                    rotate: `${i18n.language === "ar" ? 180 : 0}deg`,
                                }}
                            />
                        </CustomButton>
                    </div>
                    {/* Links */}
                    <div className="flex flex-col gap-2">
                        <Link
                            className="text-green-primary"
                            to={`/products?category=Groceries`}
                        >
                            {t("Products.Groceries.Title")}{" "}
                            <span className="text-black ml-1">
                                ({groceriesCount})
                            </span>
                        </Link>
                        <Link
                            className="text-green-primary"
                            to={`/products?category=Juice`}
                        >
                            {t("Products.Juice.Title")}{" "}
                            <span className="text-black ml-1">
                                ({juiceCount})
                            </span>
                        </Link>
                    </div>
                </aside>

                {/* Products  */}
                <div className="px-8 w-4/5">
                    <header className="flex flex-col gap-4">
                        <p className="text-black/60">{path}</p>
                        <h1 className="capitalize font-merriweather! text-green-primary text-5xl font-bold mb-8">
                            {t(`Products.${category}.Title`)}
                        </h1>
                        {/* Category Description */}
                        {category in categoriesDescriptions && (
                            <p> {categoriesDescriptions[`${category}`]}</p>
                        )}
                        <div className="flex justify-between my-8">
                            <span>{showingAllResultsTitle}</span>
                            <Menu>
                                <MenuButton className="cursor-pointer border-1 px-4 py-2 rounded-md border-gray-300 flex gap-2 items-center">
                                    {sortingOptions[sortOption]}
                                    <MdArrowDropDown size={24} />
                                </MenuButton>
                                <MenuItems
                                    className={
                                        "flex flex-col bg-white shadow-md rounded-md"
                                    }
                                    anchor="bottom"
                                >
                                    {Object.keys(sortingOptions).map((key) => (
                                        <MenuItem>
                                            <span
                                                className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                                                onClick={() =>
                                                    handleSortProducts(key)
                                                }
                                            >
                                                {sortingOptions[key]}
                                            </span>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </header>

                    {/* Products grid */}
                    <div className="grid grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};
