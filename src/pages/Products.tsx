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

enum SortOptions {
    PRICE_LOW_TO_HIGH = "Price low to high",
    PRICE_HIGH_TO_LOW = "Price high to low",
}

export const Products = () => {
    const location = useLocation();
    const category = (location.search || "?category=Shop").split("=")[1];

    const [products, setProducts] = useState(db.products);

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

    const [sortOption, setSortOption] = useState("Default sorting");

    const handleSortProducts = (option: SortOptions) => {
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
            case SortOptions.PRICE_HIGH_TO_LOW: {
                setProducts(sortedProducts.toReversed());
                break;
            }
            case SortOptions.PRICE_LOW_TO_HIGH: {
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
        return products.reduce((acc, product) => {
            product.category.toLowerCase() == "juice" ? acc++ : acc;
            return acc;
        }, 0);
    }, []);

    const groceriesCount = useMemo(() => {
        return products.reduce((acc, product) => {
            product.category.toLowerCase() == "groceries" ? acc++ : acc;
            return acc;
        }, 0);
    }, []);

    const categoriesDescriptions: Record<string, string> = {
        Juice: "Juice ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, velit et luctus interdum, est quam scelerisque tellus, eget luctus mi diam vitae erat. Praesent porttitor lacus vitae dictum posuere. Suspendisse elementum metus ac dolor tincidunt, eu imperdiet nisi dictum.",
        Groceries:
            "Groceries ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, velit et luctus interdum, est quam scelerisque tellus, eget luctus mi diam vitae erat. Praesent porttitor lacus vitae dictum posuere. Suspendisse elementum metus ac dolor tincidunt, eu imperdiet nisi dictum.",
    };

    return (
        <main className="bg-[#f8f6f3]">
            <div className="flex max-w-7xl mx-auto py-24">
                {/* Filter panel */}
                <aside className="w-1/5 border-r-1 border-r-gray-300 px-4 flex flex-col gap-8">
                    {/* Search by name */}
                    <div className="flex gap-1">
                        <Input
                            placeholder="Search products..."
                            className={
                                "bg-white p-3 data-focus:outline-none border-1 border-gray-300 min-w-0 rounded-sm"
                            }
                        />
                        <CustomButton className="rounded-sm p-2! aspect-1">
                            <RiArrowRightSLine size={32} />
                        </CustomButton>
                    </div>
                    {/* Links */}
                    <div className="flex flex-col gap-2">
                        <Link
                            className="text-green-primary"
                            to={`/products?category=Groceries`}
                        >
                            Groceries
                            <span className="text-black ml-1">
                                ({groceriesCount})
                            </span>
                        </Link>
                        <Link
                            className="text-green-primary"
                            to={`/products?category=Juice`}
                        >
                            Juice
                            <span className="text-black ml-1">
                                ({juiceCount})
                            </span>
                        </Link>
                    </div>
                </aside>

                {/* Products  */}
                <div className="px-8 w-4/5">
                    <header className="flex flex-col gap-4">
                        <p className="text-black/60">{`Home / ${category}`}</p>
                        <h1 className="capitalize font-merriweather! text-green-primary text-5xl font-bold mb-8">
                            {category}
                        </h1>
                        {/* Category Description */}
                        {category in categoriesDescriptions && (
                            <p> {categoriesDescriptions[`${category}`]}</p>
                        )}
                        <div className="flex justify-between my-8">
                            <span>Showing all {products.length} results</span>
                            <Menu>
                                <MenuButton className="cursor-pointer border-1 px-4 py-2 rounded-md border-gray-300 flex gap-2 items-center">
                                    {sortOption}
                                    <MdArrowDropDown size={24} />
                                </MenuButton>
                                <MenuItems
                                    className={
                                        "flex flex-col bg-white shadow-md rounded-md"
                                    }
                                    anchor="bottom"
                                >
                                    {Object.values(SortOptions)
                                        .concat(["Default sorting"] as any[])
                                        .map((option) => (
                                            <MenuItem>
                                                <span
                                                    className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                                                    onClick={() =>
                                                        handleSortProducts(
                                                            option,
                                                        )
                                                    }
                                                >
                                                    {option}
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
