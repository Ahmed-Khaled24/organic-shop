import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);
