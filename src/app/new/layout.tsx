import { ThemeSelect } from "@/components/misc/ThemeSelect";
import { cn } from "@/lib/utils";
import { Cog, FolderOpen, LucideProps, Plus, Users } from "lucide-react";
import Link from "next/link";
import { ComponentType, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function NewLayout({ children }: Props) {
  return (
    <div className="">
      <header className="h-14 flex items-center bg-secondary/80 backdrop-blur top-0 sticky shadow z-50 scroll-p-14">
        <nav className="container gap-2 p-2 flex items-center">
          <ThemeSelect />
        </nav>
      </header>
      <div className="flex container">
        <aside className="hidden md:flex flex-col min-h-full gap-2 pr-0 w-48 h-svh border-r sticky top-14 divide-y divide-border">
          <Category title="Projects">
            <FancyLink
              label="New Project"
              href="/studio/settings"
              Icon={Plus}
            />
            <FancyLink
              label="My Projects"
              href="/studio/settings"
              Icon={FolderOpen}
              badge={18}
            />
          </Category>
          <Category title="Settings">
            <FancyLink label="Equipment" href="/studio/settings" Icon={Cog} />
            <FancyLink
              label="Team"
              href="/studio/team"
              Icon={Users}
              selected
              badge={7}
            />
          </Category>
        </aside>
        {children}
      </div>
    </div>
  );
}

type CategoryProps = {
  title: string;
  children: ReactNode;
};

function Category({ title, children }: CategoryProps) {
  return (
    <div className="flex flex-col gap-2 w-48 pb-4 pl-2">
      <p className="text-muted-foreground p-2">{title}</p>
      {children}
    </div>
  );
}

type FancyLinkProps = {
  label: string;
  href: string;
  Icon: ComponentType<LucideProps>;
  selected?: boolean;
  badge?: string | number;
};

function FancyLink(props: FancyLinkProps) {
  const { label, href, Icon, selected, badge } = props;
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-muted-foreground hover:bg-secondary hover:text-primary-foreground rounded-l-full flex gap-2 p-2 items-center h-8",
        selected &&
          "bg-primary/20 hover:bg-primary/20 text-primary-foreground hover:text-primary-foreground"
      )}
    >
      <Icon className="size-4 shrink-0" />
      <span className="flex-1 truncate text-sm">{label}</span>
      {!!badge && (
        <div
          className={cn(
            "rounded-full text-xs px-2 bg-background"
            // selected && "text-primary bg-background"
          )}
        >
          {badge}
        </div>
      )}
    </Link>
  );
}
