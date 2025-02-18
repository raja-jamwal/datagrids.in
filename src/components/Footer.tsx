import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <Link 
              href="/privacy" 
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="/refunds" 
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} DataGrids. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}