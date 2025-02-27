import { CustomLink } from "@/components/custom/custom-link";
import { Experience } from "@/components/custom/experience";
import { Section } from "@/components/custom/section";
import { TechCard } from "@/components/custom/tech-card";
import { ThemeSelect } from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download, Github, Linkedin, LucideProps, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentType, HTMLAttributeAnchorTarget } from "react";

type NavItem = { label: string; href: string };

const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "My stack", href: "#my-stack" },
];

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
  {
    tooltip: "Download resumé",
    href: "/casey-fronk-resume.pdf",
    target: "_blank",
    Icon: Download,
  },
];

export default function Home() {
  return (
    <div>
      <header className="bg-card/80 sticky top-0 z-10 border-b shadow-sm backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-screen-xl items-center gap-3 p-3 md:gap-6 md:p-6">
          {navigation.map(({ label, href }, index) => (
            <Button key={index} variant="secondary" size="sm" asChild>
              <Link href={href}>{label}</Link>
            </Button>
          ))}
          <span className="flex-1" />
          <ThemeSelect />
        </nav>
      </header>
      <main className="flex flex-col">
        <Section className="flex md:h-[36rem] flex-col justify-center md:items-center">
          <Card className="flex flex-col gap-12 overflow-hidden p-12 text-center md:flex-row justify-center items-center">
            <div className="m-auto flex flex-col items-center gap-3">
              <h2 className="text-5xl font-semibold">Casey Fronk</h2>
              <h3 className="text-muted-foreground text-3xl font-thin">
                Lead Software Engineer
              </h3>
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

        <Section title="About me" id="about">
          <p>
            I am a full-stack software engineer with 7 years of experience
            building React, TypeScript, and Node.js applications. I started my
            journey at{" "}
            <CustomLink href="https://devmountain.com" label="Dev Mountain" />{" "}
            in 2017, and I have since built several projects with Next.js,
            TailwindCSS, tRPC, PostgreSQL, and SQLite, to name a few.
            <br />
            <br />
            This site has undergone a few changes over the years, originally as
            a React SPA, statically hosted in an S3 bucket with my domain routed
            to it. The current version is a{" "}
            <CustomLink href="https://nextjs.org/" label="Next.js" /> project
            hosted on <CustomLink href="https://vercel.com" label="Vercel" />,
            the UI is built with{" "}
            <CustomLink href="https://ui.shadcn.com" label="shadcn/ui" />, and
            the SQLite database is hosted on{" "}
            <CustomLink href="https://turso.tech" label="Turso" />. The codebase
            is public on{" "}
            <CustomLink
              href="https://github.com/caseyfronk/portfolio"
              label="Github"
            />
            .
            <br />
            <br />
            In my current role, I lead a team of three developers for Wyssling
            Consulting, an engineering firm in the solar industry. We&apos;ve
            built a ground-up CRM for managing solar projects for over 300
            clients. This project has <strong>by far</strong> been the largest
            thing I have ever started, finished, and maintained—and it will
            forever hold a special place in my heart. I&apos;ve designed a
            custom authentication system using JSON web tokens, a photo/file
            upload system that has processed over 2 million uploads (3+
            terabytes), and everything in between.
            <br />
            <br />
            Previously I worked as a software engineer for a breathalyzer
            company, SkyFineUSA. We built a web and mobile platform using React
            and React Native. The mobile app was used by technicians to install
            Bluetooth-enabled Ignition Interlock Devices (IID), and end-users to
            manage their accounts and process payments.
            <br />
            <br />
            Before that, I was a network administrator at Younique. I played a
            key role in managing the company&apos;s network infrastructure,
            ensuring seamless connectivity and system performance for over 700
            employees. I was responsible for onboarding new employees, setting
            up their accounts, and ensuring they had the necessary technical
            resources to be productive from day one. Additionally, I provided
            hands-on support by resolving technical issues related to printers,
            computers, and other IT equipment, ensuring minimal downtime and
            maintaining smooth daily operations. My experience at Younique
            allowed me to develop strong problem-solving skills and a deep
            understanding of enterprise IT support and infrastructure
            management.
          </p>
        </Section>

        <Section title="Experience" id="experience">
          <Experience />
        </Section>

        <Section title="My stack" id="my-stack">
          <TechCard
            name="TypeScript"
            imagePath="/ts-logo.png"
            alt="The TypeScript logo."
          >
            I utilize TypeScript to make full-stack applications with end to end
            type safety. TypeScript allows you to define what is and is not
            allowed up front. This eliminates an entire class of bugs, allowing
            you to focus on shipping products.
          </TechCard>
          <TechCard
            name="React"
            imagePath="/react-logo.png"
            alt="The React.js logo."
          >
            React is a great tool for building elegant and intuitive interfaces
            using Vite and Next.js. I build custom hooks and context providers
            to reuse logic and define predictable behavior.
          </TechCard>
          <TechCard
            name="Tailwind CSS"
            imagePath="/tailwind-logo.png"
            alt="The Tailwind CSS logo."
          >
            I use Tailwind CSS to craft stunning and responsive interfaces with
            utility-first classes that enable rapid development, consistent
            styling, and seamless adaptability across devices, all while keeping
            my codebase clean and maintainable.
          </TechCard>
          <TechCard
            name="Node.js"
            imagePath="/node-logo.webp"
            alt="The Node.js logo."
          >
            Node.js is a great choice for building scalable and
            highly-performant APIs with TypeScript, leveraging its non-blocking
            event-driven architecture to handle concurrent requests efficiently.
          </TechCard>
          <TechCard
            name="Express.js"
            imagePath="/express-logo.png"
            alt="The Express.js logo."
          >
            A staple in the Node ecosystem for building REST APIs with a
            flexible routing system, middleware support, and seamless
            integration with databases and authentication.
          </TechCard>
          <TechCard
            name="Next.js"
            imagePath="/nextjs-logo.png"
            alt="The Next.js logo."
          >
            My go-to for building serverless applications. Next.js is an
            opinionated framework for building full-stack React apps with
            server-side rendering, static site generations, and a simple
            file-based routing system. Next.js applications can be deployed
            seamlessly on Vercel in minutes, allowing you to focus on your
            product.
          </TechCard>
          <TechCard
            name="PostgreSQL"
            imagePath="/postgres-logo.png"
            alt="The Postgres logo."
          >
            I use PostgreSQL as a robust and scalable relational database,
            leveraging its powerful querying capabilities, ACID compliance, and
            support for advanced features like JSONB, indexing, and transactions
            to ensure data integrity and performance in my applications.
          </TechCard>
          <TechCard
            name="Drizzle ORM"
            imagePath="/drizzle-logo.png"
            alt="The Drizzle ORM logo."
          >
            I use Drizzle ORM to interact with my PostgreSQL database in a
            type-safe and efficient manner, leveraging its lightweight,
            SQL-first approach with prepared statements, schema inference, and
            seamless TypeScript integration for a reliable and maintainable data
            layer.
          </TechCard>
          <TechCard
            name="Rust"
            imagePath="/rust-logo.png"
            alt="The Rust Programming Language logo."
          >
            I started learning Rust in 2023 to branch out from being a
            TypeScript-only developer, and have since created a few games using
            Bevy, and web servers using Axum and Actix. Rust has a powerful type
            system and ownership model that allows you to build
            highly-performant and memory-safe applications. Rust is being
            adopted in many industries, and I plan to continue learning.
          </TechCard>
        </Section>
      </main>
    </div>
  );
}
