import { cn } from "@/lib/utils";
import { ReactNode, FC } from "react";

type LayoutProps = {
  className?: string;
  children?: ReactNode;
};

const Layout: FC<LayoutProps> & {
  Header: FC<LayoutHeaderProps>;
  Footer: FC<LayoutFooterProps>;
} = ({ className, children }) => {
  return <div className={cn("", className)}>{children}</div>;
};

type LayoutHeaderProps = {
  className?: string;
  children?: ReactNode;
};

const Header: FC<LayoutHeaderProps> = ({ className, children }) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex items-center border-b bg-background shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <nav className="container flex p-2 xl:p-4 gap-2 xl:gap-4 items-center">
        {children}
      </nav>
    </header>
  );
};

type LayoutFooterProps = {
  className?: string;
  children?: ReactNode;
};

const Footer: FC<LayoutFooterProps> = ({ className, children }) => {
  return (
    <footer
      className={cn(
        "border-t p-2 xl:p-2 gap-2 xl:gap-4 flex container justify-center items-center",
        className
      )}
    >
      {children}
    </footer>
  );
};

// Assign Header and Footer as properties of Layout
Layout.Header = Header;
Layout.Footer = Footer;

export { Layout };
