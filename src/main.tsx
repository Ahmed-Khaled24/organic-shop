import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Toaster as ReactHotToaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <ReactHotToaster
                toastOptions={{
                    duration: 5000,
                    style: {
                        gap: "12px",
                    },
                }}
                containerStyle={{
                    zIndex: "10",
                }}
            />
            <App />
        </Provider>
    </StrictMode>,
);
