import { WorkHistory } from "@/components/home/WorkHistory";
import { ThemeSelect } from "@/components/misc/ThemeSelect";
import { Page } from "@/components/nav/Page";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, LucideProps } from "lucide-react";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { ComponentType } from "react";

// const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
//   ssr: false,
// });

export default function Homepage() {
  return (
    <Page className="flex flex-col 2 p-3 sm:p-12 lg:p-24 scroll-p-36 gap-12 xl:gap-24">
      {/* <div className="relative">
        <ThreeScene />
      </div> */}
      <div className="flex flex-col lg:flex-row pt-12 gap-6 xl:gap-12">
        <div className="text-center lg:text-left flex-[2] flex flex-col">
          <h1 className="text-4xl xl:text-5xl font-bold tracking-tight">
            Casey Fronk
          </h1>
          <h2 className="text-2xl xl:text-3xl mt-2 font-medium tracking-tight">
            Senior Software Engineer
          </h2>
          <p className="leading-none mt-4 text-muted-foreground text-lg xl:text-2xl">
            I build reliable, scalable, and
            <br />
            intuitive web experiences.
          </p>

          <div className="flex flex-wrap gap-2 mt-6 lg:max-w-xs justify-center lg:justify-start">
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
        <div className="flex-[3] text-xl">
          <p className="leading-relaxed text-muted-foreground text-lg">
            Back in 2009, I started tinkering with{" "}
            <InlineLink label="Lua" href="https://www.lua.org" /> scripting in{" "}
            <InlineLink
              label="Garry's Mod"
              href="https://store.steampowered.com/app/4000/Garrys_Mod"
            />
            . Little did I know, this was my gateway into the marvelous,
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
              label="renowned Neuropsychologist"
              href="https://samgoldstein.com"
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

      <nav className="bg-secondary/50 rounded-md sticky top-6 self-center shadow-md backdrop-blur items-center p-2 gap-2 flex">
        <Button asChild>
          <Link href="#experience">Experience</Link>
        </Button>
        <Button asChild>
          <Link href="#accomplishments">Accomplishments</Link>
        </Button>
        <Button>Demos</Button>
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
            "Revenue increased through better tracking and visibility of services rendered, data integrity, and employee productivity.",
            "Downtime has been eliminated through strict type-safety and rigorous testing.",
            "Implemented a tRPC API for querying and mutating data. Token-based authentication and role-based authorization ensures that each request is valid.",
            "Configured a PostgreSQL database on AWS. All table definitions and migrations managed using Drizzle - recently converted from Prisma.",
            "Configured a CI/CD system using AWS Code Pipeline, automated Github integration. Set up a development environment for testing the stability of new features before pushing to production.",
            "Frontend built using React with Vite, shadcn/ui, and Tailwind CSS. Consistent, responsive, and customizable theming with light and dark modes.",
            "Interviewing, onboarding, and training new software engineers. Conducting code reviews and teaching scalable, maintainable software practices.",
          ]}
        />
        <WorkHistory
          employer="Skyline USA"
          jobTitle="Software Engineer"
          period="2020 - 2021"
          items={[
            "Built a React, Kotlin, and PostgreSQL application used internally to manage clients and ingest GPS and photo data from cellular-connected Ignition Interlock Devices (IID).",
            "Implemented an intricate build script for injecting the React application into the existing PHP system that we were replacing.",
            "Designed a React Native mobile app used by technicians across the country to install and configure Ignition Interlock Devices (IID).",
          ]}
        />
        <WorkHistory
          employer="Neurology Learning & Behavior Center"
          jobTitle="Software Engineer & IT Administrator"
          period="2018 - 2020"
          items={[
            "Managed internal network, SMTP email system, and computer hardware/software issues.",
          ]}
        />
        <WorkHistory
          employer="Younique Products"
          jobTitle="IT Administrator"
          period="2014 - 2018"
          items={[
            "Onboarding new employees, provisioning user accounts.",
            "IT department budgeting, purchasing, and configuring new hardware.",
            "Implemented a single-sign-on solution that simplified internal access to third-party tools.",
            "Managed internal network, configured per-department VLANs, implemented and monitored anti-virus.",
            " Configured a failover solution between primary and backup internet connections to reduce downtime.",
            "IT help-desk support and troubleshooting for over 700 employees.",
          ]}
        />
        <WorkHistory
          employer="Office Max"
          jobTitle="Cashier, Sales & Computer Repair"
          period="2011 - 2014"
          items={[
            "Troubleshooting and repairing customer computers.",
            "Providing exceptional customer service.",
            "Sales, attaching services and exceeding customer-retention program expectations.",
          ]}
        />
      </section>
      <section id="accomplishments" className="flex flex-col gap-3">
        <h1 className="text-3xl text-muted-foreground">Accomplishments</h1>
        <p>WIP</p>
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
