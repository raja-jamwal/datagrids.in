import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-gray-200 dark:border-neutral-800">
      <Link href="/" className="text-2xl font-semibold hover:text-blue-600 transition-colors">
        DataGrids
      </Link>
    </header>
  );
} 