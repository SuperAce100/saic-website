import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <h1 className="text-lg text-white font-mono tracking-[1.5em] uppercase text-center">
            Stanford AI Club
          </h1>
        </Link>
      </div>
    </nav>
  );
}
