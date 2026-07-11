"use client";

import { ThemeProvider } from "./theme-provider";
import { ReactNode } from "react";
import { LayoutGroup } from "framer-motion";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
    >
      <LayoutGroup>{children}</LayoutGroup>
    </ThemeProvider>
  );
}