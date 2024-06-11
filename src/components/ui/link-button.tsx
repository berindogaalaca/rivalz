import Link from "next/link";

type Props = {
  className?: string;
  linkText?: string;
  href?: string;
};

export default function LinkButton({ className, linkText, href = "#" }: Props) {
  return (
    <Link className={className} href={href}>
      {linkText}
    </Link>
  );
}
