export default function RackMcpPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-grow flex flex-col items-center justify-start p-24 gap-10">
        <h1 className="text-4xl font-bold text-center">RackMcp MCP Server</h1>
        <p className="text-lg text-center max-w-3xl text-muted-foreground">
          A Ruby gem that implements the Model Context Protocol (MCP) to provide AI assistants with
          Ruby code execution capabilities in your Rack-based apps (Rails, Sinatra, Hanami, Roda, etc.).
        </p>

        <div className="w-full max-w-4xl aspect-video">
          <iframe
            className="w-full h-full rounded-xl border border-white/10"
            src="https://www.youtube.com/embed/bdRZyuUr4dI"
            title="RackMcp MCP Server"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/raja-jamwal/rack-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white"
          >
            View on GitHub
          </a>
        </div>

        <div className="max-w-3xl text-sm text-muted-foreground">
          <p>
            Security note: executes arbitrary Ruby code. Use in development only, don't expose publicly
            without proper authentication and isolation.
          </p>
        </div>
      </div>
    </main>
  );
}


