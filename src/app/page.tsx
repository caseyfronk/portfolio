import { CustomLink } from "@/components/custom/custom-link";
import { Experience } from "@/components/custom/experience";
import { Section } from "@/components/custom/section";
import { ThemeSelect } from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type NavItem = { label: string; href: string };

const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "My stack", href: "#my-stack" },
];

export default function Home() {
  return (
    <div>
      <header className="bg-card/80 sticky top-0 z-10 border-b shadow backdrop-blur-sm">
        <nav className="mx-auto flex h-14 md:h-16 max-w-screen-xl items-center gap-2 md:gap-3 p-2 md:p-3">
          {navigation.map(({ label, href }, index) => (
            <Button key={index} variant="link" asChild>
              <Link href={href}>{label}</Link>
            </Button>
          ))}
          <span className="flex-1" />
          <ThemeSelect />
        </nav>
      </header>
      <main className="flex flex-col">
        <section className="flex md:h-[36rem] flex-col justify-center md:items-center p-6">
          <Card className="flex flex-col gap-12 overflow-hidden p-12 text-center md:flex-row justify-center items-center">
            <div className="m-auto flex flex-col items-center gap-3">
              <h2 className="text-5xl font-semibold">Casey Fronk</h2>
              <h3 className="text-muted-foreground text-3xl font-thin">
                Lead Software Engineer
              </h3>
              <div className="flex gap-3 flex-wrap">
                <Button size="icon" variant="default" asChild>
                  <Link
                    href="https://www.linkedin.com/in/caseyjfronk"
                    target="_blank"
                  >
                    <Linkedin />
                  </Link>
                </Button>
                <Button size="icon" variant="default" asChild>
                  <Link href="https://github.com/caseyfronk" target="_blank">
                    <Github />
                  </Link>
                </Button>
                <Button size="icon" variant="default" asChild>
                  <Link href="mailto:caseyjfronk@gmail.com">
                    <Mail />
                  </Link>
                </Button>
                <Button size="icon" variant="default" asChild>
                  <Link href="/casey-fronk-resume.pdf">
                    <Download />
                  </Link>
                </Button>
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
        </section>

        <Section title="About me" id="about" className="bg-primary/5">
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
            Consulting, an engineering firm in the solar industry.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos sit omnis reiciendis obcaecati maxime, quidem vero
            libero at facilis corrupti earum voluptatum est cupiditate doloribus
            natus corporis iusto voluptatibus quibusdam enim suscipit laudantium
            reprehenderit! Exercitationem eius dolorum quam quas officiis
            corporis non ratione, tempore labore totam quod officia voluptatum
            aliquid numquam repudiandae quia! Laudantium obcaecati eaque nisi
            quibusdam recusandae ratione?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam,
            nihil laboriosam voluptatum autem maxime fuga dolore labore
            cupiditate laborum enim quam quia est. Odio fugiat error illum
            perferendis rerum laudantium, doloremque dignissimos ex facere
            aspernatur alias cupiditate! Impedit soluta est adipisci aperiam
            distinctio velit sint ipsam non eveniet dolor!
          </p>
        </Section>

        <Section title="Experience" id="experience">
          <Experience />
        </Section>

        <Section title="My stack" id="my-stack" className="bg-primary/5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nihil harum asperiores, nesciunt, dolores rem deserunt repudiandae,
            natus quae laboriosam ullam. Velit magnam sequi accusantium,
            corporis blanditiis dolore omnis fugiat porro sit, rerum eum ea nemo
            similique in adipisci nam! Impedit a esse, molestias est eius
            dignissimos, doloremque labore ad laudantium, accusantium ipsum
            placeat sequi. Alias vitae voluptatum repellendus delectus!
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, asperiores veniam cupiditate ipsam corrupti sunt sequi
            nemo cumque facilis! Praesentium?
          </p>
        </Section>
      </main>
    </div>
  );
}
