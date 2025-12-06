import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header
            className="sticky top-4 z-50 
            mx-4 
            h-16 
            bg-gray-900
            shadow-md 
            rounded-full 
            flex items-center justify-between
            px-6 md:px-12"
        >
            <nav className="flex w-full items-center ">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo-white.svg"
                        alt="Luxonis Logo"
                        width={120}
                        height={32}
                        className="object-contain"
                    />
                </Link>
            </nav>
        </header>
    );
}
