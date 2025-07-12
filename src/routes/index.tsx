import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import { PublicLayout } from "../layouts/PublicLayout";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import { Products } from "../pages/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: PublicLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "contact",
                Component: Contact,
            },
            {
                path: "about",
                Component: About,
            },
            {
                path: "products",
                Component: Products,
            },
        ],
    },
]);
