import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query.tsx";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" />
        <App />
      </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
