import "react-medium-image-zoom/dist/styles.css";

import { useParams } from "react-router";
import { db, getProductById } from "../utils/db";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ProductCard from "../components/ProductCard";
import ProductOverviewSection from "../features/product/ProductOverviewSection";
import { AddReviewForm } from "../features/product/AddReviewForm";
import { useTranslation } from "react-i18next";

export const Product = () => {
    const {
        t,
        i18n: { language },
    } = useTranslation();
    const { id } = useParams();
    const product = getProductById(id!);

    const tabs = [
        {
            tabTitle: t("Product.Tabs.Description"),
            tabPanel: (
                <p>
                    {language === "ar"
                        ? product?.description_ar
                        : product?.description}
                </p>
            ),
        },
        {
            tabTitle: t("Product.Tabs.Reviews"),
            tabPanel: <AddReviewForm {...product} />,
        },
    ];

    const similarProductsSectionTitle =
        language === "ar" ? "منتجات مشابهة" : "Related Products";

    return (
        <main className="bg-off-white">
            <div className="max-w-7xl mx-auto flex flex-col py-24 gap-16">
                {/* Product overview */}
                <ProductOverviewSection {...product} />
                {/* Description and reviews */}
                <section>
                    <TabGroup>
                        <TabList className="flex gap-4 border-t-2 border-gray-300 text-lg font-semibold">
                            {tabs.map((tab) => (
                                <Tab
                                    key={tab.tabTitle}
                                    className="relative opacity-60 py-2 cursor-pointer data-selected:opacity-100 data-selected:before:absolute data-selected:before:h-1 data-selected:before:bg-green-primary data-selected:before:-top-0.5 data-selected:before:w-full data-selected:outline-none"
                                >
                                    {tab.tabTitle}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels className="mt-4">
                            {tabs.map((tab) => (
                                <TabPanel key={tab.tabTitle}>
                                    {tab.tabPanel}
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </TabGroup>
                </section>
                {/* Similar products */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-4xl font-bold font-merriweather!">
                        {similarProductsSectionTitle}
                    </h2>
                    <div className="grid grid-cols-4 gap-6">
                        {db.products.slice(1, 4).map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};
