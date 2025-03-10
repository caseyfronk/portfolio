"use client";

import Image from "next/image";
import React, { ComponentType, HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin, LucideProps, Mail } from "lucide-react";
import { Section } from "./custom/section";
import { Card } from "./ui/card";

export function HeroSection() {
  return (
    <Section className="flex md:h-[36rem] flex-col justify-center md:items-center">
      <Card className="flex flex-col gap-12 overflow-hidden p-12 text-center md:flex-row justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-5xl font-semibold">Casey Fronk</h2>
          <h3 className="text-muted-foreground text-3xl font-thin">
            Senior Software Engineer
          </h3>
          <h4 className="text-muted-foreground text-xl font-thin">
            Salt Lake City, Utah
          </h4>
          <div className="flex gap-3 flex-wrap">
            {links.map((link) => (
              <TooltipProvider key={link.href}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button size="icon" asChild>
                      <Link href={link.href} target={link.target}>
                        <link.Icon />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p className="text-lg">{link.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <Image
          src="/casey-fronk-portrait.jpeg"
          alt="An outdoor portrait of Casey Fronk."
          width={800}
          height={800}
          className="aspect-square w-64 rounded-full border-2 shadow-lg"
        />
      </Card>
    </Section>
  );
}

type LinkItem = {
  tooltip: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  Icon: ComponentType<LucideProps>;
};

const links: LinkItem[] = [
  {
    tooltip: "LinkedIn",
    href: "https://www.linkedin.com/in/caseyjfronk",
    target: "_blank",
    Icon: Linkedin,
  },
  {
    tooltip: "Github",
    href: "https://github.com/caseyfronk",
    target: "_blank",
    Icon: Github,
  },
  {
    tooltip: "Send me an email",
    href: "mailto:caseyjfronk@gmail.com",
    Icon: Mail,
  },
];
