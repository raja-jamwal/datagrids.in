import Header from './Header';
import Footer from './Footer';

export default function PolicyLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
} 