import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
// import { FileDown, Github, House, Linkedin, LucideProps } from "lucide-react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

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
    <html
      lang="en"
      className={cn(GeistSans.className, "scroll-smooth scroll-pt-24")}
    >
      <body className="min-h-svh w-svw bg-background">
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

// type NavItem = {
//   label: string;
//   href: string;
//   Icon: ComponentType<LucideProps>;
// };

// const navItems: NavItem[] = [
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/caseyjfronk",
//     Icon: Linkedin,
//   },
//   {
//     label: "Github",
//     href: "https://github.com/caseyfronk",
//     Icon: Github,
//   },
//   {
//     label: "Download resumé",
//     href: "/casey-fronk-resume.pdf",
//     Icon: FileDown,
//   },
// ];
