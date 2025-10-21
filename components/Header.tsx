import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white text-center p-4 text-2xl flex justify-end">
      <Link href="/" className="ml-1  hover:bg-gray-400">
        Pizza Shop
      </Link>
      <Link href="/form" className="ml-1 hover:bg-gray-400">
        Add Pizza
      </Link>
    </header>
  );
}
