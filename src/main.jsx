import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";
import { ToastContainer, Zoom } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        transition={Zoom}
        toastClassName="text-sm px-3 py-2 rounded-md"
        bodyClassName="text-sm"
        style={{ width: "90%", maxWidth: "350px" }}
      ></ToastContainer>
    </QueryClientProvider>
  </StrictMode>,
);
