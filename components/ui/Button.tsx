import Link from "next/link";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function Button(
    { href, children }: ButtonProps
) {
    return (
        <Link href={href} className="
  px-6 py-3 font-medium rounded-4xl transition
  border border-accent
  bg-accent text-white
  
  hover:bg-foreground hover:text-background   /* Light mode hover */

  dark:bg-background dark:text-foreground
  dark:hover:bg-accent dark:hover:text-black  /* Dark mode hover */
">
            {children}
        </Link>
    )
}