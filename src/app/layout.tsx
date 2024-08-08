import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Layout, LayoutHeader } from "@/components/nav/Layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeSelect } from "@/components/misc/ThemeSelect";

export const metadata: Metadata = {
  title: "Casey Fronk's Portfolio",
  description:
    "Explore Casey Fronk's projects, skills, and professional experience.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <LayoutHeader>
              <ThemeSelect />
            </LayoutHeader>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
