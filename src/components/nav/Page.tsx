import { cn } from "@/lib/utils";
import { ReactNode, FC } from "react";

type PageProps = {
  className?: string;
  children?: ReactNode;
};

const Page: FC<PageProps> & { Section: FC<PageSectionProps> } = ({
  className,
  children,
}) => {
  return (
    <main
      className={cn(
        "flex flex-col container gap-2 xl:gap-4 min-h-full",
        className
      )}
    >
      {children}
    </main>
  );
};

type PageSectionProps = {
  className?: string;
  children?: ReactNode;
};

const Section: FC<PageSectionProps> = ({ className, children }) => {
  return (
    <div className={cn("p-2 xl:p-4 flex flex-col", className)}>{children}</div>
  );
};

Page.Section = Section;

export { Page };
