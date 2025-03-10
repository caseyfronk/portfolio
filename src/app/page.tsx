import { CustomLink } from "@/components/custom/custom-link";
import { Experience } from "@/components/custom/experience";
import { Section } from "@/components/custom/section";
import { TechCard } from "@/components/custom/tech-card";
import { HeroSection } from "@/components/hero-section";
import { ThemeSelect } from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavItem = { label: string; href: string };

const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "My stack", href: "#my-stack" },
];

export default function Home() {
  return (
    <div className="">
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
        <HeroSection />

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
            In my current role, I lead a team of three developers for Wyssling
            Consulting, an engineering firm in the solar industry. We&apos;ve
            built a ground-up CRM for managing solar projects for over 300
            clients. Throughout the development of this project, I have
            demonstrated confident leadership skills by coordinating
            cross-functional teams, setting clear objectives, and ensuring
            timely deliverables. Additionally, I have showcased adaptability by
            quickly integrating client feedback, pivoting strategies based on
            new insights, and implementing emerging technologies to enhance
            project outcomes. I have designed a custom authentication system
            using JSON web tokens, a photo/file upload system that has processed
            over 2 million uploads, and everything in between.
            <br />
            <br />
            Previously I worked as a software engineer for a breathalyzer
            company, SkyFine USA. We built a web and mobile platform using React
            and React Native. The mobile app was used by technicians to
            configure Bluetooth-enabled Ignition Interlock Devices (IID), and
            end-users to manage their accounts and process payments.
            <br />
            <br />
            Before that, I was a network administrator at Younique. I played a
            key role in managing the company&apos;s network infrastructure,
            ensuring seamless connectivity and system performance for over 700
            employees. My experience at Younique allowed me to develop strong
            problem-solving skills and a deep understanding of enterprise IT
            support and infrastructure management.
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
            I utilize TypeScript, advanced types, generics, and modern ES6+
            features to make full-stack applications with end to end type
            safety. TypeScript allows you to define what is and is not allowed
            up front. This eliminates an entire class of bugs, allowing you to
            focus on shipping products.
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
            name="Amazon Web Services"
            imagePath="/aws-logo.png"
            alt="The AWS logo."
          >
            I have deployed multiple products leveraging AWS services, including
            Elastic Beanstalk, S3, RDS, Lambda, and CodePipeline. AWS enables
            scalable infrastructure that dynamically adjusts to spikes in usage
            while maintaining cost efficiency. By utilizing these services, I
            can ensure high availability and performance without the overhead of
            managing physical hardware.
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
