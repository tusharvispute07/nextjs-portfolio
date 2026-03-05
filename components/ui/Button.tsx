import Link from "next/link";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function Button(
    { href, children }: ButtonProps
) {
    return (
        <Link href={href} className="px-6 py-3 font-medium rounded-4xl transition 
                bg-backgroud text-foreground/70 border border-accent 
                hover:border-2 shadow-accent">
            {children}
        </Link>
    )
}