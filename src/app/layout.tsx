import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casey Fronk's Portfolio",
  description:
    "Full-stack software engineer based in Salt Lake City, transforming ambitious ideas into polished products.",
  openGraph: {
    title: "Casey Fronk's Portfolio",
    description:
      "Full-stack software engineer based in Salt Lake City, transforming ambitious ideas into polished products.",
    url: "https://caseyfronk.com",
    siteName: "Casey Fronk's Portfolio",
    type: "website",
    images: [
      {
        url: "https://caseyfronk.com/casey-fronk-portrait.jpeg",
        width: 400,
        height: 400,
        alt: "An outdoor portrait of Casey Fronk.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casey Fronk's Portfolio",
    description:
      "Full-stack software engineer based in Salt Lake City, transforming ambitious ideas into polished products.",
    images: ["https://caseyfronk.com/casey-fronk-portrait.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
