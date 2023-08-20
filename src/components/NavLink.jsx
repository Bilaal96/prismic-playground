import Link from 'next/link';

export default function NavLink({ width, children, ...otherProps }) {
  return (
    <Link
      className={`font-bold border p-4 rounded-md bg-slate-800 text-slate-100 hover:bg-slate-700 ${width}`}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
