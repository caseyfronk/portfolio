import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  title?: string;
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
        "flex flex-col gap-4 text-base md:text-lg lg:text-xl scroll-mt-[calc(3.5rem-1px)] md:scroll-mt-[calc(4rem-1px)]",
        className
      )}
    >
      <div className="mx-auto max-w-screen-xl flex flex-col gap-3 p-3 md:gap-6 md:p-6 w-full">
        {title && (
          <h2 className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-thin">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
