import Image from "next/image";
import { Card } from "../ui/card";

type TechCardProps = {
  name: string;
  imagePath: string;
  alt: string;
};

export function TechCard({ name, imagePath, alt }: TechCardProps) {
  return (
    <Card className="p-4 md:p-6 gap-2 md:gap-3 w-full">
      <div className="gap-2 md:gap-3 flex items-center">
        <Image
          width={128}
          height={128}
          src={imagePath}
          alt={alt}
          className="size-12 p-0.5 bg-neutral-200/80 rounded-xl"
        />
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {name}
        </h3>
      </div>
      <p>Lorem ipsum dolor sit a</p>
    </Card>
  );
}
