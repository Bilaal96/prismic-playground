import Link from 'next/link';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between w-container">
      <Link
        href="/"
        className="bg-slate-300 p-4 font-black hover:bg-slate-200 rounded-full"
      >
        LOGO
      </Link>

      <nav className="flex gap-2">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
