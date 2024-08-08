import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PageProps = {
  className?: string;
  children?: ReactNode;
};

export function Page(props: PageProps) {
  const { className, children } = props;
  return (
    <main className={cn("flex flex-col container gap-3 xl:gap-6", className)}>
      {children}
    </main>
  );
}
