import { ReactNode } from "react";
import { Card } from "../ui/card";

export type ExperienceCardProps = {
  title: string;
  company: string;
  yearStart: string;
  yearEnd: string;
  children: ReactNode;
};

export function ExperienceCard({
  title,
  company,
  yearStart,
  yearEnd,
  children,
}: ExperienceCardProps) {
  return (
    <Card className="p-4 md:p-6 gap-2 md:gap-3">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">{title}</h3>
      <h4 className="text-lg md:text-xl lg:text-2xl">
        {company} • {yearStart} – {yearEnd}
      </h4>
      <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg font-light">
        {children}
      </ul>
    </Card>
  );
}
