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
    <section
      {...props}
      className={cn(
        "flex flex-col gap-3 text-2xl scroll-mt-[calc(3.5rem-1px)] md:scroll-mt-[calc(4rem-1px)]",
        className
      )}
    >
      <div className="mx-auto max-w-screen-xl flex flex-col gap-6 py-12 px-6">
        <h2 className="text-muted-foreground text-3xl font-thin">{title}</h2>
        {children}
      </div>
    </section>
  );
}
