import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-grow flex flex-col items-center justify-between p-24">
        <div className="relative flex flex-grow place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Logo size="xl" className="justify-start" />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          
          <Card
            href="https://chromewebstore.google.com/detail/jcmmegbigehepgkipgbbeppciahdocko"
            title="Udemy Playback Control"
            description="Use global keyboard shortcut to control Udemy video playback on separate monitor/tab."
            external
            status="active"
          />
          <Card
            href="/agri"
            title="Commodity Daily Prices"
            description="Daily Prices of Commodities in APMC Mandis across India."
            status="discontinued"
          />
          <Card
            href="https://www.mypromind.com/"
            title="ProMind"
            description="Master Any Subject with AI-Powered Adaptive Learning, memorize information 3x faster."
            external
            status="new"
          />
          <Card
            href="https://github.com/raja-jamwal/maeti-fe"
            title="Maeti"
            description="Matrimonial app with Vedic recommendation engine. Project archived and discontinued."
            external
            status="discontinued"
          />
          <Card
            href="https://chromewebstore.google.com/detail/udemy-full-transcript-ext/pfomlffjejikgklcckocdfcahbjobhfo"
            title="Udemy Transcript Extractor"
            description="Extract complete course transcripts from Udemy for use with AI tools like ChatGPT, Claude & Gemini."
            external
            status="active"
          />
          <Card
            href="https://chromewebstore.google.com/detail/cchndpkmgkeojnceagacponccndamhaj"
            title="ChatGPT Notion Exporter"
            description="Export nicely formatted ChatGPT conversations to Notion Database."
            external
            status="active"
          />
          <Card
            href="https://chromewebstore.google.com/detail/mypromind-master-any-subj/fmhinmpjjpppfpgonikapfobhhkknaff"
            title="MyProMind Chrome Extension"
            description="Create AI-powered flashcards anywhere, anytime. Study smarter with adaptive learning algorithms."
            external
            status="new"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
