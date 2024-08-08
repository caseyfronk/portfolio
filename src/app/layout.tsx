import type { ComponentType, ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Layout } from "@/components/nav/Layout";
import { ThemeSelect } from "@/components/misc/ThemeSelect";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  FileDown,
  Github,
  House,
  Linkedin,
  LucideProps,
  Menu,
} from "lucide-react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const title = "Casey Fronk's Portfolio";

export const metadata: Metadata = {
  title,
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
            <Layout.Header>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-xl hidden md:inline-flex"
                )}
              >
                {title}
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "md:hidden inline-flex"
                )}
              >
                <House />
              </Link>
              <span className="flex-1" />

              <div className="hidden md:flex items-center gap-2 xl:gap-4">
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    asChild
                    size="icon"
                    variant="ghost"
                    tooltip={item.label}
                  >
                    <Link href={item.href}>
                      <item.Icon />
                    </Link>
                  </Button>
                ))}

                <ThemeSelect />
              </div>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </Layout.Header>

            {children}

            <Layout.Footer>
              {navItems.map((item, index) => (
                <Button key={index} variant="outline" asChild>
                  <Link href={item.href}>
                    {item.label}
                    <item.Icon className="ml-2 size-4" />
                  </Link>
                </Button>
              ))}
            </Layout.Footer>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

type NavItem = {
  label: string;
  href: string;
  Icon: ComponentType<LucideProps>;
};

const navItems: NavItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/caseyjfronk",
    Icon: Linkedin,
  },
  {
    label: "Github",
    href: "https://github.com/caseyfronk",
    Icon: Github,
  },
  {
    label: "Download resumé",
    href: "/casey-fronk-resume.pdf",
    Icon: FileDown,
  },
];
