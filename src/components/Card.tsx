interface CardProps {
  href: string;
  title: string;
  description: string;
  external?: boolean;
  status?: 'new' | 'discontinued' | 'active';
}

export default function Card({ href, title, description, external = false, status }: CardProps) {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'discontinued':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'active':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <h2 className="mb-3 text-2xl font-semibold">
        <div className="flex items-start flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
          <span>{title}</span>
          {status && (
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(status)}`}>
              {status}
            </span>
          )}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            &rarr;
          </span>
        </div>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        {description}
      </p>
    </a>
  );
} 