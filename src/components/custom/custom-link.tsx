import Link from "next/link";

export type CustomLinkProps = {
  label: string;
  href: string;
};

export function CustomLink({ label, href }: CustomLinkProps) {
  return (
    <Link href={href} target="_blank" className="text-primary hover:underline">
      {label}
    </Link>
  );
}
