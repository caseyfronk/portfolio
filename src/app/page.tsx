import { ThemeSelect } from "@/components/misc/ThemeSelect";
import { Page } from "@/components/nav/Page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, LucideProps } from "lucide-react";
import Link from "next/link";
import { ComponentType } from "react";

export default function Homepage() {
  return (
    <Page className="flex flex-col 2 p-3 sm:p-12 lg:p-24 scroll-p-36 gap-12 xl:gap-24">
      <div className="flex flex-col lg:flex-row pt-12 gap-6 xl:gap-12">
        <div className="text-center lg:text-left flex-[2] flex flex-col">
          <div className="self-center">
            <h1 className="text-5xl font-bold tracking-tight">Casey Fronk</h1>
            <h2 className="text-3xl mt-2 tracking-tight font-medium">
              Software Developer
            </h2>
            <p className="leading-none mt-4 text-muted-foreground text-2xl">
              I build reliable, scalable, and
              <br />
              intuitive web experiences.
            </p>

            <div className="flex flex-wrap gap-2 mt-6 lg:max-w-xs justify-center lg:justify-start">
              {/* <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Next.js</Badge>
              <Badge>Express</Badge>
              <Badge>tRPC</Badge>
              <Badge>Material UI</Badge>
              <Badge>Drizzle</Badge>
              <Badge>Prisma</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>SQLite</Badge>
              <Badge>AWS</Badge>
              <Badge>Vercel</Badge> */}
              {linkItems.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  size="icon"
                  variant="secondary"
                  tooltip={link.label}
                >
                  <Link href={link.href} target="_blank">
                    <link.Icon />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[3] text-xl">
          <p className="leading-relaxed text-muted-foreground text-lg">
            Back in 2009, I started tinkering with{" "}
            <InlineLink label="Lua" href="https://www.lua.org" /> scripting in{" "}
            <InlineLink
              label="Garry's Mod"
              href="https://store.steampowered.com/app/4000/Garrys_Mod"
            />
            . Little did I know, this was my gateway into the magnificent and
            bottomless void of computer science.
            <br />
            <br />
            This led into day-trading — but not for the money. In 2015, I
            learned{" "}
            <InlineLink
              label="JavaScript"
              href="https://www.javascript.com"
            />{" "}
            to build a tool that evaluated historical market data, identified
            trends, and automatically placed buy/sell orders under various
            conditions. There is a reason I am a software engineer and not a
            financial analyst.
            <br />
            <br />
            Jump to today, and I have had the privilege of building solutions
            for a{" "}
            <InlineLink
              label="cosmetics company"
              href="https://www.youniqueproducts.com"
            />
            , a{" "}
            <InlineLink
              label="breathalyzer manufacturer"
              href="https://www.skyfineusa.com"
            />
            , and a{" "}
            <InlineLink
              label="solar engineering firm"
              href="https://www.wysslingconsulting.com"
            />
            .
          </p>
        </div>
      </div>

      <nav className="bg-secondary/50 rounded-full sticky top-6 self-center shadow-md backdrop-blur items-center p-2 gap-2 flex">
        <Button className="rounded-full" asChild>
          <Link href="#experience">Experience</Link>
        </Button>
        <Button className="rounded-full" asChild>
          <Link href="#skills">Skills</Link>
        </Button>
        <Button className="rounded-full" asChild>
          <Link href="#links">Links</Link>
        </Button>
        <Button className="rounded-full">Demos</Button>
        <ThemeSelect />
      </nav>

      <section id="experience" className="flex flex-col gap-3">
        <h1 className="text-3xl text-muted-foreground">Experience</h1>
        <WorkHistory
          employer="Wyssling Consulting"
          jobTitle="Senior Software Engineer"
          period="2021 - Present"
          items={[
            "Leading the development of a custom CRM system in the solar industry that has modernized workflows, increased productivity, and reduced errors.",
            "Built out a tRPC API for querying and mutating data. Token-based authentication ensures that each request is authorized.",
            "Configured a PostgreSQL database on AWS. All table definitions and migrations managed using Drizzle - recently converted from Prisma.",
            "Frontend built using React, shadcn/ui component and Tailwind CSS. Customizable theme with consistent UI look/feel, and light/dark modes.",
            "Interviewing and training two engineers, conducting code reviews, and teaching scalable, maintainable software practices.",
          ]}
        />
        <WorkHistory
          employer="Skyline USA"
          jobTitle="Software Engineer"
          period="2020 - 2021"
          items={[
            "Built and implemented a React Native mobile app for iOS and Android.",
            "Migrated an existing PHP system to React and React Native.",
          ]}
        />
        <WorkHistory
          employer="Neurology & Behavior Center"
          jobTitle="Software Engineer"
          period="2017 - 2020"
          items={[
            "Leading the development of a custom CRM",
            "Interviewing new developers",
            "Things",
          ]}
        />
        <WorkHistory
          employer="Younique Products"
          jobTitle="IT Administrator"
          period="2014 - 2018"
          items={[
            "Onboarding and provisioning new employees.",
            "Network administration",
            "Help-desk support for over 700 employees.",
          ]}
        />
        <WorkHistory
          employer="Office Max"
          jobTitle="Cashier, Sales & Computer Repair"
          period="2011 - 2014"
          items={[
            "Troubleshooting and repairing customer computers.",
            "Providing exceptional customer service.",
            "Selling devices, attaching services and exceeding customer-retention program expectations.",
          ]}
        />
      </section>
      <section id="skills" className="flex gap-3 flex-wrap">
        <h1 className="text-3xl text-muted-foreground">Skills</h1>

        <Badge>TypeScript</Badge>
        <Badge>TypeScript</Badge>
        <Badge>TypeScript</Badge>
        <Badge>TypeScript</Badge>
        <Badge>TypeScript</Badge>
        <Badge>TypeScript</Badge>
      </section>
      <section id="links" className="flex flex-col gap-3">
        <h1 className="text-3xl text-muted-foreground">Links</h1>
        <div className="flex flex-wrap gap-3">
          {linkItems.map((link, index) => (
            <Button
              key={index}
              asChild
              // size="lg"
              // variant="primary"
              tooltip={link.label}
            >
              <Link href={link.href} target="_blank">
                {link.label}
                <link.Icon className="ml-4" />
              </Link>
            </Button>
          ))}
        </div>
      </section>
    </Page>
  );
}

type InlineLinkProps = {
  label: string;
  href: string;
};

function InlineLink({ label, href }: InlineLinkProps) {
  return (
    <Link className="text-primary hover:underline" href={href} target="_blank">
      {label}
    </Link>
  );
}

type Item = {
  label: string;
  href: string;
  Icon: ComponentType<LucideProps>;
};

const linkItems: Item[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/caseyjfronk",
    Icon: Linkedin,
  },
  {
    label: "Github",
    href: "https://github.com/caseyfronk",
    Icon: Github,
  },
  {
    label: "Download resumé",
    href: "/casey-fronk-resume.pdf",
    Icon: Download,
  },
];

type WorkHistoryProps = {
  employer: string;
  jobTitle: string;
  period: string;
  items: string[];
};

function WorkHistory(props: WorkHistoryProps) {
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
