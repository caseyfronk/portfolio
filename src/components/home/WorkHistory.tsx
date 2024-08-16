import { Card } from "../ui/card";

type WorkHistoryProps = {
  employer: string;
  jobTitle: string;
  period: string;
  items: string[];
};

export function WorkHistory(props: WorkHistoryProps) {
  const { employer, jobTitle, period, items } = props;

  return (
    <Card className="p-6">
      <h2 className="text-2xl">{jobTitle}</h2>
      <h2 className="text-xl">
        {employer} · {period}
      </h2>
      <ul className="list-disc ml-3 text-muted-foreground">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}
