import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  title: string;
};

export function Section({
  title,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section {...props} className={cn("flex flex-col gap-3", className)}>
      <h2 className="text-muted-foreground text-3xl font-thin">{title}</h2>
      <p className="text-2xl">{children}</p>
    </section>
  );
}
