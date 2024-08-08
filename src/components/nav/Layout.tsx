import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type LayoutProps = {
  className?: string;
  children?: ReactNode;
};

export function Layout(props: LayoutProps) {
  const { className, children } = props;
  return <div className={cn("", className)}>{children}</div>;
}

type LayoutHeaderProps = {
  className?: string;
  children?: ReactNode;
};

export function LayoutHeader(props: LayoutHeaderProps) {
  const { className, children } = props;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex items-center border-b bg-background shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <nav className="container flex p-3 xl:p-6 gap-3 xl:gap-6">{children}</nav>
    </header>
  );
}
