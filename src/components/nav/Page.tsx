import { cn } from "@/lib/utils";
import { ReactNode, FC } from "react";

type PageProps = {
  divide?: boolean;
  className?: string;
  children?: ReactNode;
};

type PageSectionProps = {
  className?: string;
  children?: ReactNode;
};
function Page(props: PageProps): JSX.Element {
  const { divide, className, children } = props;
  return (
    <main
      className={cn(
        "flex flex-col container gap-2 xl:gap-4 min-h-full",
        divide && "divide-y divide-border",
        className
      )}
    >
      {children}
    </main>
  );
}

// Define the Section function
function Section(props: PageSectionProps): JSX.Element {
  const { className, children } = props;
  return (
    <div className={cn("p-2 xl:p-4 flex flex-col", className)}>{children}</div>
  );
}

// Assign Section as a property of Page
Page.Section = Section as FC<PageSectionProps>;

// Ensure the Page component itself has the correct type
const PageComponent: FC<PageProps> & { Section: FC<PageSectionProps> } =
  Page as FC<PageProps> & { Section: FC<PageSectionProps> };

export { PageComponent as Page };
