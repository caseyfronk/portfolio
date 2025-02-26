import { CustomLink } from "@/components/custom/custom-link";
import { Section } from "@/components/custom/section";
import { ThemeSelect } from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type NavItem = { label: string; href: string };

const navigation: NavItem[] = [
  { label: "About me", href: "#about-me" },
  { label: "Experience", href: "#experience" },
  { label: "My stack", href: "#my-stack" },
];

export default function Home() {
  return (
    <div>
      <header className="bg-card/80 sticky top-0 z-10 border-b shadow backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-screen-xl items-center gap-3 p-3">
          {navigation.map(({ label, href }, index) => (
            <Button key={index} variant="link" asChild>
              <Link href={href}>{label}</Link>
            </Button>
          ))}
          <span className="flex-1" />
          <ThemeSelect />
        </nav>
      </header>
      <main className="mx-auto flex max-w-screen-xl scroll-p-20 flex-col gap-12 p-3">
        <section className="flex h-[36rem] flex-col items-center justify-center">
          <Card className="flex flex-col gap-12 overflow-hidden p-12 text-center md:flex-row">
            <div className="m-auto flex flex-col items-center gap-3">
              <h2 className="text-5xl font-semibold">Casey Fronk</h2>
              <h3 className="text-muted-foreground text-3xl font-thin">
                Lead Software Engineer
              </h3>
              <div className="flex gap-3">
                <Button size="icon" variant="secondary" asChild>
                  <Link
                    href="https://www.linkedin.com/in/caseyjfronk"
                    target="_blank"
                  >
                    <Linkedin />
                  </Link>
                </Button>
                <Button size="icon" variant="secondary" asChild>
                  <Link href="https://github.com/caseyfronk" target="_blank">
                    <Github />
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="/casey-fronk-portrait.jpeg"
              alt="An outdoor portrait of Casey Fronk."
              width={256}
              height={256}
              objectFit="fill"
              className="aspect-square w-64 rounded-full border-2 shadow-lg"
            />
          </Card>
        </section>

        <Section title="About me" id="about-me">
          Hello! My name is Casey. I&apos;m a full-stack software engineer with
          7 years of experience with React, TypeScript, and Node.js, starting at{" "}
          <CustomLink href="https://devmountain.com" label="Dev Mountain" /> in
          2017. I&apos;ve since built several projects using technologies such
          as Next.js, TailwindCSS, tRPC, PostgreSQL, and SQLite, to name a few.
          <br />
          <br />
          This site has undergone a few versions over the years, originally as a
          React SPA, statically hosted in an S3 bucket with my domain routed to
          it. The current version is a{" "}
          <CustomLink href="https://nextjs.org/" label="Next.js" /> project
          hosted on <CustomLink href="https://vercel.com" label="Vercel" />, the
          UI is built with{" "}
          <CustomLink href="https://ui.shadcn.com" label="shadcn/ui" />, and the
          SQLite database is hosted on{" "}
          <CustomLink href="https://turso.tech" label="Turso" />. The codebase
          is public on{" "}
          <CustomLink
            href="https://github.com/caseyfronk/portfolio"
            label="Github"
          />
          .
          <br />
          <br />
          In my current role, I run a team of three software engineers for
          Wyssling Consulting, a leading engineering firm in the solar industry.
        </Section>

        <Section title="Experience" id="experience">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore
          assumenda officiis necessitatibus veritatis quia saepe numquam
          molestias minima hic, obcaecati cupiditate laboriosam magni rerum aut
          nihil mollitia voluptatibus quidem placeat. Ducimus recusandae ipsa
          eum sed repudiandae consequatur corporis fuga quod dolores quisquam
          maiores veritatis magnam, vel possimus, dolore pariatur!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
          voluptatem rerum fugit non quia deleniti molestias nulla aut maiores
          doloribus.
        </Section>

        <Section title="My stack" id="my-stack">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nihil harum asperiores, nesciunt, dolores rem deserunt repudiandae,
          natus quae laboriosam ullam. Velit magnam sequi accusantium, corporis
          blanditiis dolore omnis fugiat porro sit, rerum eum ea nemo similique
          in adipisci nam! Impedit a esse, molestias est eius dignissimos,
          doloremque labore ad laudantium, accusantium ipsum placeat sequi.
          Alias vitae voluptatum repellendus delectus!
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          asperiores veniam cupiditate ipsam corrupti sunt sequi nemo cumque
          facilis! Praesentium?
        </Section>
      </main>
    </div>
  );
}
