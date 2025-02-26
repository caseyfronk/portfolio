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
    <Card className="p-3 gap-3">
      <h3 className="font-thin">
        {title} • {company} • {yearStart}–{yearEnd}
      </h3>
      <ul className="list-disc pl-6 text-xl">{children}</ul>
    </Card>
  );
}
