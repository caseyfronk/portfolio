import { cn } from "@/lib/utils";
import { LucideProps, Menu } from "lucide-react";
import { ReactNode, FC, ComponentType } from "react";
import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { ThemeSelect } from "../misc/ThemeSelect";

type LayoutProps = {
  className?: string;
  children?: ReactNode;
};

type LayoutLink = {
  label: string;
  href: string;
  Icon: ComponentType<LucideProps>;
};

type LayoutHeaderProps = {
  links: LayoutLink[];
  className?: string;
  children?: ReactNode;
};

type LayoutFooterProps = {
  className?: string;
  children?: ReactNode;
};

// Define the Layout function
function Layout(props: LayoutProps): JSX.Element {
  const { className, children } = props;
  return <div className={cn("", className)}>{children}</div>;
}

// Define the Header function
function Header(props: LayoutHeaderProps): JSX.Element {
  const { links, className, children } = props;
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex items-center bg-accent shadow-md backdrop-blur supports-[backdrop-filter]:bg-accent/80",
        className
      )}
    >
      <nav className="container flex p-2 xl:p-4 gap-2 xl:gap-4 items-center">
        {children}
        <div className="hidden md:flex gap-2 xl:gap-4 items-center">
          {links.map((link, index) => (
            <Button
              key={index}
              asChild
              size="icon"
              variant="outline"
              tooltip={link.label}
            >
              <Link href={link.href} target="_blank">
                <link.Icon />
              </Link>
            </Button>
          ))}
          <ThemeSelect />
        </div>

        <Sheet>
          <SheetTrigger
            className={buttonVariants({ variant: "outline", size: "icon" })}
          >
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="border-b">
              <SheetTitle>Links and files</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 pt-6">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="bg-accent/50 hover:bg-accent rounded text-card-foreground flex p-2"
                >
                  <link.Icon className="mr-2 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

// Define the Footer function
function Footer(props: LayoutFooterProps): JSX.Element {
  const { className, children } = props;
  return (
    <footer
      className={cn(
        "border-t p-2 xl:p-2 gap-2 xl:gap-4 flex justify-center items-center",
        className
      )}
    >
      {children}
    </footer>
  );
}

// Assign Header and Footer as properties of Layout
Layout.Header = Header as FC<LayoutHeaderProps>;
Layout.Footer = Footer as FC<LayoutFooterProps>;

// Ensure the Layout component itself has the correct type
const LayoutComponent: FC<LayoutProps> & {
  Header: FC<LayoutHeaderProps>;
  Footer: FC<LayoutFooterProps>;
} = Layout as FC<LayoutProps> & {
  Header: FC<LayoutHeaderProps>;
  Footer: FC<LayoutFooterProps>;
};

export { LayoutComponent as Layout };
