import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
    const { i18n } = useTranslation();
    useEffect(() => {
        const dir = i18n.language === "ar" ? "rtl" : "ltr";
        document.documentElement.dir = dir;
    }, [i18n.language]);

    return <RouterProvider router={router} />;
}

export default App;
