"use client";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/redux/store";

import StyledComponentsRegistry from "./AntdRegistry";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </QueryClientProvider>
    </Provider>
  );
}
